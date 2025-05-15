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
  const [debugInfo, setDebugInfo] = useState<any>({});

  useEffect(() => {
    // Ждем полной загрузки
    const timer = setTimeout(() => {
      if (window.Telegram?.WebApp) {
        const tg = window.Telegram.WebApp;
        
        // Важно: вызываем ready() первым делом
        tg.ready();
        
        // Парсим userId из initData (Telegram WebApp передает query string)
        let userId = '';
        if (tg.initData) {
          const params = new URLSearchParams(tg.initData);
          const userRaw = params.get('user');
          if (userRaw) {
            try {
              const user = JSON.parse(userRaw);
              userId = user.id;
            } catch (e) {
              userId = '';
            }
          }
        }
        
        // Собираем всю информацию
        const info = {
          // Основные данные
          version: tg.version,
          platform: tg.platform,
          initData: tg.initData,
          initDataLength: tg.initData?.length || 0,
          initDataUnsafe: tg.initDataUnsafe,
          userId,
          
          // Проверка хэша
          hash: window.location.hash,
          hashDecoded: decodeURIComponent(window.location.hash),
          
          // Параметры запроса
          search: window.location.search,
          searchParams: Object.fromEntries(new URLSearchParams(window.location.search)),
          
          // Состояние
          isExpanded: tg.isExpanded,
          viewportHeight: tg.viewportHeight,
          
          // Тема
          themeParams: tg.themeParams,
          headerColor: tg.headerColor,
          backgroundColor: tg.backgroundColor,
        };
        
        setDebugInfo(info);
        
        // Проверяем наличие пользователя
        if (userId) {
          setStatus('✅ Пользователь найден! Переход...');
          setTimeout(() => router.push('/dashboard'), 1000);
        } else if (tg.initData) {
          setStatus('⚠️ InitData есть, но пользователь не найден');
        } else {
          setStatus('❌ Нет initData - откройте через кнопку в боте');
        }
      } else {
        setStatus('❌ Telegram WebApp SDK не найден');
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">NextMile Debug</h1>
      
      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <p className="text-lg font-semibold">{status}</p>
      </div>
      
      <div className="w-full max-w-2xl bg-gray-100 p-4 rounded-lg overflow-auto">
        <pre className="text-xs whitespace-pre-wrap">
          {JSON.stringify(debugInfo, null, 2)}
        </pre>
      </div>
      
      <div className="mt-4 space-y-2">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg"
          onClick={() => window.location.reload()}
        >
          Обновить
        </button>
        
        {window.Telegram?.WebApp && (
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-lg"
            onClick={() => {
              // Исправляем TypeScript ошибку с проверкой
              if (window.Telegram?.WebApp) {
                window.Telegram.WebApp.showAlert('Test Alert from WebApp');
              }
            }}
          >
            Тест Alert
          </button>
        )}
      </div>
    </div>
  );
}