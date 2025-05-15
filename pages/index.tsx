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
  const [isWebApp, setIsWebApp] = useState(false);
  const [initData, setInitData] = useState('');
  const [userRaw, setUserRaw] = useState('');
  const [userId, setUserId] = useState('');
  const [tgObj, setTgObj] = useState<any>({});
  const [parseError, setParseError] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      setTgObj(tg);
      setInitData(tg.initData || '');
      let _userId = '';
      let _userRaw = '';
      let _parseError = '';
      if (tg.initData) {
        const params = new URLSearchParams(tg.initData);
        _userRaw = params.get('user') || '';
        setUserRaw(_userRaw);
        if (_userRaw) {
          try {
            const user = JSON.parse(_userRaw);
            _userId = user.id;
            setUserId(_userId);
          } catch (e) {
            _parseError = String(e);
            setParseError(_parseError);
            setUserId('');
          }
        } else {
          setUserId('');
        }
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">NextMile Debug</h1>
      
      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <p className="text-lg font-semibold">{status}</p>
      </div>
      
      <div className="w-full max-w-2xl bg-gray-100 p-4 rounded-lg overflow-auto">
        <div><b>initData:</b> <pre>{initData}</pre></div>
        <div><b>userRaw:</b> <pre>{userRaw}</pre></div>
        <div><b>userId:</b> <pre>{userId}</pre></div>
        {parseError && <div style={{color:'red'}}><b>Parse error:</b> {parseError}</div>}
        <div><b>tg object:</b> <pre>{JSON.stringify(tgObj, null, 2)}</pre></div>
      </div>
      
      <div className="mt-4 space-y-2">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg"
          onClick={() => window.location.reload()}
        >
          Обновить
        </button>
        
        {isWebApp && (
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-lg"
            onClick={() => {
              if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
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