# ElectroSim AI Development

## Setup

Frontend:

```bash
cd OpenHW-studio-frontend
npm install
npm run dev
```

Backend:

```bash
cd openhw-studio-backend
npm install
npm run dev
```

The backend defaults to port `5001`. Frontend `.env` should set:

```env
VITE_API_BASE_URL=http://localhost:5001/api
VITE_EXAMPLES_BASE_URL=http://localhost:5001/api/examples
VITE_DEV_API_PROXY_TARGET=http://localhost:5001
```

Backend `.env` should set at minimum:

```env
PORT=5001
SESSION_SECRET=replace_me
JWT_SECRET=replace_me
MONGO_URI=mongodb://localhost:27017/openhw_studio_db
AI_PROVIDER=openai
OPENAI_API_KEY=replace_me
OPENAI_MODEL=gpt-5
```

Do not add AI secrets to frontend `.env` files. Frontend AI calls go through `/api/ai/electronics/:action`, and the backend owns provider keys, timeouts, and provider selection.

## Verification

Run:

```bash
cd OpenHW-studio-frontend
npm test -- --run
npm run build
cd openhw-studio-emulator
npm test
cd ..\..\openhw-studio-backend
npm test
```

Backend compile workflows require `arduino-cli` and installed board cores. MongoDB-backed auth/classroom workflows require a reachable MongoDB instance.

Focused AI checks:

```bash
cd OpenHW-studio-frontend
npm test -- --run tests/unit/ai/circuitContext.test.js tests/unit/ai/electronicsValidation.test.js tests/unit/ai/circuitAnalysis.test.js
```

Add or update these tests whenever changing component metadata, validation rules, challenge criteria, circuit context shape, or tutor behavior.
