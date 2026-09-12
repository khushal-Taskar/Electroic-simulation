import { normalizeComponentType } from './componentKnowledgeBase.js';
import { combineValidationErrors } from './electronicsValidation.js';

export const ELECTROSIM_CHALLENGES = [
  {
    id: 'led-control',
    title: 'LED Control',
    difficulty: 'beginner',
    objective: 'Wire an LED to a board GPIO through a current-limiting resistor and provide a ground return.',
    allowedComponents: ['openhw-arduino-uno', 'openhw-pico', 'openhw-esp32', 'openhw-led', 'openhw-resistor', 'openhw-breadboard'],
    expectedBehavior: 'The board drives a GPIO pin and the LED can turn on safely through a resistor.',
    hints: [
      'Check whether the LED has everything it needs to control current.',
      'Look for a resistor in series between the board GPIO and the LED anode.',
      'Try wiring board GPIO -> resistor -> LED anode, then LED cathode -> GND.',
    ],
  },
  {
    id: 'button-led',
    title: 'Button + LED',
    difficulty: 'beginner',
    objective: 'Use a button input to control an LED output.',
    allowedComponents: ['openhw-arduino-uno', 'openhw-pico', 'openhw-esp32', 'openhw-led', 'openhw-resistor', 'openhw-pushbutton', 'openhw-6mm-pushbutton', 'openhw-breadboard'],
    expectedBehavior: 'Pressing the button changes a GPIO input and the sketch drives the LED output.',
    hints: [
      'One component should be an input and one should be an output.',
      'The button input needs a stable HIGH or LOW state, usually with a pull-up or pull-down.',
      'Wire the LED safely with a resistor, wire the button to a GPIO and GND or VCC, then read it in code.',
    ],
  },
  {
    id: 'potentiometer-led',
    title: 'Potentiometer LED Dimmer',
    difficulty: 'intermediate',
    objective: 'Read a potentiometer on an analog input and use it to control LED brightness.',
    allowedComponents: ['openhw-arduino-uno', 'openhw-pico', 'openhw-esp32', 'openhw-led', 'openhw-resistor', 'openhw-potentiometer', 'openhw-slide-potentiometer', 'openhw-breadboard'],
    expectedBehavior: 'The potentiometer wiper produces an analog value that the code maps to an LED PWM output.',
    hints: [
      'The potentiometer should create a voltage between power and ground.',
      'The middle/wiper pin should go to an analog-capable board pin.',
      'Use analogRead on the wiper and analogWrite or PWM output for the LED.',
    ],
  },
  {
    id: 'ultrasonic-distance',
    title: 'Ultrasonic Distance',
    difficulty: 'intermediate',
    objective: 'Connect an HC-SR04 style ultrasonic sensor and read distance in code.',
    allowedComponents: ['openhw-arduino-uno', 'openhw-pico', 'openhw-esp32', 'openhw-hc-sr04', 'openhw-breadboard'],
    expectedBehavior: 'The board sends a trigger pulse and measures the echo pulse duration.',
    hints: [
      'The sensor needs both power and a shared ground.',
      'TRIG and ECHO should be on separate GPIO pins with compatible voltage levels.',
      'Wire VCC/GND, TRIG to an output pin, ECHO to an input pin, then measure pulse duration in code.',
    ],
  },
  {
    id: 'traffic-light',
    title: 'Traffic Light',
    difficulty: 'beginner',
    objective: 'Wire three LEDs with current-limiting resistors and sequence them in code.',
    allowedComponents: ['openhw-arduino-uno', 'openhw-pico', 'openhw-esp32', 'openhw-led', 'openhw-resistor', 'openhw-breadboard'],
    expectedBehavior: 'Red, yellow, and green outputs turn on in a timed sequence.',
    requiredTypes: ['led', 'resistor'],
    minComponents: { led: 3, resistor: 3 },
    codeSignals: [/digitalwrite|analogwrite|gpio|pin\(/i, /delay|sleep|millis/i],
    hints: [
      'Think of this as three safe LED circuits sharing one controller.',
      'Each LED needs its own GPIO path and current-limiting resistor.',
      'Wire three GPIO pins through three resistors to three LEDs, then sequence the pins in code.',
    ],
  },
  {
    id: 'ldr-automatic-light',
    title: 'LDR Automatic Light',
    difficulty: 'intermediate',
    objective: 'Use a light sensor input to control an LED automatically.',
    allowedComponents: ['openhw-arduino-uno', 'openhw-pico', 'openhw-esp32', 'openhw-led', 'openhw-resistor', 'openhw-ldr-module', 'openhw-photoresistor', 'openhw-breadboard'],
    expectedBehavior: 'The LED changes state when the simulated light level changes.',
    requiredTypes: ['led', 'ldr|photoresistor'],
    codeSignals: [/analogread|adc/i, /digitalwrite|analogwrite|pwm/i],
    hints: [
      'Look for one analog input and one output.',
      'The light sensor signal should reach an analog-capable pin.',
      'Read the LDR value, compare it with a threshold, and drive the LED.',
    ],
  },
  {
    id: 'buzzer',
    title: 'Buzzer',
    difficulty: 'beginner',
    objective: 'Wire a buzzer to a board output and generate a tone or on/off signal.',
    allowedComponents: ['openhw-arduino-uno', 'openhw-pico', 'openhw-esp32', 'openhw-buzzer', 'openhw-resistor', 'openhw-breadboard'],
    expectedBehavior: 'The buzzer responds to a GPIO output or tone signal.',
    requiredTypes: ['buzzer'],
    codeSignals: [/tone|digitalwrite|pwm|analogwrite/i],
    hints: [
      'A buzzer is an output load.',
      'It needs a signal path and a ground return.',
      'Connect signal to a compatible GPIO and the other side to GND, then drive it in code.',
    ],
  },
  {
    id: 'servo',
    title: 'Servo',
    difficulty: 'intermediate',
    objective: 'Connect a servo with power, ground, and signal, then command its angle.',
    allowedComponents: ['openhw-arduino-uno', 'openhw-pico', 'openhw-esp32', 'openhw-servo', 'openhw-breadboard'],
    expectedBehavior: 'The servo angle changes when the sketch writes a servo position.',
    requiredTypes: ['servo'],
    codeSignals: [/servo|write|pwm/i],
    hints: [
      'A servo has three roles: power, ground, and signal.',
      'The signal wire goes to a PWM-capable or servo-supported GPIO.',
      'Connect VCC, GND, and signal, then use the servo library or PWM command.',
    ],
  },
  {
    id: 'temperature-sensor',
    title: 'Temperature Sensor',
    difficulty: 'intermediate',
    objective: 'Read a temperature sensor and report or react to the value.',
    allowedComponents: ['openhw-arduino-uno', 'openhw-pico', 'openhw-esp32', 'openhw-ntc-temperature-sensor', 'openhw-ntc-thermistor', 'openhw-ds18b20', 'openhw-led', 'openhw-resistor'],
    expectedBehavior: 'The code reads temperature data and displays, prints, or reacts to it.',
    requiredTypes: ['temperature|thermistor|ds18'],
    codeSignals: [/analogread|onewire|temperature|adc/i],
    hints: [
      'Start by identifying whether the sensor is analog or digital.',
      'Analog sensors need an analog input; one-wire sensors need a data pin and pull-up.',
      'Wire power, ground, and signal, then read the sensor in code.',
    ],
  },
  {
    id: 'rgb-led',
    title: 'RGB LED',
    difficulty: 'intermediate',
    objective: 'Control multiple LED color channels safely.',
    allowedComponents: ['openhw-arduino-uno', 'openhw-pico', 'openhw-esp32', 'openhw-rgb-led', 'openhw-resistor', 'openhw-breadboard'],
    expectedBehavior: 'Changing output pins changes the simulated LED color.',
    requiredTypes: ['rgb-led'],
    codeSignals: [/analogwrite|pwm|digitalwrite/i],
    hints: [
      'An RGB LED is several LEDs in one package.',
      'Each color channel needs current limiting.',
      'Wire each channel through a resistor to a GPIO and connect the common pin correctly.',
    ],
  },
  {
    id: 'seven-segment',
    title: '7-Segment Display',
    difficulty: 'intermediate',
    objective: 'Wire and drive a numeric display.',
    allowedComponents: ['openhw-arduino-uno', 'openhw-pico', 'openhw-esp32', 'openhw-7segment', 'openhw-tm1637-7segment', 'openhw-resistor'],
    expectedBehavior: 'The display shows a digit or counter driven by code.',
    requiredTypes: ['7segment|segment'],
    codeSignals: [/digitalwrite|display|segment|show|tm1637/i],
    hints: [
      'A segment display is multiple LEDs arranged as digits.',
      'Identify whether it is direct-drive or driver-module based.',
      'Wire the segment or driver pins, then write code that maps numbers to segments.',
    ],
  },
  {
    id: 'digital-logic',
    title: 'Basic Digital Logic',
    difficulty: 'beginner',
    objective: 'Build a simple logic circuit with an input, a gate, and an output.',
    allowedComponents: ['logic-and-gate', 'logic-or-gate', 'logic-not-gate', 'logic-xor-gate', 'openhw-led', 'openhw-resistor', 'openhw-pushbutton', 'openhw-6mm-pushbutton'],
    expectedBehavior: 'Changing the input changes the output according to the gate truth table.',
    requiredTypes: ['logic-|button|switch', 'led'],
    hints: [
      'A logic circuit needs an input and an observable output.',
      'The gate input should not float.',
      'Wire a stable input into the gate and route the gate output to an LED indicator.',
    ],
  },
];

const BOARD_RE = /(arduino|esp32|stm32|rp2040|pico|attiny)/i;
const OUTPUT_RE = /(led|buzzer|motor|servo|relay|segment|display|neopixel|speaker)/i;
const INPUT_RE = /(button|switch|potentiometer|joystick|encoder|keypad|clock)/i;
const SENSOR_RE = /(sensor|ldr|dht|mpu|bmp|ultrasonic|photo|thermistor|pir|mq2|ds18|soil|rain|rtc|max301)/i;

function endpointKey(endpoint) {
  return `${endpoint.componentId}:${endpoint.pinId}`;
}

function componentById(context) {
  return new Map((context?.components || []).map((component) => [component.id, component]));
}

function classifyComponent(component) {
  const type = normalizeComponentType(component?.type);
  const category = String(component?.metadata?.category || '').toLowerCase();
  if (BOARD_RE.test(type) || category === 'board') return 'controller';
  if (SENSOR_RE.test(type) || category === 'sensor') return 'sensor';
  if (INPUT_RE.test(type) || category === 'input') return 'input';
  if (OUTPUT_RE.test(type) || category === 'output') return 'output';
  if (type.includes('resistor')) return 'passive';
  if (type.includes('breadboard')) return 'interconnect';
  return category || 'component';
}

function connectedEndpoints(context, componentId, pinId = null) {
  return (context?.connections || []).filter((connection) => {
    const endpoints = [connection.from, connection.to];
    return endpoints.some((endpoint) =>
      endpoint.componentId === componentId && (pinId == null || endpoint.pinId === pinId)
    );
  });
}

function hasPinConnection(context, componentId, pinMatcher) {
  return (context?.connections || []).some((connection) =>
    [connection.from, connection.to].some((endpoint) =>
      endpoint.componentId === componentId && pinMatcher(endpoint.pinId)
    )
  );
}

function otherEndpoint(connection, endpoint) {
  return endpointKey(connection.from) === endpointKey(endpoint) ? connection.to : connection.from;
}

function isGroundPin(pinId) {
  const value = String(pinId || '').toLowerCase();
  return value === 'gnd' || value.startsWith('gnd_') || value === 'vss' || value === 'k' || value === 'cathode';
}

function isPowerPin(pinId) {
  const value = String(pinId || '').toLowerCase();
  return ['vcc', 'vdd', '5v', '3v3', '3.3v', 'vin', 'v+', 'a', 'anode'].includes(value);
}

function isDigitalPin(pinId) {
  return /^d?\d+$/i.test(String(pinId || '')) || /^gpio\d+$/i.test(String(pinId || ''));
}

function hasValidation(context, matcher) {
  return combineValidationErrors(context).some((error) => matcher(String(error?.message || ''), error));
}

function hasPathThroughType(context, startComponentId, startPinMatcher, endComponentId, endPinMatcher, requiredTypeMatcher, maxDepth = 5) {
  const components = componentById(context);
  const queue = [];
  const seen = new Set();

  (context?.connections || []).forEach((connection) => {
    [connection.from, connection.to].forEach((endpoint) => {
      if (endpoint.componentId === startComponentId && startPinMatcher(endpoint.pinId)) {
        queue.push({ endpoint, depth: 0, seenRequired: false });
      }
    });
  });

  while (queue.length) {
    const current = queue.shift();
    const key = `${endpointKey(current.endpoint)}:${current.depth}:${current.seenRequired}`;
    if (seen.has(key) || current.depth > maxDepth) continue;
    seen.add(key);

    if (current.endpoint.componentId === endComponentId && endPinMatcher(current.endpoint.pinId) && current.seenRequired) {
      return true;
    }

    for (const connection of connectedEndpoints(context, current.endpoint.componentId, current.endpoint.pinId)) {
      const nextEndpoint = otherEndpoint(connection, current.endpoint);
      const nextComponent = components.get(nextEndpoint.componentId);
      const nextSeenRequired = current.seenRequired || requiredTypeMatcher(normalizeComponentType(nextComponent?.type || ''));
      queue.push({ endpoint: nextEndpoint, depth: current.depth + 1, seenRequired: nextSeenRequired });

      if (nextComponent && normalizeComponentType(nextComponent.type).includes('resistor')) {
        const resistorPins = Object.keys(nextComponent.pinConnections || {});
        resistorPins.forEach((pinId) => {
          if (pinId !== nextEndpoint.pinId) {
            queue.push({
              endpoint: { componentId: nextComponent.id, pinId, raw: `${nextComponent.id}:${pinId}` },
              depth: current.depth + 1,
              seenRequired: true,
            });
          }
        });
      }
    }
  }

  return false;
}

export function getCircuitHealth(context) {
  const errors = combineValidationErrors(context);
  const fatalCount = errors.filter((error) => error.severity === 'error' || error.type === 'error').length;
  const warningCount = errors.length - fatalCount;
  const baseScore = Math.max(0, 100 - fatalCount * 30 - warningCount * 10);

  return {
    status: fatalCount > 0 ? 'blocked' : warningCount > 0 ? 'needs-review' : 'healthy',
    score: baseScore,
    fatalCount,
    warningCount,
    summary: fatalCount > 0
      ? `${fatalCount} blocking issue${fatalCount === 1 ? '' : 's'}`
      : warningCount > 0
        ? `${warningCount} warning${warningCount === 1 ? '' : 's'}`
        : 'Circuit validation is clean',
  };
}

export function buildExplainCircuit(context, mode = 'beginner') {
  const components = context?.components || [];
  if (!components.length) {
    return 'This canvas is empty. Add a board and a component, then the explanation will be based on the real wiring.';
  }

  const lines = [];
  lines.push(`This circuit contains ${components.length} component${components.length === 1 ? '' : 's'} and ${(context?.connections || []).length} wire${(context?.connections || []).length === 1 ? '' : 's'}.`);

  components.forEach((component) => {
    const connectedPins = Object.keys(component.pinConnections || {});
    const role = classifyComponent(component);
    lines.push(`- ${component.label || component.id} (${component.id}) is a ${role}. ${component.metadata?.description || ''}`.trim());
    if (connectedPins.length) {
      lines.push(`  Pins in use: ${connectedPins.join(', ')}.`);
    }
  });

  const flow = buildSignalFlow(context);
  if (flow.paths.length) {
    lines.push('Signal flow:');
    flow.paths.slice(0, 5).forEach((path) => lines.push(`- ${path.labels.join(' -> ')}`));
  }

  if (mode === 'advanced') {
    lines.push('Advanced view: check that every powered module has a shared ground, every LED/load has current limiting or a driver, and each signal pin matches the voltage and pin capability of the selected board.');
  }

  return lines.join('\n');
}

export function buildExplainComponent(context) {
  const selected = context?.selectedComponent;
  if (!selected) {
    return 'Select a component first, then I can explain its role, pins, usual connections, and common mistakes from the simulator metadata.';
  }

  const metadata = selected.metadata || {};
  const lines = [
    `${selected.label || selected.type} (${selected.id})`,
    metadata.description || 'No component description is available yet.',
  ];

  if (metadata.pins?.length) {
    lines.push('Pins:');
    metadata.pins.forEach((pin) => {
      const connected = selected.pinConnections?.[pin.id]?.map((endpoint) => `${endpoint.componentId}:${endpoint.pinId}`).join(', ');
      lines.push(`- ${pin.id}: ${pin.description || pin.type || 'pin'}${connected ? `; connected to ${connected}` : '; not connected'}`);
    });
  }

  if (metadata.commonConnections?.length) {
    lines.push(`Common connections: ${metadata.commonConnections.join('; ')}.`);
  }
  if (metadata.commonMistakes?.length) {
    lines.push(`Common mistakes: ${metadata.commonMistakes.join('; ')}.`);
  }
  if (metadata.safetyNotes?.length) {
    lines.push(`Safety: ${metadata.safetyNotes.join('; ')}.`);
  }

  return lines.join('\n');
}

export function buildDebugReport(context) {
  const findings = [];
  const health = getCircuitHealth(context);

  combineValidationErrors(context).forEach((error) => {
    findings.push({
      problem: error.message || error.type || 'Validation issue',
      evidence: `Validator reported ${error.severity || error.type || 'issue'}${error.componentId ? ` on ${error.componentId}` : ''}.`,
      likelyCause: error.remediation ? 'The circuit topology matches a known validation rule.' : 'The wiring may be incomplete or electrically unsafe.',
      suggestedFix: error.remediation || error.suggestion || 'Inspect the affected pins and compare them with the component pin descriptions.',
      confidence: Number.isFinite(error.confidence) ? error.confidence : 0.75,
      hint: error.autoFix ? 'Auto-fix may be available for this issue.' : 'Use the connection assistant for the affected component.',
    });
  });

  if (!findings.length) {
    const components = context?.components || [];
    if (!components.length) {
      findings.push({
        problem: 'No circuit to debug yet.',
        evidence: 'The context has no components.',
        likelyCause: 'The workspace is empty.',
        suggestedFix: 'Place a board and a component, then wire them before debugging.',
        confidence: 1,
        hint: 'Start with the LED Control challenge.',
      });
    } else {
      findings.push({
        problem: 'No rule-based validation problems detected.',
        evidence: health.summary,
        likelyCause: 'The current static wiring checks are passing.',
        suggestedFix: 'Run the simulation and inspect runtime output if behavior is still wrong.',
        confidence: 0.7,
        hint: 'If an output is not changing, check the code pin numbers against the wired pins.',
      });
    }
  }

  return findings;
}

export function buildProgressiveHint(context, challenge, hintLevel = 1) {
  const level = Math.min(3, Math.max(1, Number(hintLevel) || 1));
  const activeChallenge = challenge || ELECTROSIM_CHALLENGES[0];
  const validationHint = combineValidationErrors(context)[0]?.remediation;

  if (activeChallenge?.hints?.[level - 1]) {
    if (level < 3 || !validationHint) return activeChallenge.hints[level - 1];
    return `${activeChallenge.hints[level - 1]} Validator clue: ${validationHint}`;
  }

  const selected = context?.selectedComponent;
  if (selected?.metadata?.commonMistakes?.length) {
    return selected.metadata.commonMistakes[Math.min(level - 1, selected.metadata.commonMistakes.length - 1)];
  }

  return validationHint || 'Trace power, ground, and signal one step at a time from the board to the selected component.';
}

export function buildConnectionGuidance(context) {
  const selected = context?.selectedComponent;
  const board = context?.board?.componentId;
  if (!selected) {
    return {
      title: 'Select a component first',
      warnings: ['Connection guidance is most useful after selecting a component on the canvas.'],
      steps: ['Select an LED, sensor, button, or other component, then ask again.'],
    };
  }

  const autowiring = selected.metadata?.autowiring?.connections || [];
  const warnings = [];
  const steps = [];

  if (selected.metadata?.safetyNotes?.length) warnings.push(...selected.metadata.safetyNotes);

  autowiring.forEach((entry) => {
    const destination = String(entry.to || '').replace(/^arduino:/i, board ? `${board}:` : 'board:');
    const source = `${selected.id}:${entry.from}`;
    const via = entry.via ? ` through ${entry.via}${entry.attrs?.value ? ` (${entry.attrs.value} ohm)` : ''}` : '';
    steps.push(`Connect ${source}${via} to ${destination}.`);
  });

  if (!steps.length) {
    const pins = selected.metadata?.pins || [];
    pins.forEach((pin) => {
      if (isGroundPin(pin.id)) steps.push(`Connect ${selected.id}:${pin.id} to a board GND pin.`);
      else if (isPowerPin(pin.id)) steps.push(`Connect ${selected.id}:${pin.id} to a board-compatible power pin.`);
      else steps.push(`Connect ${selected.id}:${pin.id} to a compatible board signal pin.`);
    });
  }

  return {
    title: `Connection guidance for ${selected.label || selected.id}`,
    sourceComponent: selected.id,
    powerRequirements: selected.metadata?.voltageRequirements || '',
    warnings,
    steps: steps.length ? steps : ['No structured pin guidance is available for this component yet. Use its pin descriptions and validation feedback.'],
  };
}

export function validateChallengeCompletion(challengeId, context) {
  const id = challengeId || 'led-control';
  const components = context?.components || [];
  const board = components.find((component) => classifyComponent(component) === 'controller');
  const led = components.find((component) => normalizeComponentType(component.type).includes('led'));
  const resistor = components.find((component) => normalizeComponentType(component.type).includes('resistor'));
  const button = components.find((component) => /button|switch/i.test(normalizeComponentType(component.type)));
  const potentiometer = components.find((component) => /potentiometer/i.test(normalizeComponentType(component.type)));
  const ultrasonic = components.find((component) => /hc-sr04|ultrasonic/i.test(normalizeComponentType(component.type)));
  const code = String(context?.code || '').toLowerCase();
  const failures = [];

  if (!board) failures.push('Add a programmable board.');
  if (combineValidationErrors(context).some((error) => error.severity === 'error' || error.type === 'error')) {
    failures.push('Resolve blocking validation errors.');
  }

  if (id === 'led-control' || id === 'button-led' || id === 'potentiometer-led') {
    if (!led) failures.push('Add an LED.');
    if (!resistor) failures.push('Add a current-limiting resistor for the LED.');
    if (led && !hasPinConnection(context, led.id, (pin) => isGroundPin(pin))) failures.push('Connect the LED cathode side to ground.');
    if (board && led && !hasPathThroughType(context, board.id, isDigitalPin, led.id, (pin) => /a|anode/i.test(pin), (type) => type.includes('resistor'))) {
      failures.push('Connect a board GPIO to the LED anode through a resistor.');
    }
    if (!/digitalwrite|analogwrite|pwm/.test(code)) failures.push('Add code that drives the LED output.');
  }

  if (id === 'button-led') {
    if (!button) failures.push('Add a button or switch input.');
    if (button && !Object.keys(button.pinConnections || {}).length) failures.push('Wire the button to the board and a stable reference.');
    if (!/digitalread|pin\.in|input_pullup|pin\.pull/.test(code)) failures.push('Add code that reads the button input.');
  }

  if (id === 'potentiometer-led') {
    if (!potentiometer) failures.push('Add a potentiometer.');
    if (potentiometer && !hasPinConnection(context, potentiometer.id, (pin) => /sig|wiper|out|2|p2/i.test(pin))) failures.push('Connect the potentiometer wiper to an analog-capable input.');
    if (!/analogread|adc/.test(code)) failures.push('Add code that reads the analog value.');
  }

  if (id === 'ultrasonic-distance') {
    if (!ultrasonic) failures.push('Add an ultrasonic sensor.');
    if (ultrasonic && !hasPinConnection(context, ultrasonic.id, (pin) => isPowerPin(pin))) failures.push('Connect sensor VCC.');
    if (ultrasonic && !hasPinConnection(context, ultrasonic.id, (pin) => isGroundPin(pin))) failures.push('Connect sensor GND.');
    if (ultrasonic && !hasPinConnection(context, ultrasonic.id, (pin) => /trig/i.test(pin))) failures.push('Connect TRIG to a GPIO output.');
    if (ultrasonic && !hasPinConnection(context, ultrasonic.id, (pin) => /echo/i.test(pin))) failures.push('Connect ECHO to a GPIO input.');
    if (!/pulsein|time_pulse_us|echo|trig/.test(code)) failures.push('Add code that triggers the sensor and measures echo time.');
  }

  const challenge = ELECTROSIM_CHALLENGES.find((entry) => entry.id === id);
  if (challenge?.requiredTypes) {
    challenge.requiredTypes.forEach((pattern) => {
      const re = new RegExp(pattern, 'i');
      if (!components.some((component) => re.test(normalizeComponentType(component.type)))) {
        failures.push(`Add a required component matching ${pattern}.`);
      }
    });
  }

  if (challenge?.minComponents) {
    Object.entries(challenge.minComponents).forEach(([pattern, count]) => {
      const re = new RegExp(pattern, 'i');
      const actual = components.filter((component) => re.test(normalizeComponentType(component.type))).length;
      if (actual < count) failures.push(`Add ${count} component(s) matching ${pattern}; currently found ${actual}.`);
    });
  }

  if (challenge?.codeSignals) {
    challenge.codeSignals.forEach((pattern) => {
      if (!pattern.test(code)) failures.push(`Add code evidence matching ${pattern}.`);
    });
  }

  if (challenge && !Object.keys(challenge.minComponents || {}).length && !['led-control', 'button-led', 'potentiometer-led', 'ultrasonic-distance'].includes(id)) {
    if ((context?.connections || []).length === 0) failures.push('Wire the required components together.');
  }

  return {
    complete: failures.length === 0,
    failures,
    checkedAt: new Date().toISOString(),
  };
}

export function calculateSkillScore({ context, challengeResult, hintsUsed = 0 }) {
  const health = getCircuitHealth(context);
  const completedBonus = challengeResult?.complete ? 20 : 0;
  const validationCredit = Math.round(health.score * 0.55);
  const buildCredit = Math.min(20, (context?.components?.length || 0) * 3 + (context?.connections?.length || 0) * 2);
  const learningCredit = Math.max(10, 25 - Math.max(0, hintsUsed - 1) * 4);
  const score = Math.max(0, Math.min(100, validationCredit + buildCredit + learningCredit + completedBonus));

  return {
    score,
    label: score >= 85 ? 'Confident builder' : score >= 65 ? 'Growing designer' : score >= 40 ? 'Careful starter' : 'Getting started',
    explanation: 'Score combines validation health, meaningful circuit progress, challenge completion, and constructive hint use. Hints reduce the score gently, never punitively.',
    metrics: {
      validationHealth: health.score,
      components: context?.components?.length || 0,
      connections: context?.connections?.length || 0,
      hintsUsed,
      challengeComplete: Boolean(challengeResult?.complete),
    },
  };
}

export function buildSignalFlow(context) {
  const components = componentById(context);
  const graph = new Map();

  (context?.connections || []).forEach((connection) => {
    const a = connection.from.componentId;
    const b = connection.to.componentId;
    if (!a || !b || a === b) return;
    if (!graph.has(a)) graph.set(a, new Set());
    if (!graph.has(b)) graph.set(b, new Set());
    graph.get(a).add(b);
    graph.get(b).add(a);
  });

  const starts = (context?.components || []).filter((component) => ['input', 'sensor'].includes(classifyComponent(component)));
  const outputs = new Set((context?.components || []).filter((component) => classifyComponent(component) === 'output').map((component) => component.id));
  const paths = [];

  starts.forEach((start) => {
    const queue = [[start.id]];
    const seen = new Set([start.id]);
    while (queue.length && paths.length < 8) {
      const path = queue.shift();
      const last = path[path.length - 1];
      if (path.length > 1 && outputs.has(last)) {
        paths.push({
          componentIds: path,
          labels: path.map((id) => components.get(id)?.label || id),
          roles: path.map((id) => classifyComponent(components.get(id))),
        });
        continue;
      }
      for (const next of graph.get(last) || []) {
        if (seen.has(next) || path.length > 7) continue;
        seen.add(next);
        queue.push([...path, next]);
      }
    }
  });

  if (!paths.length) {
    const controller = (context?.components || []).find((component) => classifyComponent(component) === 'controller');
    const output = (context?.components || []).find((component) => classifyComponent(component) === 'output');
    if (controller && output) {
      paths.push({
        componentIds: [controller.id, output.id],
        labels: [controller.label || controller.id, output.label || output.id],
        roles: ['controller', 'output'],
      });
    }
  }

  return { paths };
}
