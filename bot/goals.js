const { supabase } = require('./supabaseClient');

// Получить все цели пользователя
async function getGoals(telegramId) {
  // Получаем user_id по telegram_id
  const { data: user } = await supabase
    .from('users')
    .select('id')
    .eq('telegram_id', telegramId)
    .single();
  if (!user) return [];
  const { data: goals } = await supabase
    .from('goals')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });
  return goals || [];
}

// Создать новую цель
async function createGoal(telegramId, goal) {
  const { data: user } = await supabase
    .from('users')
    .select('id')
    .eq('telegram_id', telegramId)
    .single();
  if (!user) throw new Error('User not found');
  const { data, error } = await supabase
    .from('goals')
    .insert({ ...goal, user_id: user.id })
    .select()
    .single();
  if (error) throw error;
  return data;
}

// Получить цель по id
async function getGoalById(goalId) {
  const { data } = await supabase
    .from('goals')
    .select('*')
    .eq('id', goalId)
    .single();
  return data;
}

// Обновить цель
async function updateGoal(goalId, updates) {
  const { data, error } = await supabase
    .from('goals')
    .update(updates)
    .eq('id', goalId)
    .select()
    .single();
  if (error) throw error;
  return data;
}

// Удалить цель
async function deleteGoal(goalId) {
  const { error } = await supabase
    .from('goals')
    .delete()
    .eq('id', goalId);
  if (error) throw error;
  return true;
}

module.exports = {
  getGoals,
  createGoal,
  getGoalById,
  updateGoal,
  deleteGoal,
}; 