import { API_BASE_URL, makeRequest, getHeaders } from './api';

// Получить все задачи
export async function getTasks() {
  return await makeRequest(`${API_BASE_URL}/kanban`, {
    headers: getHeaders(),
  });
}

// Получить задачу по ID
export async function getTaskById(id) {
  return await makeRequest(`${API_BASE_URL}/kanban/${id}`, {
    headers: getHeaders(),
  });
}

// Создать задачу
export async function createTask(taskData) {
  return await makeRequest(`${API_BASE_URL}/kanban`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(taskData),
  });
}

// Обновить задачу
export async function updateTask(id, taskData) {
  return await makeRequest(`${API_BASE_URL}/kanban/${id}`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(taskData),
  });
}

// Удалить задачу
export async function deleteTask(id) {
  return await makeRequest(`${API_BASE_URL}/kanban/${id}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
}