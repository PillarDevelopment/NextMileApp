-- Создание таблицы для ежедневной бизнес-нагрузки
create table if not exists daily_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  date date not null,
  load integer not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

create index if not exists idx_daily_progress_user_date on daily_progress(user_id, date);

-- Функция для получения прогресса по целям пользователя
create or replace function get_goal_progress(user_id uuid)
returns table (
  goal_id uuid,
  goal_title text,
  completed_tasks integer,
  total_tasks integer,
  progress float
) as $$
begin
  return query
    select
      g.id as goal_id,
      g.title as goal_title,
      count(t.id) filter (where t.is_completed) as completed_tasks,
      count(t.id) as total_tasks,
      case when count(t.id) = 0 then 0 else count(t.id) filter (where t.is_completed)::float / count(t.id) end as progress
    from goals g
    left join tasks t on t.goal_id = g.id
    where g.user_id = user_id
    group by g.id, g.title;
end;
$$ language plpgsql; 