import { GoogleGenAI } from '@google/genai';
import { AIProvider } from './AIProvider.js';

const DEFAULT_TIMEOUT_MS = 30000;

function trimForPrompt(value, maxLength = 18000) {
  const text = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
  return text.length > maxLength ? `${text.slice(0, maxLength)}\n...[truncated]` : text;
}

function actionInstruction(action) {
  switch (action) {
    case 'explain-component':
      return 'Explain the selected component, its pins, required connections, and common mistakes using the provided circuit context. Keep it student-friendly.';
    case 'explain-circuit':
      return 'Explain the actual circuit: component roles, power flow, signal flow, expected behavior, and important design considerations. Use the provided context only.';
    case 'debug-circuit':
      return 'Debug the circuit using the validation findings below. For each issue, explain the Problem, Evidence, Likely cause, and a Suggested fix in simple student-friendly language. Do not invent problems not supported by the context. State uncertainty explicitly.';
    case 'connection-assistant':
      return 'Give connection guidance for the selected component: which pins to connect where, power needs, ground path, any required supporting parts (like resistors), warnings, and step-by-step wiring instructions.';
    case 'hint':
      return 'Provide a progressive learning hint at the requested level. Hint 1: a gentle nudge without revealing the answer. Hint 2: more specific guidance. Hint 3: near-complete instructions. Respect the hint level.';
    case 'generate-challenge':
      return 'Generate an electronics challenge with objective, allowed components, expected behavior, difficulty, hints, and completion criteria tied to actual circuit state.';
    case 'answer-question':
    default:
      return 'Answer the user\'s electronics question using the actual circuit context first, then general electronics knowledge where needed. Be specific to their circuit.';
  }
}

const SYSTEM_INSTRUCTION = [
  'You are ElectroSim AI, a careful and friendly electronics tutor embedded in a real circuit simulator.',
  'You receive structured simulator context as JSON showing the real current state: components, wires, pins, validation errors, selected component, and code.',
  'RULES:',
  '- Use ONLY the provided context as evidence. Never invent components, wires, or simulation results that are not in the context.',
  '- Never claim a component exists if it is not listed in the context.',
  '- Never claim a wire/connection exists if it is not listed in the connections array.',
  '- Keep advice beginner-friendly. Use simple language a high-school student would understand.',
  '- Call out uncertainty explicitly with phrases like "likely cause" or "possible issue".',
  '- You are a TUTOR, not an automatic repair tool. NEVER offer to modify the circuit directly. Instead, explain what the student should do and why.',
  '- When explaining validation errors, translate the technical message into student-friendly language.',
  '- Do not suggest executing arbitrary JavaScript inside the simulator.',
  '- If asked something unrelated to electronics, politely redirect to circuit/electronics topics.',
].join('\n');

export class GeminiProvider extends AIProvider {
  constructor({
    apiKey = process.env.GEMINI_API_KEY,
    model = process.env.GEMINI_MODEL || 'gemini-3.6-flash',
    timeoutMs = Number(process.env.AI_TIMEOUT_MS || DEFAULT_TIMEOUT_MS),
  } = {}) {
    super();
    this._apiKey = apiKey;
    this._model = model;
    this._timeoutMs = timeoutMs;
    this._client = null;
  }

  get providerName() {
    return 'gemini';
  }

  get modelName() {
    return this._model;
  }

  isConfigured() {
    return Boolean(this._apiKey);
  }

  _getClient() {
    if (!this._client) {
      if (!this.isConfigured()) {
        const err = new Error('Gemini AI provider is not configured. Set GEMINI_API_KEY in the backend .env file.');
        err.statusCode = 503;
        throw err;
      }
      this._client = new GoogleGenAI({ apiKey: this._apiKey });
    }
    return this._client;
  }

  async createResponse(action, { context, question, options = {} }) {
    const client = this._getClient();

    const userPrompt = [
      actionInstruction(action),
      '',
      `Tutor options: ${trimForPrompt(options, 1200)}`,
      '',
      `User question: ${question || '(none)'}`,
      '',
      `Circuit context JSON:`,
      trimForPrompt(context),
    ].join('\n');

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this._timeoutMs);

    try {
      const response = await client.models.generateContent({
        model: this._model,
        systemInstruction: SYSTEM_INSTRUCTION,
        contents: {
          role: 'user',
          parts: [{ text: userPrompt }],
        },
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 2048,
        },
      }, {
        signal: controller.signal,
      });

      return response.text() || '';
    } catch (err) {
      if (err.name === 'AbortError') {
        const timeoutErr = new Error('Gemini AI request timed out.');
        timeoutErr.statusCode = 504;
        throw timeoutErr;
      }
      // Preserve status code from SDK errors
      if (!err.statusCode) {
        err.statusCode = 502;
      }
      throw err;
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
