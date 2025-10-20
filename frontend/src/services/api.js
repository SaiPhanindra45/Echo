import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Auth Service
 */
export const registerUser = (userData) => {
  return api.post('/auth/register', userData);
};

export const loginUser = (userData) => {
  return api.post('/auth/login', userData);
};

/**
 * User Service
 */
export const getAllUsers = () => {
  return api.get('/users');
};

export default api;

