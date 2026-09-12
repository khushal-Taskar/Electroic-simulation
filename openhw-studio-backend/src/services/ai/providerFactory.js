import { OpenAIProvider } from './openAIProvider.js';
import { GeminiProvider } from './geminiProvider.js';

let providerInstance = null;

export function getAIProvider() {
  if (providerInstance) return providerInstance;

  const providerName = String(process.env.AI_PROVIDER || 'gemini').toLowerCase();

  switch (providerName) {
    case 'gemini':
      providerInstance = new GeminiProvider();
      break;
    case 'openai':
      providerInstance = new OpenAIProvider();
      break;
    default: {
      const err = new Error(`Unsupported AI_PROVIDER "${providerName}". Supported providers: gemini, openai.`);
      err.statusCode = 500;
      throw err;
    }
  }

  return providerInstance;
}

export function resetAIProviderForTests() {
  providerInstance = null;
}
