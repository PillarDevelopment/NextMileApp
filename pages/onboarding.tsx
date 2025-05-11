import React, { useState } from 'react';
import { useRouter } from 'next/router';

const categories = ['Финансы', 'Маркетинг', 'Продукт', 'Личное'];

export default function Onboarding() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [deadline, setDeadline] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Получаем initData из query (Telegram WebApp)
    const initData = router.query.initData || '';
    const res = await fetch('/api/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, category, deadline, initData }),
    });
    if (res.ok) {
      router.push('/dashboard?initData=' + encodeURIComponent(String(initData)));
    } else {
      alert('Ошибка создания цели');
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Ваша первая цель</h1>
      <form onSubmit={handleSubmit} className="bg-white/10 rounded-xl p-6 w-full max-w-md flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-semibold">Название цели</label>
          <input
            className="w-full px-3 py-2 rounded bg-white/20 text-white outline-none"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Категория</label>
          <select
            className="w-full px-3 py-2 rounded bg-white/20 text-white outline-none"
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Дедлайн</label>
          <input
            type="date"
            className="w-full px-3 py-2 rounded bg-white/20 text-white outline-none"
            value={deadline}
            onChange={e => setDeadline(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-telegramAccent text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 transition"
          disabled={loading}
        >
          {loading ? 'Создание...' : 'Создать цель'}
        </button>
      </form>
    </div>
  );
} 