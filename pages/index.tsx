import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useInitData, useWebApp } from '@vkruglikov/react-telegram-web-app';

export default function Home() {
  const router = useRouter();
  const [initDataUnsafe] = useInitData();
  const tg = useWebApp();

  useEffect(() => {
    if (initDataUnsafe?.user) {
      router.push('/dashboard');
    }
  }, [initDataUnsafe, router]);

  const handleLogin = () => {
    if (tg) {
      tg.expand();
      if (initDataUnsafe?.user) {
        router.push('/dashboard');
      }
    } else {
      alert('Telegram WebApp SDK не инициализирован.\n\nПроверьте, что вы открыли приложение внутри Telegram.\n\nDebug info: tg=' + String(!!tg) + ', initDataUnsafe=' + JSON.stringify(initDataUnsafe));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-6">Вход в NextMile</h1>
      <button
        className="bg-telegramAccent text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-500 transition"
        onClick={handleLogin}
      >
        Войти через Telegram
      </button>
      <p className="mt-6 text-sm text-gray-400 text-center max-w-xs">
        Для корректной работы авторизации откройте приложение внутри Telegram.<br />
        <span className="block mt-2">Debug: tg = {String(!!tg)}, user = {initDataUnsafe?.user ? 'есть' : 'нет'}</span>
      </p>
    </div>
  );
} 