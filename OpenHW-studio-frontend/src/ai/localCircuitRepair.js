import { normalizeComponentType } from './componentKnowledgeBase.js';

function clonePlain(value, fallback) {
  try {
    return JSON.parse(JSON.stringify(value ?? fallback));
  } catch {
    return fallback;
  }
}

function endpointParts(endpoint) {
  const raw = typeof endpoint === 'string' ? endpoint : endpoint?.raw || '';
  const [componentId, ...pinParts] = String(raw).replace('.', ':').split(':');
  return { componentId: componentId || '', pinId: pinParts.join(':') || '', raw };
}

function endpoint(componentId, pinId) {
  return `${componentId}:${pinId}`;
}

function endpointKey(raw) {
  const parts = endpointParts(raw);
  return endpoint(parts.componentId, parts.pinId);
}

function wireEndpoints(wire) {
  return [endpointParts(wire?.from), endpointParts(wire?.to)];
}

function isLed(component) {
  const type = normalizeComponentType(component?.type || '');
  return /led/.test(type) && !/rgb|neopixel|ws2812/.test(type);
}

function isBoard(component) {
  return /(arduino|esp32|stm32|rp2040|pico|attiny)/i.test(normalizeComponentType(component?.type || ''));
}

function isResistor(component) {
  return /resistor/i.test(normalizeComponentType(component?.type || ''));
}

function isGroundPin(pinId) {
  const pin = String(pinId || '').toLowerCase();
  return pin === 'gnd' || pin.startsWith('gnd_') || pin === 'vss' || pin === 'k' || pin === 'cathode' || pin === '-';
}

function isPowerPin(pinId) {
  const pin = String(pinId || '').toLowerCase();
  return ['5v', '3v3', '3.3v', 'vcc', 'vdd', 'vin', 'v+', '+'].includes(pin);
}

function isBoardSignalPin(pinId) {
  return /^(d)?\d+$/i.test(String(pinId || '')) || /^gpio\d+$/i.test(String(pinId || ''));
}

function isLedAnode(pinId) {
  return /^(a|anode|\+)$/i.test(String(pinId || ''));
}

function isLedCathode(pinId) {
  return /^(k|cathode|-)$/i.test(String(pinId || ''));
}

function findBoard(components) {
  return components.find(isBoard) || null;
}

function findGroundPin(board) {
  const preferred = ['gnd_1', 'gnd', 'GND', 'GND1', 'vss'];
  return preferred.find((pinId) => pinId) || 'gnd_1';
}

function findSignalPin(board) {
  const preferred = ['13', 'D13', 'd13', 'gpio13'];
  return preferred.find((pinId) => pinId) || '13';
}

function nextId(prefix, existingIds) {
  let index = 1;
  while (existingIds.has(`${prefix}_${index}`)) index += 1;
  const id = `${prefix}_${index}`;
  existingIds.add(id);
  return id;
}

function addWireIfMissing(wires, existingIds, from, to, color = 'green') {
  const fromKey = endpointKey(from);
  const toKey = endpointKey(to);
  const exists = wires.some((wire) => {
    const a = endpointKey(wire.from);
    const b = endpointKey(wire.to);
    return (a === fromKey && b === toKey) || (a === toKey && b === fromKey);
  });
  if (exists) return null;
  const wire = {
    id: nextId('wire_fix', existingIds),
    from,
    to,
    color,
    waypoints: [],
    path: null,
    isBelow: false,
    isSocket: false,
    offset: 0,
    ownerIds: ['electrosim-ai-local-repair'],
  };
  wires.push(wire);
  return wire;
}

function findIssueComponent(components, error, matcher) {
  const candidates = [
    error?.componentId,
    ...(Array.isArray(error?.compIds) ? error.compIds : []),
  ].filter(Boolean);
  const fromIssue = candidates
    .map((id) => components.find((component) => component.id === id))
    .find((component) => component && matcher(component));
  return fromIssue || components.find(matcher) || null;
}

function issueText(error) {
  return [error?.type, error?.ruleId, error?.message, error?.remediation, error?.suggestion]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function notApplied(reason, projectData) {
  return {
    applied: false,
    reason,
    components: projectData.components,
    connections: projectData.connections,
    appliedFixes: [],
  };
}

function applied(description, components, connections) {
  return {
    applied: true,
    components,
    connections,
    appliedFixes: [{ description }],
  };
}

function repairLedGround(projectData, error) {
  const components = clonePlain(projectData.components, []);
  const connections = clonePlain(projectData.connections, []);
  const board = findBoard(components);
  const led = findIssueComponent(components, error, isLed);
  if (!board || !led) {
    return notApplied('Manual fix required: add a board and connect the LED cathode to a board GND pin.', projectData);
  }

  const existingIds = new Set([...components.map((component) => component.id), ...connections.map((wire) => wire.id)]);
  const gndPin = findGroundPin(board);
  const alreadyGrounded = connections.some((wire) => {
    const [a, b] = wireEndpoints(wire);
    return (
      (a.componentId === led.id && isLedCathode(a.pinId) && b.componentId === board.id && isGroundPin(b.pinId)) ||
      (b.componentId === led.id && isLedCathode(b.pinId) && a.componentId === board.id && isGroundPin(a.pinId))
    );
  });
  if (alreadyGrounded) {
    return notApplied(`Manual fix required: ${led.id}:K already appears grounded, so inspect the actual LED return path.`, projectData);
  }

  const added = addWireIfMissing(connections, existingIds, endpoint(led.id, 'K'), endpoint(board.id, gndPin), '#111827');
  if (!added) {
    return notApplied(`Manual fix required: connect ${led.id}:K to ${board.id}:${gndPin}.`, projectData);
  }
  return applied(`Connected ${led.id}:K to ${board.id}:${gndPin}.`, components, connections);
}

function findDirectBoardToLedAnode(connections, board, led) {
  return connections.find((wire) => {
    const [a, b] = wireEndpoints(wire);
    return (
      (a.componentId === board.id && isBoardSignalPin(a.pinId) && b.componentId === led.id && isLedAnode(b.pinId)) ||
      (b.componentId === board.id && isBoardSignalPin(b.pinId) && a.componentId === led.id && isLedAnode(a.pinId))
    );
  }) || null;
}

function getBoardSideOfWire(wire, board) {
  const [a, b] = wireEndpoints(wire);
  return a.componentId === board.id ? a : b.componentId === board.id ? b : null;
}

function getFreeResistor(components, connections) {
  return components.find((component) =>
    isResistor(component) &&
    !connections.some((wire) => wireEndpoints(wire).some((point) => point.componentId === component.id))
  ) || null;
}

function createResistorNear(led, existingIds) {
  const id = nextId('openhw-resistor_fix', existingIds);
  return {
    id,
    type: 'openhw-resistor',
    x: Math.max(20, Number(led?.x || 340) - 110),
    y: Number(led?.y || 220) + 6,
    rotation: Number(led?.rotation || 0),
    attrs: { resistance: 220, value: 220, label: '220 ohm' },
  };
}

function repairLedCurrentLimit(projectData, error) {
  const components = clonePlain(projectData.components, []);
  let connections = clonePlain(projectData.connections, []);
  const board = findBoard(components);
  const led = findIssueComponent(components, error, isLed);
  if (!board || !led) {
    return notApplied('Manual fix required: add a board, a resistor, and wire GPIO -> resistor -> LED anode.', projectData);
  }

  const existingIds = new Set([...components.map((component) => component.id), ...connections.map((wire) => wire.id)]);
  const directWire = findDirectBoardToLedAnode(connections, board, led);
  const boardPin = directWire ? getBoardSideOfWire(directWire, board)?.pinId : findSignalPin(board);
  const resistor = getFreeResistor(components, connections) || createResistorNear(led, existingIds);
  if (!components.some((component) => component.id === resistor.id)) components.push(resistor);

  if (directWire) {
    connections = connections.filter((wire) => wire.id !== directWire.id);
  } else {
    const anodeAlreadyUsed = connections.some((wire) =>
      wireEndpoints(wire).some((point) => point.componentId === led.id && isLedAnode(point.pinId))
    );
    if (anodeAlreadyUsed) {
      return notApplied(`Manual fix required: move the existing LED anode wiring so ${board.id}:${boardPin} goes through a resistor before ${led.id}:A.`, projectData);
    }
  }

  addWireIfMissing(connections, existingIds, endpoint(board.id, boardPin), endpoint(resistor.id, '1'), 'green');
  addWireIfMissing(connections, existingIds, endpoint(resistor.id, '2'), endpoint(led.id, 'A'), 'green');

  const gndPin = findGroundPin(board);
  addWireIfMissing(connections, existingIds, endpoint(led.id, 'K'), endpoint(board.id, gndPin), '#111827');

  return applied(`Inserted a 220 ohm resistor between ${board.id}:${boardPin} and ${led.id}:A.`, components, connections);
}

function repairPowerGroundShort(projectData, error) {
  const components = clonePlain(projectData.components, []);
  const connections = clonePlain(projectData.connections, []);
  const shortWire = connections.find((wire) => {
    const [a, b] = wireEndpoints(wire);
    return (isPowerPin(a.pinId) && isGroundPin(b.pinId)) || (isPowerPin(b.pinId) && isGroundPin(a.pinId));
  });
  if (!shortWire) {
    return notApplied('Manual fix required: remove the wire that directly connects a power pin to GND.', projectData);
  }
  return applied(`Removed direct power-to-ground wire ${shortWire.id}.`, components, connections.filter((wire) => wire.id !== shortWire.id));
}

function repairLedBetweenBoardOutputs(projectData, error) {
  const components = clonePlain(projectData.components, []);
  const connections = clonePlain(projectData.connections, []);
  const board = findBoard(components);
  const led = findIssueComponent(components, error, isLed);
  if (!board || !led) {
    return notApplied('Manual fix required: connect the LED cathode to GND instead of another output pin.', projectData);
  }
  const gndPin = findGroundPin(board);
  const targetWire = connections.find((wire) => {
    const [a, b] = wireEndpoints(wire);
    return (
      (a.componentId === led.id && isLedCathode(a.pinId) && b.componentId === board.id && isBoardSignalPin(b.pinId)) ||
      (b.componentId === led.id && isLedCathode(b.pinId) && a.componentId === board.id && isBoardSignalPin(a.pinId))
    );
  });
  if (!targetWire) {
    return notApplied(`Manual fix required: connect ${led.id}:K to ${board.id}:${gndPin} and keep the anode on one output path.`, projectData);
  }
  const [a, b] = wireEndpoints(targetWire);
  const nextConnections = connections.map((wire) => {
    if (wire.id !== targetWire.id) return wire;
    if (a.componentId === led.id) return { ...wire, to: endpoint(board.id, gndPin), color: '#111827' };
    return { ...wire, from: endpoint(board.id, gndPin), color: '#111827' };
  });
  return applied(`Moved ${led.id}:K from a signal pin to ${board.id}:${gndPin}.`, components, nextConnections);
}

export function applyLocalCircuitRepair(projectData, error) {
  const text = issueText(error);
  if (!projectData?.components || !projectData?.connections) {
    return notApplied('Manual fix required: circuit state is unavailable, so no safe automatic repair can be made.', {
      components: [],
      connections: [],
    });
  }

  if (/power_ground_short|short circuit|power and ground|vcc-to-gnd|vcc.*gnd|gnd.*vcc/.test(text)) {
    return repairPowerGroundShort(projectData, error);
  }

  if (/between mcu gpio pins|between.*output|output-to-output|actively driven outputs/.test(text)) {
    return repairLedBetweenBoardOutputs(projectData, error);
  }

  if (/led/.test(text) && /resistor|current/.test(text)) {
    return repairLedCurrentLimit(projectData, error);
  }

  if (/missing_ground|ground|cathode|return path|floating/.test(text) && /led|cathode|k\b/.test(text)) {
    return repairLedGround(projectData, error);
  }

  if (/d0|d1|rx|tx|serial/.test(text)) {
    return notApplied('Manual fix required: move the wire from D0/D1 (RX/TX) to an unused GPIO such as D2-D13, then update the code pin number if needed.', projectData);
  }

  if (/vin|5\.00 v|5v|3\.3|3v3|voltage/.test(text)) {
    return notApplied('Manual fix required: move the sensor power wire from 5V/VIN to the board 3.3V pin, or use a level shifter if the module requires it.', projectData);
  }

  return notApplied(`Manual fix required: ${error?.remediation || error?.suggestion || 'inspect the highlighted component and rewire the affected pins.'}`, projectData);
}

export function circuitStateChanged(before, after) {
  return JSON.stringify(before || {}) !== JSON.stringify(after || {});
}
