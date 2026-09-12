# ElectroSim AI Provider Architecture

ElectroSim AI is context-aware. The frontend builds a structured circuit context with `src/ai/circuitContext.js` from live simulator data:

- board
- components and component types
- component IDs and pins
- pin modes and pin descriptions
- connections
- power and ground connections
- sensor configuration
- code/sketch
- simulation state
- validation errors
- selected component or selected wire
- challenge/expected behavior fields when available

The AI panel sends this context to backend endpoints under `/api/ai/electronics/:action`.

## Frontend AI Modules

- `src/ai/componentKnowledgeBase.js` contains structured electronics metadata for common boards, LEDs, resistors, buttons, sensors, servos, buzzers, RGB LEDs, 7-segment displays, and challenge components.
- `src/ai/circuitContext.js` builds the canonical simulator context object from real canvas, code, runtime, selection, and validation state.
- `src/ai/electronicsValidation.js` adds ElectroSim-specific static topology rules such as missing power, missing ground, LED current limiting, direct power-to-ground shorts, output-to-output conflicts, and unconnected components.
- `src/ai/circuitAnalysis.js` provides deterministic local tutor behavior: explain component, explain circuit, debug report, connection guidance, progressive hints, challenge validation, skill score, and signal-flow derivation.
- `src/pages/simulationpage/components/AITutorPanel.jsx` renders the collapsible tutor panel and always shows local analysis before optional backend AI enrichment.

Local analysis is intentionally not a fake AI substitute. It is rule-based simulator analysis and remains available when the AI backend has no provider key.

## Provider Boundary

Backend providers implement `src/services/ai/AIProvider.js`:

- `explainComponent()`
- `explainCircuit()`
- `debugCircuit()`
- `generateHints()`
- `connectionAssistant()`
- `generateChallenge()`
- `answerElectronicsQuestion()`

The current production provider is `OpenAIProvider`, configured with server-side environment variables only:

- `AI_PROVIDER=openai`
- `OPENAI_API_KEY`
- `OPENAI_MODEL`
- `AI_TIMEOUT_MS`

If no API key is present, the backend returns an explicit unavailable response. It does not fake AI output.

`OpenAIProvider` calls the OpenAI Responses API server-side with `store: false`, a timeout, and instructions that forbid inventing components, wires, simulation results, or runtime behavior.
