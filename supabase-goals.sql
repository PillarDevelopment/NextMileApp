-- Goals table for NextMile Telegram WebApp
create table if not exists public.goals (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  category text not null,
  deadline date not null,
  user_id text not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

create index if not exists goals_user_id_idx on public.goals(user_id);

alter table goals enable row level security;

create policy if not exists "Users can insert their own goals" on goals
  for insert using (true);

create policy if not exists "Users can select their own goals" on goals
  for select using (true); 