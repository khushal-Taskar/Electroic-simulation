const KNOWLEDGE_BY_TYPE = {
  'openhw-led': {
    category: 'output',
    voltageRequirements: 'Typical forward voltage is about 2 V; drive through a current-limiting resistor.',
    commonConnections: ['Anode through resistor to a GPIO or supply', 'Cathode to GND for low-side return'],
    commonMistakes: ['No series resistor', 'Reversed polarity', 'Cathode left floating'],
    usageExamples: ['Blink indicator', 'PWM brightness indicator'],
    safetyNotes: ['Do not connect an LED directly across 5 V or directly between two output pins.'],
  },
  'openhw-resistor': {
    category: 'passive',
    voltageRequirements: 'Rated by resistance and power dissipation rather than a fixed supply voltage.',
    commonConnections: ['Series current limiting', 'Pull-up or pull-down networks', 'Voltage dividers'],
    commonMistakes: ['Wrong decade value', 'Placed in parallel when series current limiting is required'],
    usageExamples: ['220 ohm LED resistor', '10 kOhm pull-up resistor'],
    safetyNotes: ['Check power rating when used across high voltage or low resistance paths.'],
  },
  'openhw-arduino-uno': {
    category: 'board',
    voltageRequirements: '5 V logic board with 3.3 V auxiliary output and Vin input for regulated supply.',
    commonConnections: ['5V to sensor VCC when supported', 'GND shared with every external module', 'GPIO pins to digital inputs/outputs'],
    commonMistakes: ['No common ground', 'Using D0/D1 while also relying on Serial', 'Connecting 3.3 V-only sensors to 5 V signals'],
    usageExamples: ['LED blink', 'Button input', 'Sensor readout over Serial'],
    safetyNotes: ['Avoid exceeding GPIO current limits; use drivers for motors and high-current loads.'],
  },
  'openhw-pico': {
    category: 'board',
    voltageRequirements: '3.3 V logic RP2040 board.',
    commonConnections: ['3V3 to compatible sensors', 'GND shared with all peripherals', 'GPIO pins for digital, PWM, I2C, SPI, UART'],
    commonMistakes: ['Applying 5 V to GPIO', 'No common ground'],
    usageExamples: ['MicroPython GPIO control', 'I2C sensor projects'],
    safetyNotes: ['RP2040 GPIO pins are not 5 V tolerant.'],
  },
  'openhw-pico-w': {
    category: 'board',
    voltageRequirements: '3.3 V logic RP2040 board with wireless support.',
    commonConnections: ['3V3 to compatible sensors', 'GND shared with all peripherals'],
    commonMistakes: ['Applying 5 V to GPIO', 'No common ground'],
    usageExamples: ['WiFi telemetry project', 'MicroPython sensor node'],
    safetyNotes: ['RP2040 GPIO pins are not 5 V tolerant.'],
  },
  'openhw-esp32': {
    category: 'board',
    voltageRequirements: '3.3 V logic microcontroller board.',
    commonConnections: ['3V3 to compatible modules', 'GND shared with all peripherals'],
    commonMistakes: ['Applying 5 V to GPIO', 'Using boot strapping pins without understanding startup behavior'],
    usageExamples: ['WiFi LED control', 'sensor telemetry'],
    safetyNotes: ['ESP32 GPIO pins are generally not 5 V tolerant.'],
  },
  'openhw-pushbutton': {
    category: 'input',
    voltageRequirements: 'Used with pull-up or pull-down biasing to create a stable logic level.',
    commonConnections: ['One side to GPIO', 'Other side to GND with internal pull-up, or to VCC with pull-down'],
    commonMistakes: ['Floating GPIO input', 'No pull-up/pull-down path'],
    usageExamples: ['Button-controlled LED', 'mode selector'],
    safetyNotes: ['Do not short a driven output directly through the switch.'],
  },
  'openhw-6mm-pushbutton': {
    category: 'input',
    voltageRequirements: 'Used with pull-up or pull-down biasing to create a stable logic level.',
    commonConnections: ['One side to GPIO', 'Other side to GND with internal pull-up, or to VCC with pull-down'],
    commonMistakes: ['Floating GPIO input', 'No pull-up/pull-down path'],
    usageExamples: ['Button-controlled LED', 'mode selector'],
    safetyNotes: ['Do not short a driven output directly through the switch.'],
  },
  'openhw-potentiometer': {
    category: 'input',
    voltageRequirements: 'Ends normally connect across VCC and GND; wiper outputs an analog voltage in between.',
    commonConnections: ['VCC to one end', 'GND to the other end', 'SIG/wiper to an analog-capable input'],
    commonMistakes: ['Wiper not connected', 'Ends tied to the same rail'],
    usageExamples: ['LED dimmer', 'servo position control'],
    safetyNotes: ['Use board-compatible voltage on the end terminals.'],
  },
  'openhw-hc-sr04': {
    category: 'sensor',
    voltageRequirements: 'Common HC-SR04 modules use 5 V VCC; echo voltage may need level shifting for 3.3 V boards.',
    commonConnections: ['VCC to 5V', 'GND to GND', 'TRIG to GPIO output', 'ECHO to GPIO input'],
    commonMistakes: ['Missing common ground', 'ECHO connected to a non-tolerant 3.3 V input without level shifting'],
    usageExamples: ['Distance measurement', 'obstacle detection'],
    safetyNotes: ['Check board voltage tolerance before connecting ECHO.'],
  },
  'openhw-buzzer': {
    category: 'output',
    voltageRequirements: 'Small active buzzers commonly use 3.3 V or 5 V; passive buzzers need a driven waveform.',
    commonConnections: ['Signal or positive pin to a compatible GPIO or driver', 'Negative pin to GND'],
    commonMistakes: ['No ground return', 'Driving a high-current buzzer directly from a GPIO'],
    usageExamples: ['Alarm sounder', 'button feedback tone'],
    safetyNotes: ['Use a transistor driver for buzzers that need more current than the board pin can supply.'],
  },
  'openhw-servo': {
    category: 'output',
    voltageRequirements: 'Typical hobby servos need a 5 V supply, shared ground, and a 50 Hz control signal.',
    commonConnections: ['VCC/red wire to suitable servo power', 'GND/brown wire to common ground', 'Signal/orange wire to a PWM-capable GPIO'],
    commonMistakes: ['Powering the servo only from a weak board pin', 'Missing common ground between servo supply and controller'],
    usageExamples: ['Position control', 'robot arm joint', 'pan/tilt mechanism'],
    safetyNotes: ['Servos can draw startup current spikes; use an external supply when needed.'],
  },
  'openhw-rgb-led': {
    category: 'output',
    voltageRequirements: 'Each red, green, and blue channel behaves like an LED and needs current limiting.',
    commonConnections: ['Each color channel through its own resistor to a GPIO', 'Common anode or cathode wired according to the part type'],
    commonMistakes: ['One resistor shared incorrectly across color channels', 'Common pin connected to the wrong rail'],
    usageExamples: ['status color indicator', 'PWM color mixing'],
    safetyNotes: ['Limit current on every channel.'],
  },
  'openhw-7segment': {
    category: 'output',
    voltageRequirements: 'Direct-drive 7-segment displays are LED arrays and each active segment needs current limiting.',
    commonConnections: ['Segment pins to GPIO pins through resistors', 'Common pin to the correct supply or ground for the display type'],
    commonMistakes: ['No per-segment current limiting', 'Common-anode/common-cathode mismatch in code'],
    usageExamples: ['counter display', 'numeric readout'],
    safetyNotes: ['Check total current when several segments are on at once.'],
  },
  'openhw-tm1637-7segment': {
    category: 'output',
    voltageRequirements: 'TM1637 modules usually need VCC, GND, CLK, and DIO connections.',
    commonConnections: ['VCC to board-compatible power', 'GND to common ground', 'CLK and DIO to digital GPIO pins'],
    commonMistakes: ['CLK and DIO swapped', 'Missing shared ground'],
    usageExamples: ['counter display', 'clock display'],
    safetyNotes: ['Use board-compatible logic voltage for the module.'],
  },
  'openhw-ldr-module': {
    category: 'sensor',
    voltageRequirements: 'LDR modules usually need VCC, GND, and an analog or digital signal output.',
    commonConnections: ['VCC to board-compatible power', 'GND to common ground', 'AO/SIG to analog input'],
    commonMistakes: ['Signal connected to a digital-only pin for analog readings', 'No common ground'],
    usageExamples: ['automatic night light', 'ambient light measurement'],
    safetyNotes: ['Use the module at the logic voltage expected by the controller.'],
  },
  'openhw-photoresistor': {
    category: 'sensor',
    voltageRequirements: 'A bare photoresistor is normally used in a voltage divider.',
    commonConnections: ['Photoresistor plus fixed resistor as a divider', 'Divider midpoint to analog input'],
    commonMistakes: ['Photoresistor connected alone without a divider', 'Analog input left floating'],
    usageExamples: ['ambient light threshold', 'analog light measurement'],
    safetyNotes: ['Keep divider resistance values high enough to avoid wasting current.'],
  },
  'openhw-ntc-temperature-sensor': {
    category: 'sensor',
    voltageRequirements: 'Analog NTC modules need board-compatible power, ground, and signal wiring.',
    commonConnections: ['VCC to board-compatible power', 'GND to common ground', 'SIG/AO to analog input'],
    commonMistakes: ['Using analog code with a digital-only signal', 'No shared ground'],
    usageExamples: ['temperature logger', 'fan controller'],
    safetyNotes: ['Avoid heating the thermistor from excess divider current.'],
  },
  'openhw-ds18b20': {
    category: 'sensor',
    voltageRequirements: 'DS18B20 sensors can use 3.3 V or 5 V depending on wiring and board compatibility.',
    commonConnections: ['VDD to power', 'GND to ground', 'DQ/data to GPIO with a pull-up resistor'],
    commonMistakes: ['Missing data pull-up', 'Data and power pins swapped'],
    usageExamples: ['digital temperature measurement', 'waterproof temperature probe'],
    safetyNotes: ['Confirm voltage and pinout for the exact package/module.'],
  },
};

const ALIASES = {
  'wokwi-led': 'openhw-led',
  led: 'openhw-led',
  'wokwi-resistor': 'openhw-resistor',
  resistor: 'openhw-resistor',
  'wokwi-arduino-uno': 'openhw-arduino-uno',
  arduino: 'openhw-arduino-uno',
  'arduino-uno': 'openhw-arduino-uno',
  'raspberry-pi-pico': 'openhw-pico',
  'wokwi-pushbutton': 'openhw-pushbutton',
  button: 'openhw-pushbutton',
  'wokwi-potentiometer': 'openhw-potentiometer',
  potentiometer: 'openhw-potentiometer',
  'wokwi-hc-sr04': 'openhw-hc-sr04',
  'hc-sr04': 'openhw-hc-sr04',
  buzzer: 'openhw-buzzer',
  'wokwi-buzzer': 'openhw-buzzer',
  servo: 'openhw-servo',
  'servo-motor': 'openhw-servo',
  'openhw-servo-motor': 'openhw-servo',
  rgb: 'openhw-rgb-led',
  'rgb-led': 'openhw-rgb-led',
  'rbg-led-4pin': 'openhw-rgb-led',
  'openhw-rbg-led-4pin': 'openhw-rgb-led',
  'ws2812b-rgb-led': 'openhw-rgb-led',
  'openhw-ws2812b-rgb-led': 'openhw-rgb-led',
  '7-segment': 'openhw-7segment',
  '7-segment-display': 'openhw-7segment',
  'seven-segment-display': 'openhw-7segment',
  'openhw-7-segment-display': 'openhw-7segment',
  'seven-segment-display-tm1637': 'openhw-tm1637-7segment',
  'openhw-seven-segment-display-tm1637': 'openhw-tm1637-7segment',
  ldr: 'openhw-ldr-module',
  'ldr-sensor-module': 'openhw-ldr-module',
  'openhw-ldr-sensor-module': 'openhw-ldr-module',
  photoresistor: 'openhw-photoresistor',
  'phtoresistor-ldr': 'openhw-photoresistor',
  'openhw-phtoresistor-ldr': 'openhw-photoresistor',
  'temperature-sensor-ntc': 'openhw-ntc-temperature-sensor',
  'openhw-temperature-sensor-ntc': 'openhw-ntc-temperature-sensor',
  'ntc-thermistor-module': 'openhw-ntc-temperature-sensor',
  'openhw-ntc-thermistor-module': 'openhw-ntc-temperature-sensor',
  'ds18b20-temperature-module': 'openhw-ds18b20',
  'openhw-ds18b20-temperature-module': 'openhw-ds18b20',
};

export function normalizeComponentType(type) {
  const normalized = String(type || '').trim().toLowerCase();
  return ALIASES[normalized] || normalized;
}

export function getComponentKnowledge(type) {
  return KNOWLEDGE_BY_TYPE[normalizeComponentType(type)] || null;
}

export function buildComponentMetadata(type, manifest = {}) {
  const normalizedType = normalizeComponentType(type || manifest.type);
  const knowledge = getComponentKnowledge(normalizedType) || {};
  const pins = Array.isArray(manifest.pins)
    ? manifest.pins.map((pin) => ({
      id: String(pin.id || ''),
      type: pin.type || 'unknown',
      description: pin.description || pin.label || '',
      mode: pin.mode || pin.direction || pin.type || 'unknown',
    }))
    : [];

  return {
    type: normalizedType,
    name: manifest.label || normalizedType,
    category: knowledge.category || manifest.group || 'unknown',
    description: manifest.description || '',
    pins,
    voltageRequirements: knowledge.voltageRequirements || '',
    commonConnections: knowledge.commonConnections || [],
    commonMistakes: knowledge.commonMistakes || [],
    usageExamples: knowledge.usageExamples || [],
    safetyNotes: knowledge.safetyNotes || [],
    autowiring: manifest.autowiring || null,
  };
}

export function getKnowledgeBaseSummary() {
  return Object.entries(KNOWLEDGE_BY_TYPE).map(([type, data]) => ({
    type,
    category: data.category,
    commonMistakes: data.commonMistakes,
    safetyNotes: data.safetyNotes,
  }));
}
