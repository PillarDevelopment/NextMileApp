import { createClient } from '@supabase/supabase-js';
import { BusinessLoad, GoalProgress } from '../types/analytics';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchBusinessLoad(userId: string): Promise<BusinessLoad[]> {
  const { data, error } = await supabase
    .from('daily_progress')
    .select('date, load')
    .eq('user_id', userId)
    .order('date', { ascending: true });
  if (error) throw error;
  return data as BusinessLoad[];
}

export async function fetchGoalProgress(userId: string): Promise<GoalProgress[]> {
  const { data, error } = await supabase.rpc('get_goal_progress', { user_id: userId });
  if (error) throw error;
  return data as GoalProgress[];
} 