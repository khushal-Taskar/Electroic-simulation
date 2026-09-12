# Electronics Validation

OpenHW Studio already includes a rule-based validation engine in `openhw-studio-emulator/src/circuit-validation`. ElectroSim AI keeps this engine as the first line of electrical correctness instead of relying entirely on an LLM.

The validator detects issues such as:

- VCC-to-GND shorts
- mixed rail conflicts
- LED current and missing series resistance issues
- floating LED pins
- floating MCU digital inputs
- serial pin conflicts
- I2C pull-up requirements
- duplicate I2C addresses
- potentiometer wiring issues
- component-level validation rules

Errors are structured with severity, message, affected component IDs, remediation, confidence, and related metadata where available. The AI layer consumes those errors and explains them in beginner-friendly language.

Future ElectroSim AI rules should remain structured and testable before being surfaced through the tutor.

## ElectroSim AI Rule Layer

ElectroSim AI adds `src/ai/electronicsValidation.js` as an additive validator for tutor and learning features. It does not replace OpenHW's simulator validator and it does not block or fake simulation results by itself.

Current ElectroSim rules detect:

- missing programmable controller
- unconnected active components
- missing VCC/power on powered modules
- missing GND/common return on powered modules
- LED circuits that appear to lack a series current-limiting resistor
- direct power-to-ground shorts
- suspicious output-to-output connections

Each finding is structured:

```json
{
  "source": "electrosim-ai-rules",
  "type": "MISSING_GROUND",
  "severity": "warning",
  "componentId": "sensor_1",
  "compIds": ["sensor_1"],
  "pinId": "GND",
  "message": "HC-SR04 has no connected ground return.",
  "suggestion": "Connect sensor_1:GND to the board GND/common ground.",
  "confidence": 0.82
}
```

`combineValidationErrors(context)` merges existing OpenHW validation errors with ElectroSim rule findings. The AI tutor sends this merged list to the backend provider so AI explanations are grounded in both simulator validation and local topology analysis.

## Challenge Validation

Challenge completion is checked by `validateChallengeCompletion()` in `src/ai/circuitAnalysis.js`. It evaluates the real circuit context, including components, connection topology, validation errors, and code evidence. A challenge is not marked complete merely because a user clicks a button.
