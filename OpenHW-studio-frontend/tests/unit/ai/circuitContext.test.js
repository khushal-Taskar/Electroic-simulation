import { describe, expect, it } from 'vitest';
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
    },
  },
};

describe('buildCircuitContext', () => {
  it('captures board, selected component, pins, connections, and validation errors', () => {
    const context = buildCircuitContext({
      board: 'uno',
      registry,
      selected: 'led_1',
      components: [
        { id: 'uno_1', type: 'openhw-arduino-uno', x: 0, y: 0 },
        { id: 'led_1', type: 'openhw-led', x: 20, y: 20, attrs: { color: 'red' } },
      ],
      wires: [
        { id: 'w1', from: 'uno_1:13', to: 'led_1:A' },
        { id: 'w2', from: 'led_1:K', to: 'uno_1:GND' },
      ],
      code: 'void loop() {}',
      validationErrors: [{ type: 'LED_WITHOUT_RESISTOR', severity: 'warning' }],
    });

    expect(context.schemaVersion).toBe('electrosim-ai.circuit-context.v1');
    expect(context.board.componentId).toBe('uno_1');
    expect(context.components).toHaveLength(2);
    expect(context.selectedComponent.id).toBe('led_1');
    expect(context.selectedComponent.metadata.pins.map((pin) => pin.id)).toEqual(['A', 'K']);
    expect(context.connections[0].from).toMatchObject({ componentId: 'uno_1', pinId: '13' });
    expect(context.groundConnections).toHaveLength(1);
    expect(context.powerConnections.length).toBeGreaterThan(0);
    expect(context.validationErrors[0].type).toBe('LED_WITHOUT_RESISTOR');
  });
});
