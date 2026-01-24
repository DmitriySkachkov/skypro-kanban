const API_BASE_URL = 'https://wedev-api.sky.pro/api';

async function makeRequest(url, options = {}) {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      let errorMessage = `HTTP error ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorData.message || errorMessage;
      } catch {
        // Не удалось распарсить JSON
      }
      throw new Error(errorMessage);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

function getToken() {
  return localStorage.getItem('token');
}

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