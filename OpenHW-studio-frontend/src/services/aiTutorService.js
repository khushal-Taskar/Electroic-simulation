import axios from 'axios';
import { API_BASE_URL } from './simulatorService.js';
import { getToken } from './authService.js';

const AI_ENDPOINT = `${API_BASE_URL}/ai/electronics`;

function getAuthConfig() {
  const token = getToken();
  return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
}

export async function requestElectronicsAi(action, { context, question, options } = {}) {
  const response = await axios.post(
    `${AI_ENDPOINT}/${encodeURIComponent(action)}`,
    { context, question, options },
    getAuthConfig(),
  );
  return response.data;
}
