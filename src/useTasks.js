import { useContext } from 'react';
import TaskContext from './task-context';

export function useTasks() {
  const context = useContext(TaskContext);
  
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  
  return context;
}