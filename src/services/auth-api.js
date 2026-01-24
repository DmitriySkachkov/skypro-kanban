import { API_BASE_URL, makeRequest } from './api';

export async function registerUser({ login, password, name }) {
  const response = await makeRequest(`${API_BASE_URL}/user`, {
    method: 'POST',
    body: JSON.stringify({ login, password, name }),
  });
  
  return response;
}

export async function loginUser({ login, password }) {
  const response = await makeRequest(`${API_BASE_URL}/user/login`, {
    method: 'POST',
    body: JSON.stringify({ login, password }),
  });
  
  if (response.user?.token) {
    localStorage.setItem('token', response.user.token);
    localStorage.setItem('user', JSON.stringify(response.user));
  }
  
  return response;
}

export async function getCurrentUser() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  try {
    const response = await makeRequest(`${API_BASE_URL}/user`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.user || response;
  } catch {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return null;
  }
}