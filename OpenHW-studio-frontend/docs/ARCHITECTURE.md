# ElectroSim AI Architecture

ElectroSim AI extends OpenHW Studio without replacing the simulator. The main simulator remains `src/pages/simulationpage/SimulatorPage.jsx`, with circuit editing, component placement, wiring, code editing, validation, project persistence, and Web Worker simulation still handled by the existing OpenHW modules.

## Frontend

- React/Vite routes live in `src/App.jsx`.
- Desktop simulation lives in `src/pages/simulationpage`.
- Mobile simulation lives in `src/pages/mobileui`.
- Component manifests and logic are imported from `@openhw/emulator`, aliased to `openhw-studio-emulator` by `vite.config.js`.
- Project save/load uses IndexedDB through `src/services/projectStore.js`, with optional cloud sync through `src/services/projectService.js`.
- Compile/API calls use `src/services/simulatorService.js`.
- ElectroSim AI frontend modules live in `src/ai` and `src/pages/simulationpage/components/AITutorPanel.jsx`.

## Backend

- Express starts from `openhw-studio-backend/src/server.js`.
- API routes are registered in `src/routes/api.js`.
- Compile endpoints use `src/controllers/compileController.js` and `src/routes/compile.js`.
- ElectroSim AI provider routing uses `src/controllers/aiController.js` and `src/services/ai`.

## Emulator

The embedded emulator package provides component manifests, component logic, protocol handlers, and the rule-based validation engine in `openhw-studio-emulator/src/circuit-validation`.

ElectroSim AI uses this structured state as evidence; it must not fabricate simulator behavior.
