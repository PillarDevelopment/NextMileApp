import { useEffect, useState } from 'react';
import { Task } from '../types/task';
import { fetchTasks } from '../lib/tasksApi';

export function useTasks(goalId?: string) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchTasks(goalId)
      .then(setTasks)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [goalId]);

  return { tasks, loading, error };
} 