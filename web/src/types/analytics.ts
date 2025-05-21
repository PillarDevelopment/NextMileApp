export interface BusinessLoad {
  date: string;
  load: number;
}

export interface GoalProgress {
  goal_id: string;
  goal_title: string;
  completed_tasks: number;
  total_tasks: number;
  progress: number; // 0..1
} 