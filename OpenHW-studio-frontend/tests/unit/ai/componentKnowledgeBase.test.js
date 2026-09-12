import { describe, expect, it } from 'vitest';
import {
  buildComponentMetadata,
  getComponentKnowledge,
  getKnowledgeBaseSummary,
  normalizeComponentType,
} from '../../../src/ai/componentKnowledgeBase.js';

describe('componentKnowledgeBase', () => {
  it('normalizes common OpenHW and Wokwi aliases', () => {
    expect(normalizeComponentType('wokwi-led')).toBe('openhw-led');
    expect(normalizeComponentType('openhw-rbg-led-4pin')).toBe('openhw-rgb-led');
    expect(normalizeComponentType('openhw-temperature-sensor-ntc')).toBe('openhw-ntc-temperature-sensor');
  });

  it('provides structured metadata for challenge components', () => {
    const types = [
      'openhw-led',
      'openhw-resistor',
      'openhw-buzzer',
      'openhw-servo',
      'openhw-rgb-led',
      'openhw-7segment',
      'openhw-ldr-module',
      'openhw-hc-sr04',
    ];

    types.forEach((type) => {
      const knowledge = getComponentKnowledge(type);
      expect(knowledge?.category).toBeTruthy();
      expect(knowledge?.commonMistakes?.length).toBeGreaterThan(0);
    });
  });

  it('combines simulator manifest pins with ElectroSim knowledge', () => {
    const metadata = buildComponentMetadata('wokwi-buzzer', {
      label: 'Buzzer',
      pins: [
        { id: '+', type: 'power', description: 'Positive terminal' },
        { id: '-', type: 'power', description: 'Negative terminal' },
      ],
    });

    expect(metadata.type).toBe('openhw-buzzer');
    expect(metadata.pins.map((pin) => pin.id)).toEqual(['+', '-']);
    expect(metadata.commonConnections.join(' ')).toMatch(/GND/);
  });

  it('summarizes the knowledge base without exposing provider secrets', () => {
    const summary = getKnowledgeBaseSummary();
    expect(summary.length).toBeGreaterThan(8);
    expect(JSON.stringify(summary)).not.toMatch(/api[_-]?key|secret/i);
  });
});
