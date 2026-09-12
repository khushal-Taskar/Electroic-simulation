import { normalizeComponentType } from './componentKnowledgeBase.js';

const BOARD_RE = /(arduino|esp32|stm32|rp2040|pico|attiny)/i;
const OUTPUT_LOAD_RE = /(led|rgb-led|7segment|segment|buzzer|servo|motor|relay|speaker)/i;
const POWERED_MODULE_RE = /(sensor|module|display|servo|buzzer|motor|relay|hc-sr04|ultrasonic|dht|mpu|bmp|ds18|temperature|thermistor|ldr|tm1637)/i;
const RESISTOR_RE = /resistor/i;

function pinName(pinId) {
  return String(pinId || '').trim();
}

function pinNameLower(pinId) {
  return pinName(pinId).toLowerCase();
}

function isGroundPin(pinId) {
  const value = pinNameLower(pinId);
  return value === 'gnd' || value.startsWith('gnd_') || value === 'vss' || value === 'k' || value === 'cathode' || value === '-';
}

function isPowerPin(pinId) {
  const value = pinNameLower(pinId);
  return ['vcc', 'vdd', '5v', '3v3', '3.3v', 'vin', 'v+', '+', 'a', 'anode'].includes(value);
}

function isSignalPin(pinId) {
  const value = pinNameLower(pinId);
  return /^(d|a)?\d+$/.test(value) || /^gpio\d+$/.test(value) || /(sig|out|in|data|dio|clk|trig|echo|pwm|ao|do|sda|scl|rx|tx)/.test(value);
}

function isOutputLikePin(pinId, componentType) {
  const pin = pinNameLower(pinId);
  const type = normalizeComponentType(componentType);
  if (BOARD_RE.test(type) && isSignalPin(pin)) return true;
  return /(out|q|tx|trig|echo|clk|dio|sig|pwm)/.test(pin);
}

function endpointKey(endpoint) {
  return `${endpoint?.componentId || ''}:${endpoint?.pinId || ''}`;
}

function componentMap(context) {
  return new Map((context?.components || []).map((component) => [component.id, component]));
}

function issue({
  type,
  severity = 'warning',
  componentId = null,
  compIds = [],
  pinId = null,
  message,
  suggestion,
  confidence = 0.82,
}) {
  const ids = compIds.length ? compIds : componentId ? [componentId] : [];
  return {
    id: `electrosim-${type.toLowerCase()}-${componentId || ids.join('-') || 'project'}-${pinId || 'all'}`,
    source: 'electrosim-ai-rules',
    type,
    severity,
    componentId,
    compIds: ids,
    pinId,
    message,
    suggestion,
    remediation: suggestion,
    confidence,
    autoFix: false,
  };
}

function hasPinConnection(component, matcher) {
  return Object.keys(component?.pinConnections || {}).some((pinId) => matcher(pinId));
}

function connectedEndpoints(context, componentId, pinId = null) {
  return (context?.connections || []).filter((connection) =>
    [connection.from, connection.to].some((endpoint) =>
      endpoint.componentId === componentId && (pinId == null || endpoint.pinId === pinId)
    )
  );
}

function otherEndpoint(connection, endpoint) {
  return endpointKey(connection.from) === endpointKey(endpoint) ? connection.to : connection.from;
}

function hasPathThroughResistor(context, startComponentId, startPinMatcher, endComponentId, endPinMatcher, maxDepth = 5) {
  const components = componentMap(context);
  const queue = [];
  const seen = new Set();

  (context?.connections || []).forEach((connection) => {
    [connection.from, connection.to].forEach((endpoint) => {
      if (endpoint.componentId === startComponentId && startPinMatcher(endpoint.pinId)) {
        queue.push({ endpoint, depth: 0, seenResistor: false });
      }
    });
  });

  while (queue.length) {
    const current = queue.shift();
    const key = `${endpointKey(current.endpoint)}:${current.depth}:${current.seenResistor}`;
    if (seen.has(key) || current.depth > maxDepth) continue;
    seen.add(key);

    if (
      current.endpoint.componentId === endComponentId &&
      endPinMatcher(current.endpoint.pinId) &&
      current.seenResistor
    ) {
      return true;
    }

    for (const connection of connectedEndpoints(context, current.endpoint.componentId, current.endpoint.pinId)) {
      const nextEndpoint = otherEndpoint(connection, current.endpoint);
      const nextComponent = components.get(nextEndpoint.componentId);
      const nextType = normalizeComponentType(nextComponent?.type || '');
      const nextSeenResistor = current.seenResistor || RESISTOR_RE.test(nextType);
      queue.push({ endpoint: nextEndpoint, depth: current.depth + 1, seenResistor: nextSeenResistor });

      if (nextComponent && RESISTOR_RE.test(nextType)) {
        Object.keys(nextComponent.pinConnections || {}).forEach((pinId) => {
          if (pinId !== nextEndpoint.pinId) {
            queue.push({
              endpoint: { componentId: nextComponent.id, pinId, raw: `${nextComponent.id}:${pinId}` },
              depth: current.depth + 1,
              seenResistor: true,
            });
          }
        });
      }
    }
  }

  return false;
}

function mergeIssues(issues) {
  const seen = new Set();
  return issues.filter((entry) => {
    const key = [entry.type, entry.componentId, entry.pinId, entry.message].join('|');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function validateCircuitRules(context) {
  const components = context?.components || [];
  if (!components.length) return [];

  const componentsById = componentMap(context);
  const board = components.find((component) => BOARD_RE.test(normalizeComponentType(component.type)));
  const issues = [];

  if (!board) {
    issues.push(issue({
      type: 'MISSING_CONTROLLER',
      severity: 'warning',
      message: 'No programmable board/controller is present.',
      suggestion: 'Add a supported board before validating code-driven circuit behavior.',
      confidence: 0.95,
    }));
  }

  components.forEach((component) => {
    const type = normalizeComponentType(component.type);
    const pins = component.metadata?.pins || [];
    const pinIds = pins.map((pin) => pin.id);
    const poweredPins = pinIds.filter(isPowerPin);
    const groundPins = pinIds.filter(isGroundPin);
    const connectedPins = Object.keys(component.pinConnections || {});
    const isBoard = BOARD_RE.test(type);
    const isPoweredModule = !isBoard && (POWERED_MODULE_RE.test(type) || poweredPins.length > 0);

    if (connectedPins.length === 0 && !/breadboard|resistor/.test(type)) {
      issues.push(issue({
        type: 'UNCONNECTED_COMPONENT',
        componentId: component.id,
        message: `${component.label || component.id} is not wired into the circuit.`,
        suggestion: 'Connect the required power, ground, and signal pins for this component.',
        confidence: 0.9,
      }));
    }

    if (isPoweredModule && poweredPins.length > 0 && !hasPinConnection(component, isPowerPin)) {
      issues.push(issue({
        type: 'MISSING_POWER',
        componentId: component.id,
        pinId: poweredPins[0],
        message: `${component.label || component.id} has no connected power pin.`,
        suggestion: `Connect ${component.id}:${poweredPins[0]} to a board-compatible power rail.`,
      }));
    }

    if (isPoweredModule && groundPins.length > 0 && !hasPinConnection(component, isGroundPin)) {
      issues.push(issue({
        type: 'MISSING_GROUND',
        componentId: component.id,
        pinId: groundPins[0],
        message: `${component.label || component.id} has no connected ground return.`,
        suggestion: `Connect ${component.id}:${groundPins[0]} to the board GND/common ground.`,
      }));
    }

    if (/led/.test(type) && !/rgb|neopixel|ws2812/.test(type)) {
      const anodePins = pinIds.filter((pin) => /^(a|anode|\+)$/.test(pinNameLower(pin)));
      const cathodePins = pinIds.filter((pin) => /^(k|cathode|-)$/.test(pinNameLower(pin)));
      const hasCurrentLimit = board && hasPathThroughResistor(
        context,
        board.id,
        isSignalPin,
        component.id,
        (pinId) => anodePins.length ? anodePins.includes(pinId) : isPowerPin(pinId),
      );

      if (!hasCurrentLimit) {
        issues.push(issue({
          type: 'LED_WITHOUT_CURRENT_LIMITING_RESISTOR',
          componentId: component.id,
          pinId: anodePins[0] || null,
          message: `${component.label || component.id} does not appear to have a series current-limiting resistor from a board signal pin.`,
          suggestion: 'Place an appropriate resistor in series between the GPIO/output path and the LED anode.',
          confidence: 0.78,
        }));
      }

      if (cathodePins.length && !hasPinConnection(component, (pin) => cathodePins.includes(pin))) {
        issues.push(issue({
          type: 'MISSING_GROUND',
          componentId: component.id,
          pinId: cathodePins[0],
          message: `${component.label || component.id} cathode is not connected.`,
          suggestion: `Connect ${component.id}:${cathodePins[0]} to GND to complete the LED return path.`,
        }));
      }
    }
  });

  (context?.connections || []).forEach((connection) => {
    const fromComponent = componentsById.get(connection.from.componentId);
    const toComponent = componentsById.get(connection.to.componentId);
    const fromIsPower = isPowerPin(connection.from.pinId);
    const toIsGround = isGroundPin(connection.to.pinId);
    const toIsPower = isPowerPin(connection.to.pinId);
    const fromIsGround = isGroundPin(connection.from.pinId);

    if ((fromIsPower && toIsGround) || (toIsPower && fromIsGround)) {
      issues.push(issue({
        type: 'POWER_GROUND_SHORT',
        severity: 'error',
        compIds: [connection.from.componentId, connection.to.componentId].filter(Boolean),
        message: `Power and ground appear to be directly connected by wire ${connection.id || `${connection.from.raw}-${connection.to.raw}`}.`,
        suggestion: 'Remove the direct VCC-to-GND connection or insert the intended load/driver path.',
        confidence: 0.92,
      }));
    }

    if (
      fromComponent &&
      toComponent &&
      isOutputLikePin(connection.from.pinId, fromComponent.type) &&
      isOutputLikePin(connection.to.pinId, toComponent.type) &&
      connection.from.componentId !== connection.to.componentId
    ) {
      issues.push(issue({
        type: 'OUTPUT_TO_OUTPUT_CONFLICT',
        severity: 'warning',
        compIds: [connection.from.componentId, connection.to.componentId],
        message: `${connection.from.raw} and ${connection.to.raw} both look like actively driven outputs.`,
        suggestion: 'Avoid wiring two output drivers together; connect outputs to inputs, loads, or driver stages instead.',
        confidence: 0.65,
      }));
    }
  });

  return mergeIssues(issues);
}

export function combineValidationErrors(context) {
  return mergeIssues([
    ...(context?.validationErrors || []),
    ...validateCircuitRules(context),
  ]);
}
