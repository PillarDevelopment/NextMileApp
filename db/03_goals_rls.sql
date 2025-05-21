-- Включить RLS для таблицы goals
ALTER TABLE goals ENABLE ROW LEVEL SECURITY;

-- Политика: только владелец может читать свои цели
CREATE POLICY "Select own goals only" ON goals
  FOR SELECT USING (user_id = auth.uid());

-- Политика: только владелец может вставлять свои цели
CREATE POLICY "Insert own goals only" ON goals
  FOR INSERT WITH CHECK (user_id = auth.uid());

-- Политика: только владелец может обновлять свои цели
CREATE POLICY "Update own goals only" ON goals
  FOR UPDATE USING (user_id = auth.uid());

-- Политика: только владелец может удалять свои цели
CREATE POLICY "Delete own goals only" ON goals
  FOR DELETE USING (user_id = auth.uid()); 