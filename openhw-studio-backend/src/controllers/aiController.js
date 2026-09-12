import { getAIProvider } from '../services/ai/providerFactory.js';

const ACTION_TO_METHOD = {
  'explain-component': 'explainComponent',
  'explain-circuit': 'explainCircuit',
  'debug-circuit': 'debugCircuit',
  hint: 'generateHints',
  'connection-assistant': 'connectionAssistant',
  'generate-challenge': 'generateChallenge',
  'answer-question': 'answerElectronicsQuestion',
};

function sanitizeContext(context) {
  if (!context || typeof context !== 'object' || Array.isArray(context)) {
    const err = new Error('A structured circuit context object is required.');
    err.statusCode = 400;
    throw err;
  }

  return {
    schemaVersion: String(context.schemaVersion || ''),
    board: context.board || null,
    components: Array.isArray(context.components) ? context.components.slice(0, 120) : [],
    componentTypes: Array.isArray(context.componentTypes) ? context.componentTypes.slice(0, 120) : [],
    connections: Array.isArray(context.connections) ? context.connections.slice(0, 400) : [],
    powerConnections: Array.isArray(context.powerConnections) ? context.powerConnections.slice(0, 100) : [],
    groundConnections: Array.isArray(context.groundConnections) ? context.groundConnections.slice(0, 100) : [],
    sensorConfiguration: Array.isArray(context.sensorConfiguration) ? context.sensorConfiguration.slice(0, 80) : [],
    code: String(context.code || '').slice(0, 12000),
    simulationState: context.simulationState || {},
    validationErrors: Array.isArray(context.validationErrors) ? context.validationErrors.slice(0, 80) : [],
    runtimeErrors: Array.isArray(context.runtimeErrors) ? context.runtimeErrors.slice(0, 40) : [],
    selectedComponent: context.selectedComponent || null,
    selectedWire: context.selectedWire || null,
    currentChallenge: context.currentChallenge || null,
    expectedCircuitBehavior: context.expectedCircuitBehavior || null,
  };
}

function sanitizeOptions(options) {
  if (!options || typeof options !== 'object' || Array.isArray(options)) return {};
  return {
    explanationMode: ['beginner', 'advanced'].includes(options.explanationMode) ? options.explanationMode : undefined,
    hintLevel: Number.isFinite(Number(options.hintLevel)) ? Math.min(3, Math.max(1, Number(options.hintLevel))) : undefined,
    challengeId: typeof options.challengeId === 'string' ? options.challengeId.slice(0, 120) : undefined,
  };
}

export async function handleElectronicsAiAction(req, res) {
  const action = String(req.params.action || '').toLowerCase();
  const method = ACTION_TO_METHOD[action];
  if (!method) {
    return res.status(404).json({ error: `Unknown electronics AI action: ${action}` });
  }

  try {
    const provider = getAIProvider();
    const context = sanitizeContext(req.body?.context);
    const question = String(req.body?.question || '').slice(0, 3000);
    const answer = await provider[method]({ context, question, options: sanitizeOptions(req.body?.options) });

    return res.json({
      action,
      provider: provider.providerName || process.env.AI_PROVIDER || 'gemini',
      model: provider.modelName || process.env.GEMINI_MODEL || 'gemini-2.0-flash',
      answer,
    });
  } catch (err) {
    const status = err.statusCode || (err.name === 'AbortError' ? 504 : 500);
    return res.status(status).json({
      error: 'Electronics AI request failed',
      message: err.name === 'AbortError' ? 'AI request timed out.' : err.message,
    });
  }
}
