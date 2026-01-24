import { API_BASE_URL, makeApiRequest } from './api';

export async function getTasks() {
  return await makeApiRequest(`${API_BASE_URL}/kanban`);
}

export async function getTaskById(id) {
  return await makeApiRequest(`${API_BASE_URL}/kanban/${id}`);
}

export async function createTask(taskData) {
  return await makeApiRequest(`${API_BASE_URL}/kanban`, {
    method: 'POST',
    body: JSON.stringify(taskData),
  });
}

export async function updateTask(id, taskData) {
  return await makeApiRequest(`${API_BASE_URL}/kanban/${id}`, {
    method: 'PUT',
    body: JSON.stringify(taskData),
  });
}

export async function deleteTask(id) {
  return await makeApiRequest(`${API_BASE_URL}/kanban/${id}`, {
    method: 'DELETE',
  });
}