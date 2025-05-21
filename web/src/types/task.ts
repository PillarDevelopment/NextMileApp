export interface Task {
  id: string;
  goal_id: string;
  title: string;
  description?: string;
  is_completed: boolean;
  priority: number;
  due_date?: string;
  created_at: string;
} 