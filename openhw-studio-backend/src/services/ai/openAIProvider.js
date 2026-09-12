import { AIProvider } from './AIProvider.js';

const DEFAULT_TIMEOUT_MS = 25000;

function trimForPrompt(value, maxLength = 18000) {
  const text = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
  return text.length > maxLength ? `${text.slice(0, maxLength)}\n...[truncated]` : text;
}

function actionInstruction(action) {
  switch (action) {
    case 'explain-component':
      return 'Explain the selected component, its pins, required connections, and common mistakes using the provided circuit context.';
    case 'explain-circuit':
      return 'Explain the actual circuit: component roles, power flow, signal flow, expected behavior, and important design considerations.';
    case 'debug-circuit':
      return 'Debug the circuit. Return Problem, Evidence, Likely cause, Suggested fix, Confidence, and Optional hint. Do not claim certainty when evidence is incomplete.';
    case 'connection-assistant':
      return 'Give connection guidance for the selected component(s): source component, source pin, destination component, destination pin, power, ground, supporting parts, warnings, and step-by-step instructions.';
    case 'hint':
      return 'Provide a progressive learning hint. Prefer Hint 1 unless the context shows previous hints. Do not immediately reveal the complete solution in learning mode.';
    case 'generate-challenge':
      return 'Generate an electronics challenge with objective, allowed components, expected behavior, difficulty, hints, validation criteria, and completion criteria tied to actual circuit state.';
    case 'answer-question':
    default:
      return 'Answer the user electronics question using the actual circuit context first, then general electronics knowledge where needed.';
  }
}

export class OpenAIProvider extends AIProvider {
  constructor({
    apiKey = process.env.OPENAI_API_KEY || process.env.AI_API_KEY,
    model = process.env.OPENAI_MODEL || process.env.AI_MODEL || 'gpt-5',
    timeoutMs = Number(process.env.AI_TIMEOUT_MS || DEFAULT_TIMEOUT_MS),
  } = {}) {
    super();
    this.apiKey = apiKey;
    this.model = model;
    this.timeoutMs = timeoutMs;
  }

  get providerName() {
    return 'openai';
  }

  get modelName() {
    return this.model;
  }

  isConfigured() {
    return Boolean(this.apiKey);
  }

  async createResponse(action, { context, question, options = {} }) {
    if (!this.isConfigured()) {
      const err = new Error('AI provider is not configured. Set OPENAI_API_KEY on the backend.');
      err.statusCode = 503;
      throw err;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await fetch('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.model,
          store: false,
          instructions: [
            'You are ElectroSim AI, a careful electronics tutor embedded in a real circuit simulator.',
            'Use the structured simulator context as evidence. Never invent components, wires, simulation results, or runtime behavior.',
            'Keep advice beginner-friendly by default. Call out uncertainty explicitly with phrases like "likely cause" or "possible issue".',
            'Do not suggest executing arbitrary AI-generated JavaScript inside the simulator.',
          ].join('\n'),
          input: [
            {
              role: 'user',
              content: [
                {
                  type: 'input_text',
                  text: `${actionInstruction(action)}\n\nTutor options JSON:\n${trimForPrompt(options, 1200)}\n\nUser question:\n${question || '(none)'}\n\nCircuit context JSON:\n${trimForPrompt(context)}`,
                },
              ],
            },
          ],
        }),
        signal: controller.signal,
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        const err = new Error(payload?.error?.message || `OpenAI request failed with HTTP ${response.status}`);
        err.statusCode = response.status;
        throw err;
      }

      return payload.output_text || extractOutputText(payload) || '';
    } finally {
      clearTimeout(timeout);
    }
  }

  explainComponent(args) {
    return this.createResponse('explain-component', args);
  }

  explainCircuit(args) {
    return this.createResponse('explain-circuit', args);
  }

  debugCircuit(args) {
    return this.createResponse('debug-circuit', args);
  }

  generateHints(args) {
    return this.createResponse('hint', args);
  }

  connectionAssistant(args) {
    return this.createResponse('connection-assistant', args);
  }

  generateChallenge(args) {
    return this.createResponse('generate-challenge', args);
  }

  answerElectronicsQuestion(args) {
    return this.createResponse('answer-question', args);
  }
}

function extractOutputText(payload) {
  const parts = [];
  for (const item of payload?.output || []) {
    for (const content of item?.content || []) {
      if (content?.type === 'output_text' && content.text) parts.push(content.text);
      if (typeof content?.text === 'string') parts.push(content.text);
    }
  }
  return parts.join('\n').trim();
}
