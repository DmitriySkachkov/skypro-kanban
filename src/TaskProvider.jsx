import { useState, useCallback, useEffect } from 'react';
import { useAuth } from './useAuth';
import { getTasks, createTask, updateTask, deleteTask } from './services/tasks-api';
import TaskContext from './task-context';

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { isAuth } = useAuth();

  const loadTasks = useCallback(async () => {
    if (!isAuth) {
      setTasks([]);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const data = await getTasks();
      setTasks(data.tasks || []);
    } catch (err) {
      console.error('Failed to load tasks:', err);
      setError(err.message || 'Не удалось загрузить задачи');
      setTasks([]);
    } finally {
      setIsLoading(false);
    }
  }, [isAuth]);

  const addTask = useCallback(async (taskData) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await createTask(taskData);
      setTasks(data.tasks || []);
      return { success: true, data };
    } catch (err) {
      const errorMsg = err.message || 'Не удалось создать задачу';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const editTask = useCallback(async (id, taskData) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await updateTask(id, taskData);
      setTasks(data.tasks || []);
      return { success: true, data };
    } catch (err) {
      const errorMsg = err.message || 'Не удалось обновить задачу';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const removeTask = useCallback(async (id) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await deleteTask(id);
      setTasks(data.tasks || []);
      return { success: true, data };
    } catch (err) {
      const errorMsg = err.message || 'Не удалось удалить задачу';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getTasksByStatus = useCallback((status) => {
    return tasks.filter(task => task.status === status);
  }, [tasks]);

  const getTaskById = useCallback((id) => {
    return tasks.find(task => task._id === id);
  }, [tasks]);

  useEffect(() => {
    if (isAuth) {
      loadTasks();
    } else {
      setTasks([]);
    }
  }, [isAuth, loadTasks]);

  const value = {
    tasks,
    isLoading,
    error,
    loadTasks,
    addTask,
    editTask,
    removeTask,
    getTasksByStatus,
    getTaskById
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}