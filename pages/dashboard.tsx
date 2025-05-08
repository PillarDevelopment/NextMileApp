import React from 'react';
import { useTelegram } from '@vkruglikov/react-telegram-web-app';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const { initDataUnsafe, tg } = useTelegram();
  const router = useRouter();

  const handleLogout = () => {
    if (tg) {
      tg.close();
    }
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-4">Добро пожаловать{initDataUnsafe?.user?.first_name ? `, ${initDataUnsafe.user.first_name}` : ''}!</h1>
      <div className="bg-white/10 rounded-xl p-6 mb-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Ваш прогресс</h2>
        <div className="w-full bg-white/20 rounded-full h-4 mb-2">
          <div className="bg-telegramAccent h-4 rounded-full" style={{ width: '60%' }} />
        </div>
        <p className="text-sm">60% до следующей цели</p>
      </div>
      <button
        className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
        onClick={handleLogout}
      >
        Выйти
      </button>
    </div>
  );
} 