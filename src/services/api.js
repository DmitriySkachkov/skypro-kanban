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
        // Не удалось распарсить JSON с ошибкой
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

// Функция для запросов с авторизацией (задачи)
function makeApiRequest(url, options = {}) {
  const token = getToken();
  const headers = {
    ...options.headers,
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return makeRequest(url, {
    ...options,
    headers,
  });
}

export { 
  API_BASE_URL, 
  makeRequest, 
  makeApiRequest,
  getToken 
};