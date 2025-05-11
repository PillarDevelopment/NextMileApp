import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

export default function PlanAI() {
  const router = useRouter();
  const { goal_id } = router.query;
  const [goal, setGoal] = useState<any>(null);
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!goal_id) return;
    const fetchData = async () => {
      setLoading(true);
      const { data: goalData } = await supabase.from('goals').select('*').eq('id', goal_id).single();
      const { data: plansData } = await supabase.from('plans').select('*').eq('goal_id', goal_id).order('sprint');
      setGoal(goalData);
      setPlans(plansData || []);
      setLoading(false);
    };
    fetchData();
  }, [goal_id]);

  if (loading) return <div className="flex items-center justify-center min-h-screen">Загрузка...</div>;
  if (!goal) return <div className="flex items-center justify-center min-h-screen">Цель не найдена</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-4">План от AI для цели</h1>
      <div className="text-lg font-semibold mb-6">{goal.title}</div>
      <div className="bg-white/10 rounded-xl p-6 w-full max-w-md flex flex-col gap-4">
        {plans.map(plan => (
          <div key={plan.sprint} className="bg-white/20 rounded p-4">
            <div className="font-bold mb-2">Спринт {plan.sprint}</div>
            <div>{plan.description}</div>
          </div>
        ))}
      </div>
      <button
        className="mt-8 bg-telegramAccent text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-500 transition"
        onClick={() => router.push('/dashboard')}
      >
        На дашборд
      </button>
    </div>
  );
} 