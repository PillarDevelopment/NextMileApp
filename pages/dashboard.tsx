import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import jwtDecode from 'jwt-decode';

export default function Dashboard() {
  const [goals, setGoals] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Получаем Telegram user ID из initData
  const initData = router.query.initData || '';
  let telegramId = '';
  try {
    if (initData) {
      const decoded: any = jwtDecode(String(initData));
      telegramId = decoded.user?.id ? String(decoded.user.id) : '';
    } else if (process.env.NODE_ENV === 'development') {
      telegramId = 'dev-test-user'; // fallback для локальной разработки
    }
  } catch {
    if (process.env.NODE_ENV === 'development') {
      telegramId = 'dev-test-user';
    } else {
      telegramId = '';
    }
  }

  useEffect(() => {
    if (!telegramId) {
      setError('Нет данных Telegram пользователя. Откройте WebApp через Telegram или добавьте initData в query.');
      setLoading(false);
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      const { data: goalsData } = await supabase.from('goals').select('*').eq('telegram_id', telegramId).order('deadline');
      const { data: tasksData } = await supabase.from('tasks').select('*').eq('telegram_id', telegramId).eq('status', 'todo');
      setGoals(goalsData || []);
      setTasks(tasksData || []);
      setLoading(false);
      if ((goalsData || []).length === 0) {
        router.replace({ pathname: '/onboarding', query: { initData } });
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [telegramId]);

  // Фейковый бизнес-нагрузка (рандом)
  const businessLoad = 40 + Math.floor(Math.random() * 40);

  if (loading) return <div className="flex items-center justify-center min-h-screen">Загрузка...</div>;
  if (error) return <div className="flex items-center justify-center min-h-screen text-center text-red-400">{error}</div>;

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Дашборд</h1>
      <div className="mb-6 w-full max-w-md">
        <div className="mb-2 font-semibold">Бизнес-нагрузка</div>
        <div className="w-full bg-white/20 rounded-full h-4 mb-2">
          <div className="bg-yellow-400 h-4 rounded-full" style={{ width: `${businessLoad}%` }} />
        </div>
        <div className="text-sm text-gray-300">{businessLoad}%</div>
      </div>
      <div className="w-full max-w-md mb-8">
        <div className="flex justify-between items-center mb-2">
          <div className="font-semibold">Ваши цели</div>
          <button
            className="bg-telegramAccent text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition"
            onClick={() => router.push({ pathname: '/create-goal', query: { initData } })}
          >
            + Новая цель
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {goals.length === 0 && <div className="text-gray-400">Нет целей</div>}
          {goals.map(goal => (
            <div key={goal.id} className="bg-white/10 rounded-xl p-4 flex flex-col gap-2">
              <div className="font-bold">{goal.title}</div>
              <div className="text-sm text-gray-300">Категория: {goal.category} | Дедлайн: {goal.deadline}</div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div className="bg-telegramAccent h-3 rounded-full" style={{ width: `${goal.progress || 0}%` }} />
              </div>
              <div className="text-xs text-gray-400 mb-2">Прогресс: {goal.progress || 0}%</div>
              <div className="flex gap-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600"
                  onClick={() => router.push({ pathname: '/plan-ai', query: { goal_id: goal.id, initData } })}
                >
                  План от AI
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-md">
        <div className="font-semibold mb-2">Задачи на день</div>
        <div className="flex flex-col gap-3">
          {tasks.length === 0 && <div className="text-gray-400">Нет задач на сегодня</div>}
          {tasks.map(task => (
            <div key={task.id} className="bg-white/10 rounded-xl p-3 flex flex-col gap-1">
              <div className="font-semibold">{task.title}</div>
              <div className="text-xs text-gray-300">Сложность: {task.complexity || '—'}</div>
              <div className="text-xs text-gray-400">Статус: {task.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 