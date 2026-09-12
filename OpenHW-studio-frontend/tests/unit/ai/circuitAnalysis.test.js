import { describe, expect, it } from 'vitest';
import {
  buildConnectionGuidance,
  buildDebugReport,
  buildExplainComponent,
  buildProgressiveHint,
  buildSignalFlow,
  calculateSkillScore,
  ELECTROSIM_CHALLENGES,
  validateChallengeCompletion,
} from '../../../src/ai/circuitAnalysis.js';
import { buildCircuitContext } from '../../../src/ai/circuitContext.js';

const registry = {
  'openhw-arduino-uno': {
    manifest: {
      type: 'openhw-arduino-uno',
      label: 'Arduino Uno',
      pins: [
        { id: '13', type: 'digital', description: 'D13' },
        { id: 'GND', type: 'power', description: 'Ground' },
      ],
    },
  },
  'openhw-led': {
    manifest: {
      type: 'openhw-led',
      label: 'LED',
      pins: [
        { id: 'A', type: 'input', description: 'Anode' },
        { id: 'K', type: 'input', description: 'Cathode' },
      ],
      autowiring: {
        connections: [
          { from: 'A', to: 'arduino:13', via: 'openhw-resistor', attrs: { value: '220' } },
          { from: 'K', to: 'arduino:GND' },
        ],
      },
    },
  },
  'openhw-resistor': {
    manifest: {
      type: 'openhw-resistor',
      label: 'Resistor',
      pins: [{ id: 'p1' }, { id: 'p2' }],
    },
  },
};

function ledContext({ selected = 'led_1', code = 'void loop(){ digitalWrite(13, HIGH); }', validationErrors = [] } = {}) {
  return buildCircuitContext({
    board: 'uno',
    registry,
    selected,
    components: [
      { id: 'uno_1', type: 'openhw-arduino-uno', x: 0, y: 0 },
      { id: 'res_1', type: 'openhw-resistor', x: 10, y: 0, attrs: { value: '220' } },
      { id: 'led_1', type: 'openhw-led', x: 20, y: 0 },
    ],
    wires: [
      { id: 'w1', from: 'uno_1:13', to: 'res_1:p1' },
      { id: 'w2', from: 'res_1:p2', to: 'led_1:A' },
      { id: 'w3', from: 'led_1:K', to: 'uno_1:GND' },
    ],
    code,
    validationErrors,
  });
}

describe('circuitAnalysis', () => {
  it('validates LED challenge completion from actual topology and code', () => {
    const result = validateChallengeCompletion('led-control', ledContext());
    expect(result.complete).toBe(true);
  });

  it('does not complete challenge when validation has a blocking error', () => {
    const result = validateChallengeCompletion('led-control', ledContext({
      validationErrors: [{ severity: 'error', message: 'LED has no resistor' }],
    }));
    expect(result.complete).toBe(false);
    expect(result.failures.join(' ')).toMatch(/Resolve blocking/);
  });

  it('builds progressive hints and connection guidance', () => {
    expect(buildExplainComponent(ledContext())).toMatch(/Pins:/);
    expect(buildProgressiveHint(ledContext(), ELECTROSIM_CHALLENGES[0], 3)).toMatch(/GPIO/);
    const guidance = buildConnectionGuidance(ledContext());
    expect(guidance.steps.join('\n')).toMatch(/led_1:A/);
    expect(guidance.steps.join('\n')).toMatch(/uno_1:13/);
  });

  it('creates debug findings and a non-punitive skill score', () => {
    const context = ledContext();
    expect(buildDebugReport(context)[0].problem).toMatch(/No rule-based/);
    const score = calculateSkillScore({ context, challengeResult: { complete: true }, hintsUsed: 2 });
    expect(score.score).toBeGreaterThan(70);
    expect(score.explanation).toMatch(/Hints reduce/);
  });

  it('derives signal flow from connected components', () => {
    const flow = buildSignalFlow(ledContext());
    expect(flow.paths.length).toBeGreaterThan(0);
    expect(flow.paths[0].labels.join(' -> ')).toMatch(/Arduino Uno/);
  });

  it('includes the broader practice challenge set', () => {
    const ids = ELECTROSIM_CHALLENGES.map((challenge) => challenge.id);
    expect(ids).toEqual(expect.arrayContaining([
      'traffic-light',
      'ldr-automatic-light',
      'buzzer',
      'servo',
      'temperature-sensor',
      'rgb-led',
      'seven-segment',
      'digital-logic',
    ]));
  });
});
