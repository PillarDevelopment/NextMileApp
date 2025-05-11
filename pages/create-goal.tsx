import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

const categories = ['Финансы', 'Маркетинг', 'Продукт', 'Операции', 'Личное'];

export default function CreateGoal() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [deadline, setDeadline] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // 1. Создать цель
    const { data: goal, error } = await supabase
      .from('goals')
      .insert([{ title, category, deadline }])
      .select()
      .single();
    if (error || !goal) {
      alert('Ошибка создания цели');
      setLoading(false);
      return;
    }
    // 2. Сгенерировать 3 спринта-плана
    const fakePlans = [1, 2, 3].map((sprint) => ({
      goal_id: goal.id,
      sprint,
      description: `Спринт ${sprint}: фейковое описание плана для цели "${title}"`
    }));
    await supabase.from('plans').insert(fakePlans);
    setLoading(false);
    router.push(`/plan-ai?goal_id=${goal.id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-6">Создать цель</h1>
      <form onSubmit={handleSubmit} className="bg-white/10 rounded-xl p-6 w-full max-w-md flex flex-col gap-4">
        <input
          className="p-3 rounded bg-white/20 text-white placeholder-gray-400"
          placeholder="Название цели"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <select
          className="p-3 rounded bg-white/20 text-white"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <input
          className="p-3 rounded bg-white/20 text-white placeholder-gray-400"
          type="date"
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-telegramAccent text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-500 transition mt-2"
          disabled={loading}
        >
          {loading ? 'Создание...' : 'Создать цель'}
        </button>
      </form>
    </div>
  );
} 