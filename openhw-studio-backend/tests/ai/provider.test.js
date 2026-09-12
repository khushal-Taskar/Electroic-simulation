import assert from 'node:assert/strict';
import { afterEach, describe, it } from 'node:test';

import { handleElectronicsAiAction } from '../../src/controllers/aiController.js';
import { OpenAIProvider } from '../../src/services/ai/openAIProvider.js';
import { GeminiProvider } from '../../src/services/ai/geminiProvider.js';
import { resetAIProviderForTests } from '../../src/services/ai/providerFactory.js';

function createRes() {
  return {
    statusCode: 200,
    payload: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.payload = payload;
      return this;
    },
  };
}

describe('ElectroSim AI provider integration', () => {
  afterEach(() => {
    resetAIProviderForTests();
    delete process.env.OPENAI_API_KEY;
    delete process.env.GEMINI_API_KEY;
    delete process.env.AI_API_KEY;
    delete process.env.AI_PROVIDER;
  });

  it('returns a configuration error when Gemini API key is not present', async () => {
    process.env.AI_PROVIDER = 'gemini';
    delete process.env.GEMINI_API_KEY;
    const req = {
      params: { action: 'explain-circuit' },
      body: { context: { schemaVersion: 'test', components: [], connections: [] } },
    };
    const res = createRes();

    await handleElectronicsAiAction(req, res);

    assert.equal(res.statusCode, 503);
    assert.match(res.payload.message, /GEMINI_API_KEY/);
  });

  it('returns a configuration error instead of faking output when no API key is present', async () => {
    delete process.env.OPENAI_API_KEY;
    const req = {
      params: { action: 'explain-circuit' },
      body: { context: { schemaVersion: 'test', components: [], connections: [] } },
    };
    const res = createRes();

    await handleElectronicsAiAction(req, res);

    assert.equal(res.statusCode, 503);
    assert.match(res.payload.message, /GEMINI_API_KEY|OPENAI_API_KEY/);
  });

  it('rejects unknown actions', async () => {
    const req = { params: { action: 'unknown' }, body: {} };
    const res = createRes();

    await handleElectronicsAiAction(req, res);

    assert.equal(res.statusCode, 404);
    assert.match(res.payload.error, /Unknown electronics AI action/);
  });

  it('calls the OpenAI API with server-side key and store disabled', async () => {
    const originalFetch = global.fetch;
    let requestBody = null;
    global.fetch = async (_url, options) => {
      requestBody = JSON.parse(options.body);
      return {
        ok: true,
        json: async () => ({ output_text: 'context-aware answer' }),
      };
    };

    try {
      const provider = new OpenAIProvider({ apiKey: 'test-key', model: 'gpt-5' });
      const answer = await provider.explainCircuit({
        context: { schemaVersion: 'test', components: [{ id: 'led_1' }], connections: [] },
        question: 'Explain this.',
        options: { explanationMode: 'advanced', challengeId: 'led-control' },
      });

      assert.equal(answer, 'context-aware answer');
      assert.equal(requestBody.model, 'gpt-5');
      assert.equal(requestBody.store, false);
      assert.match(requestBody.input[0].content[0].text, /Tutor options JSON/);
      assert.match(requestBody.input[0].content[0].text, /advanced/);
      assert.match(requestBody.input[0].content[0].text, /Circuit context JSON/);
    } finally {
      global.fetch = originalFetch;
    }
  });

  it('validates that Gemini provider is properly configured', async () => {
    const provider = new GeminiProvider({ apiKey: 'test-key' });
    assert.equal(provider.providerName, 'gemini');
    assert.equal(provider.isConfigured(), true);

    const unconfigured = new GeminiProvider({ apiKey: null });
    assert.equal(unconfigured.isConfigured(), false);
  });

  it('validates that OpenAI provider is properly configured', async () => {
    const provider = new OpenAIProvider({ apiKey: 'test-key' });
    assert.equal(provider.providerName, 'openai');
    assert.equal(provider.isConfigured(), true);

    const unconfigured = new OpenAIProvider({ apiKey: null });
    assert.equal(unconfigured.isConfigured(), false);
  });
});
