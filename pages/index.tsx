// pages/index.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    Telegram?: {
      WebApp?: any;
    };
  }
}

export default function Home() {
  const router = useRouter();
  const [status, setStatus] = useState('Инициализация...');
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [initData, setInitData] = useState<any>(null);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 50; // 5 секунд
    
    const checkSDK = setInterval(() => {
      attempts++;
      
      if (window.Telegram?.WebApp) {
        clearInterval(checkSDK);
        setSdkLoaded(true);
        
        const tg = window.Telegram.WebApp;
        
        // Важно: вызываем ready() немедленно
        tg.ready();
        
        setInitData({
          version: tg.version,
          platform: tg.platform,
          initData: tg.initData,
          initDataUnsafe: tg.initDataUnsafe,
          isExpanded: tg.isExpanded,
          viewportHeight: tg.viewportHeight,
        });
        
        if (tg.initDataUnsafe?.user) {
          setStatus('Пользователь найден, переход на dashboard...');
          setTimeout(() => router.push('/dashboard'), 1000);
        } else {
          setStatus('Нет данных пользователя');
        }
      } else if (attempts >= maxAttempts) {
        clearInterval(checkSDK);
        setStatus('Telegram WebApp SDK не загрузился');
      }
    }, 100);
    
    return () => clearInterval(checkSDK);
  }, [router]);

  const handleLogin = () => {
    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
      router.push('/dashboard');
    } else {
      alert('Нет данных пользователя');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-6">NextMile</h1>
      
      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <p className="font-semibold">Статус: {status}</p>
        <p className="text-sm">SDK загружен: {sdkLoaded ? 'Да' : 'Нет'}</p>
      </div>
      
      {initData && (
        <div className="mb-4 p-4 bg-gray-100 rounded-lg max-w-lg w-full overflow-auto">
          <p className="font-semibold mb-2">Debug info:</p>
          <pre className="text-xs">
            {JSON.stringify(initData, null, 2)}
          </pre>
        </div>
      )}
      
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
        onClick={handleLogin}
        disabled={!sdkLoaded}
      >
        {sdkLoaded ? 'Войти' : 'Загрузка...'}
      </button>
    </div>
  );
}