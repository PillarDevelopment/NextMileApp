import { createClient } from '@supabase/supabase-js';
import { Task } from '../types/task';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchTasks(goalId?: string): Promise<Task[]> {
  let query = supabase.from('tasks').select('*').order('priority', { ascending: false });
  if (goalId) query = query.eq('goal_id', goalId);
  const { data, error } = await query;
  if (error) throw error;
  return data as Task[];
}

export async function createTask(task: Omit<Task, 'id' | 'created_at'>) {
  const { data, error } = await supabase.from('tasks').insert([task]).select();
  if (error) throw error;
  return data?.[0] as Task;
}

export async function completeTask(taskId: string) {
  const { data, error } = await supabase.from('tasks').update({ is_completed: true }).eq('id', taskId).select();
  if (error) throw error;
  return data?.[0] as Task;
} 