# ElectroSim AI Development Guide

## Project Architecture

ElectroSim AI is built on the existing OpenHW Studio codebase and must preserve OpenHW attribution and MIT license notices where they apply. The workspace contains two main repositories:

- `OpenHW-studio-frontend`: React 18 + Vite simulator UI, code editor, project persistence, IndexedDB caches, component palette, routing, Web Worker simulation, validation UI, and the vendored `openhw-studio-emulator` package.
- `openhw-studio-backend`: Express API server for Arduino/RP2040/ESP32/STM32 compilation, auth, project/cloud services, custom component review, validation endpoints, and server-side ElectroSim AI provider calls.

Important frontend modules:

- `src/App.jsx`: application routing.
- `src/pages/simulationpage/SimulatorPage.jsx`: primary desktop simulator workflow.
- `src/pages/mobileui/SimulatorPage.jsx`: mobile simulator workflow.
- `src/pages/simulationpage/utils/componentRegistry.js`: component registry assembly from `@openhw/emulator`.
- `src/pages/simulationpage/projectUtils.js`: project/circuit payload normalization.
- `src/ai/componentKnowledgeBase.js`: structured electronics metadata used before LLM calls.
- `src/ai/circuitContext.js`: canonical AI circuit context builder from live simulator state.
- `src/ai/electronicsValidation.js`: additive ElectroSim topology rules for tutor/debug/challenge features.
- `src/ai/circuitAnalysis.js`: deterministic tutor analysis, hints, challenge checks, score, and signal flow.
- `src/pages/simulationpage/components/AITutorPanel.jsx`: collapsible context-aware AI tutor panel.
- `src/services/aiTutorService.js`: frontend API client for server-side AI provider calls.
- `src/services/projectStore.js` and `src/services/projectService.js`: local and cloud persistence.
- `src/services/simulatorService.js`: compiler/API client configuration.
- `src/worker` and `src/workers`: simulation, telemetry, autowiring, grading, and protocol workers.
- `openhw-studio-emulator/src/circuit-validation`: rule-based validation engine.
- `openhw-studio-emulator/src/components`: structured component manifests, UI, logic, and validation rules.

Important backend modules:

- `src/server.js`: Express app, CORS, rate limiting, WebSocket registration, static example serving.
- `src/routes/api.js`: REST route registration.
- `src/controllers/compileController.js` and `src/routes/compile.js`: compile and firmware endpoints.
- `src/controllers/validationController.js`: backend validation endpoint.
- `src/controllers/componentController.js`: custom component pipeline.
- `src/services`: compile queues, library management, live simulation, resource management.
- `src/services/ai`: ElectroSim AI provider abstraction and server-side providers.

## Development Rules

- Inspect before editing. Preserve existing simulator behavior unless a change is directly required.
- Do not replace real simulator flows with mock screens or fake simulation results.
- Keep AI features additive and modular. The simulator must remain usable when AI is unavailable.
- AI features must consume a structured circuit context derived from the real simulator state: board, components, pins, wires, code, runtime state, validation errors, selections, and challenge data where available.
- Keep private provider keys on the backend only. Never add `VITE_*` AI secrets.
- Do not execute arbitrary AI-generated JavaScript in the simulator.
- Prefer structured component manifests and rule-based validation before asking an LLM for electronics facts.
- Keep `src/ai/electronicsValidation.js` additive. It can explain and score circuit health, but it must not replace or bypass OpenHW simulator validation/runtime.
- Keep challenge validation deterministic and tied to actual circuit context. Do not mark completion from a button click alone.
- Keep skill scoring non-punitive and explainable.
- Preserve OpenHW attribution and distinguish ElectroSim AI modifications in docs and commit history where practical.
- Avoid destructive git commands. The frontend checkout currently shows a broad tracked-deleted/untracked anomaly; do not run reset/checkout cleanup unless explicitly approved.

## Testing Rules

- Run the narrowest relevant test first after a scoped change, then broaden to build/integration checks.
- Frontend unit tests: `npm test -- --run` from `OpenHW-studio-frontend`.
- Frontend production build: `npm run build` from `OpenHW-studio-frontend`.
- Emulator validation tests: `npm test` from `OpenHW-studio-frontend/openhw-studio-emulator`.
- Backend startup/API checks require dependencies installed and a valid `.env` with `SESSION_SECRET`.
- Do not ignore failures. Document whether a failure is pre-existing, introduced, or environment-dependent.

## Safety Constraints

- Do not expose real MongoDB, OAuth, SMTP, or AI secrets in committed examples.
- Do not silently change public API contracts.
- Do not delete working OpenHW components, validation rules, or simulator workers.
- Do not claim the original OpenHW code was created by ElectroSim AI.
- AI output must state uncertainty when simulator evidence is incomplete.
