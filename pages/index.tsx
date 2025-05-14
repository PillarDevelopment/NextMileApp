import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTelegram } from '@vkruglikov/react-telegram-web-app';

export default function Home() {
  const router = useRouter();
  const { webApp: tg, user } = useTelegram();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Проверяем, что приложение запущено в Telegram
      if (!window.Telegram?.WebApp) {
        console.warn('Приложение запущено вне Telegram');
        alert(
          'Telegram WebApp SDK не инициализирован.\n\nПроверьте, что вы открыли приложение внутри Telegram.'
        );
        return;
      }

      // Если SDK доступен и есть пользователь
      if (tg && user) {
        router.push('/dashboard');
      }
    }
  }, [tg, user, router]);

  const handleLogin = () => {
    if (tg) {
      tg.expand();
      // Вызываем ready для полной инициализации
      tg.ready();
      
      if (user) {
        router.push('/dashboard');
      }
    } else {
      alert(
        'Telegram WebApp SDK не инициализирован.\n\nПроверьте, что вы открыли приложение внутри Telegram.'
      );
    }
  };

  // Добавим отладочную информацию
  useEffect(() => {
    console.log('WebApp object:', tg);
    console.log('User:', user);
    console.log('Window Telegram:', window.Telegram);
  }, [tg, user]);

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
        Для корректной работы авторизации откройте приложение внутри Telegram.
        <br />
        <span className="block mt-2">
          Debug: tg = {String(!!tg)}, user = {user ? 'есть' : 'нет'}
        </span>
      </p>
    </div>
  );
}