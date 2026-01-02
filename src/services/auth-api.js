import { API_BASE_URL, makeRequest } from './api';

// Регистрация пользователя
export async function registerUser({ login, password, name }) {
  const response = await makeRequest(`${API_BASE_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login, password, name }),
  });
  
  return response;
}

// Авторизация пользователя
export async function loginUser({ login, password }) {
  const response = await makeRequest(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login, password }),
  });
  
  // Сохраняем токен
  if (response.token) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
  }
  
  return response;
}

// Получение текущего пользователя (проверка токена)
export async function getCurrentUser() {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }
  
  try {
    const response = await makeRequest(`${API_BASE_URL}/user`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.user;
  } catch {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return null;
  }
}