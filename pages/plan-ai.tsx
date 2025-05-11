import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import jwtDecode from 'jwt-decode';

export default function PlanAI() {
  const router = useRouter();
  const { goal_id, initData } = router.query;
  const [goal, setGoal] = useState<any>(null);
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Получаем Telegram user ID из initData
  let telegramId = '';
  try {
    const decoded: any = jwtDecode(String(initData));
    telegramId = decoded.user?.id ? String(decoded.user.id) : '';
  } catch {
    telegramId = '';
  }

  useEffect(() => {
    if (!goal_id || !telegramId) return;
    const fetchData = async () => {
      setLoading(true);
      const { data: goalData } = await supabase.from('goals').select('*').eq('id', goal_id).eq('telegram_id', telegramId).single();
      const { data: plansData } = await supabase.from('plans').select('*').eq('goal_id', goal_id).order('sprint');
      setGoal(goalData);
      setPlans(plansData || []);
      setLoading(false);
    };
    fetchData();
  }, [goal_id, telegramId]);

  if (loading) return <div className="flex items-center justify-center min-h-screen">Загрузка...</div>;
  if (!goal) return <div className="flex items-center justify-center min-h-screen">Цель не найдена</div>;

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">План от AI для цели: {goal.title}</h1>
      <div className="w-full max-w-md flex flex-col gap-4">
        {plans.length === 0 && <div className="text-gray-400">Нет спринтов для этой цели</div>}
        {plans.map(plan => (
          <div key={plan.id} className="bg-white/10 rounded-xl p-4">
            <div className="font-semibold mb-1">Спринт {plan.sprint}</div>
            <div className="text-sm text-gray-300">{plan.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 