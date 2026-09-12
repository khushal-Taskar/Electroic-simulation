import { describe, expect, it } from 'vitest';
import { buildCircuitContext } from '../../../src/ai/circuitContext.js';
import { validateCircuitRules } from '../../../src/ai/electronicsValidation.js';

const registry = {
  'openhw-arduino-uno': {
    manifest: {
      type: 'openhw-arduino-uno',
      label: 'Arduino Uno',
      pins: [
        { id: '13', type: 'digital', description: 'D13' },
        { id: '12', type: 'digital', description: 'D12' },
        { id: '5V', type: 'power', description: '5 V' },
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
    },
  },
  'openhw-resistor': {
    manifest: {
      type: 'openhw-resistor',
      label: 'Resistor',
      pins: [{ id: 'p1' }, { id: 'p2' }],
    },
  },
  'openhw-hc-sr04': {
    manifest: {
      type: 'openhw-hc-sr04',
      label: 'HC-SR04',
      pins: [
        { id: 'VCC', type: 'power' },
        { id: 'TRIG', type: 'input' },
        { id: 'ECHO', type: 'output' },
        { id: 'GND', type: 'power' },
      ],
    },
  },
};

function context({ components, wires }) {
  return buildCircuitContext({
    board: 'uno',
    registry,
    components,
    wires,
  });
}

describe('validateCircuitRules', () => {
  it('detects an LED wired without current limiting', () => {
    const result = validateCircuitRules(context({
      components: [
        { id: 'uno_1', type: 'openhw-arduino-uno' },
        { id: 'led_1', type: 'openhw-led' },
      ],
      wires: [
        { id: 'w1', from: 'uno_1:13', to: 'led_1:A' },
        { id: 'w2', from: 'led_1:K', to: 'uno_1:GND' },
      ],
    }));

    expect(result.map((issue) => issue.type)).toContain('LED_WITHOUT_CURRENT_LIMITING_RESISTOR');
  });

  it('does not flag current limiting when a resistor is in series', () => {
    const result = validateCircuitRules(context({
      components: [
        { id: 'uno_1', type: 'openhw-arduino-uno' },
        { id: 'res_1', type: 'openhw-resistor' },
        { id: 'led_1', type: 'openhw-led' },
      ],
      wires: [
        { id: 'w1', from: 'uno_1:13', to: 'res_1:p1' },
        { id: 'w2', from: 'res_1:p2', to: 'led_1:A' },
        { id: 'w3', from: 'led_1:K', to: 'uno_1:GND' },
      ],
    }));

    expect(result.map((issue) => issue.type)).not.toContain('LED_WITHOUT_CURRENT_LIMITING_RESISTOR');
  });

  it('detects missing power and ground on powered modules', () => {
    const result = validateCircuitRules(context({
      components: [
        { id: 'uno_1', type: 'openhw-arduino-uno' },
        { id: 'sonar_1', type: 'openhw-hc-sr04' },
      ],
      wires: [
        { id: 'w1', from: 'uno_1:13', to: 'sonar_1:TRIG' },
        { id: 'w2', from: 'uno_1:12', to: 'sonar_1:ECHO' },
      ],
    }));

    expect(result.map((issue) => issue.type)).toEqual(expect.arrayContaining(['MISSING_POWER', 'MISSING_GROUND']));
  });

  it('detects direct power-to-ground shorts', () => {
    const result = validateCircuitRules(context({
      components: [
        { id: 'uno_1', type: 'openhw-arduino-uno' },
      ],
      wires: [
        { id: 'w1', from: 'uno_1:5V', to: 'uno_1:GND' },
      ],
    }));

    expect(result.find((issue) => issue.type === 'POWER_GROUND_SHORT')?.severity).toBe('error');
  });

  it('detects suspicious output-to-output connections', () => {
    const result = validateCircuitRules(context({
      components: [
        { id: 'uno_1', type: 'openhw-arduino-uno' },
        { id: 'sonar_1', type: 'openhw-hc-sr04' },
      ],
      wires: [
        { id: 'w1', from: 'uno_1:12', to: 'sonar_1:ECHO' },
        { id: 'w2', from: 'sonar_1:VCC', to: 'uno_1:5V' },
        { id: 'w3', from: 'sonar_1:GND', to: 'uno_1:GND' },
      ],
    }));

    expect(result.map((issue) => issue.type)).toContain('OUTPUT_TO_OUTPUT_CONFLICT');
  });
});
