// pages/index.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Определяем типы для Telegram WebApp
declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void;
        expand: () => void;
        initDataUnsafe?: {
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code?: string;
          };
        };
      };
    };
  }
}

export default function Home() {
  const router = useRouter();
  const [tg, setTg] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && typeof window !== 'undefined') {
      // Проверяем доступность Telegram WebApp
      if (window.Telegram?.WebApp) {
        const webApp = window.Telegram.WebApp;
        webApp.ready();
        
        setTg(webApp);
        setUser(webApp.initDataUnsafe?.user);
        
        // Если пользователь есть, переходим на dashboard
        if (webApp.initDataUnsafe?.user) {
          router.push('/dashboard');
        }
      } else {
        console.warn('Telegram WebApp SDK не доступен');
      }
    }
  }, [isClient, router]);

  const handleLogin = () => {
    if (tg) {
      tg.expand();
      if (user) {
        router.push('/dashboard');
      }
    } else {
      alert(
        'Telegram WebApp SDK не инициализирован.\n\nПроверьте, что вы открыли приложение внутри Telegram.\n\nDebug info: tg=' +
          String(!!tg) +
          ', initDataUnsafe=' +
          JSON.stringify(user)
      );
    }
  };

  // Не рендерим компонент на сервере
  if (!isClient) {
    return null;
  }

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