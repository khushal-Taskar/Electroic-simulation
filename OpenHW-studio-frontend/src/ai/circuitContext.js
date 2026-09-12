import { buildComponentMetadata, normalizeComponentType } from './componentKnowledgeBase.js';

function clonePlain(value, fallback) {
  try {
    return JSON.parse(JSON.stringify(value ?? fallback));
  } catch {
    return fallback;
  }
}

function splitEndpoint(endpoint) {
  const raw = String(endpoint || '');
  const [componentId, ...pinParts] = raw.split(/[:.]/);
  return {
    raw,
    componentId: componentId || '',
    pinId: pinParts.join('.') || '',
  };
}

function isGroundPin(pinId) {
  const value = String(pinId || '').toLowerCase();
  return value === 'gnd' || value.startsWith('gnd_') || value === 'vss' || value === 'k' || value === 'cathode';
}

function isPowerPin(pinId) {
  const value = String(pinId || '').toLowerCase();
  return ['vcc', 'vdd', '5v', '3v3', '3.3v', 'vin', 'v+', 'anode', 'a'].includes(value);
}

function normalizeConnection(wire) {
  const from = splitEndpoint(wire?.from);
  const to = splitEndpoint(wire?.to);
  return {
    id: wire?.id || null,
    from,
    to,
    color: wire?.color || null,
    waypoints: Array.isArray(wire?.waypoints) ? wire.waypoints.length : 0,
  };
}

function resolveBoard(components) {
  return components.find((component) => {
    const type = normalizeComponentType(component?.type);
    return /(arduino|esp32|stm32|rp2040|pico|attiny)/i.test(type);
  }) || null;
}

function buildPinUsage(componentId, connections) {
  const usage = {};
  connections.forEach((connection) => {
    [connection.from, connection.to].forEach((endpoint, index) => {
      if (endpoint.componentId !== componentId) return;
      const other = index === 0 ? connection.to : connection.from;
      if (!usage[endpoint.pinId]) usage[endpoint.pinId] = [];
      usage[endpoint.pinId].push({
        componentId: other.componentId,
        pinId: other.pinId,
        endpoint: other.raw,
      });
    });
  });
  return usage;
}

export function buildCircuitContext({
  board,
  components = [],
  wires = [],
  code = '',
  registry = {},
  validationErrors = [],
  runtime = {},
  selected = null,
  currentChallenge = null,
  expectedBehavior = null,
}) {
  const normalizedConnections = (wires || []).map(normalizeConnection);
  const boardComponent = resolveBoard(components);
  const selectedComponent = components.find((component) => component.id === selected) || null;
  const selectedWire = (wires || []).find((wire) => wire.id === selected) || null;

  const normalizedComponents = (components || []).map((component) => {
    const registryEntry = registry[component.type] || registry[normalizeComponentType(component.type)] || {};
    const manifest = registryEntry.manifest || {};
    return {
      id: component.id,
      type: component.type,
      label: component.label || component.attrs?.label || manifest.label || component.type,
      attrs: clonePlain(component.attrs || {}, {}),
      position: { x: Number(component.x) || 0, y: Number(component.y) || 0 },
      rotation: Number(component.rotation) || 0,
      metadata: buildComponentMetadata(component.type, manifest),
      pinConnections: buildPinUsage(component.id, normalizedConnections),
    };
  });

  const powerConnections = normalizedConnections.filter((connection) =>
    isPowerPin(connection.from.pinId) || isPowerPin(connection.to.pinId)
  );
  const groundConnections = normalizedConnections.filter((connection) =>
    isGroundPin(connection.from.pinId) || isGroundPin(connection.to.pinId)
  );

  return {
    schemaVersion: 'electrosim-ai.circuit-context.v1',
    generatedAt: new Date().toISOString(),
    board: boardComponent ? {
      selectedBoard: board,
      componentId: boardComponent.id,
      type: boardComponent.type,
      label: boardComponent.label || boardComponent.type,
    } : { selectedBoard: board || null },
    components: normalizedComponents,
    componentTypes: [...new Set(normalizedComponents.map((component) => component.type))],
    connections: normalizedConnections,
    powerConnections,
    groundConnections,
    sensorConfiguration: normalizedComponents
      .filter((component) => /sensor|ldr|dht|mpu|bmp|ultrasonic|photo|thermistor|pir|mq2/i.test(component.type))
      .map((component) => ({ id: component.id, type: component.type, attrs: component.attrs })),
    code: String(code || ''),
    simulationState: {
      isRunning: Boolean(runtime.isRunning),
      isPaused: Boolean(runtime.isPaused),
      isCompiling: Boolean(runtime.isCompiling),
      durationSeconds: Number(runtime.runDurationSec) || 0,
      speedPercent: Number(runtime.simulationSpeedPercent) || 100,
      liveState: clonePlain(runtime.liveState || {}, {}),
      serialTail: Array.isArray(runtime.serialHistory) ? runtime.serialHistory.slice(-20) : [],
    },
    validationErrors: clonePlain(validationErrors || [], []),
    runtimeErrors: clonePlain(runtime.runtimeErrors || [], []),
    selectedComponent: selectedComponent ? {
      id: selectedComponent.id,
      type: selectedComponent.type,
      label: selectedComponent.label || selectedComponent.attrs?.label || selectedComponent.type,
      metadata: buildComponentMetadata(
        selectedComponent.type,
        (registry[selectedComponent.type] || {}).manifest || {},
      ),
      pinConnections: buildPinUsage(selectedComponent.id, normalizedConnections),
    } : null,
    selectedWire: selectedWire ? normalizeConnection(selectedWire) : null,
    currentChallenge: clonePlain(currentChallenge, null),
    expectedCircuitBehavior: expectedBehavior || currentChallenge?.expectedBehavior || null,
  };
}
