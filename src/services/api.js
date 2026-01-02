// Базовый URL API
const API_BASE_URL = 'https://wedev-api.sky.pro/api';

// Базовый запрос с обработкой ошибок
async function makeRequest(url, options = {}) {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      let errorMessage = `HTTP error ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch {
        // Не удалось распарсить JSON с ошибкой, используем сообщение по умолчанию
      }
      throw new Error(errorMessage);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// Получение токена из localStorage
function getToken() {
  return localStorage.getItem('token');
}

// Создание заголовков с авторизацией
function getHeaders() {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return headers;
}

export { API_BASE_URL, makeRequest, getToken, getHeaders };