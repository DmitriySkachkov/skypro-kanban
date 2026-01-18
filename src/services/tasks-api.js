import { API_BASE_URL, makeApiRequest } from './api';

// Получить все задачи
export async function getTasks() {
  return await makeApiRequest(`${API_BASE_URL}/kanban`);
}

// Получить задачу по ID
export async function getTaskById(id) {
  return await makeApiRequest(`${API_BASE_URL}/kanban/${id}`);
}

// Создать задачу
export async function createTask(taskData) {
  return await makeApiRequest(`${API_BASE_URL}/kanban`, {
    method: 'POST',
    body: JSON.stringify(taskData),
  });
}

// Обновить задачу
export async function updateTask(id, taskData) {
  return await makeApiRequest(`${API_BASE_URL}/kanban/${id}`, {
    method: 'PUT',
    body: JSON.stringify(taskData),
  });
}

// Удалить задачу
export async function deleteTask(id) {
  return await makeApiRequest(`${API_BASE_URL}/kanban/${id}`, {
    method: 'DELETE',
  });
}