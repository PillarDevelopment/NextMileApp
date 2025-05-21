'use client';
import Image from "next/image";
import { useTelegramWebApp } from "../hooks/useTelegramWebApp";

export default function Home() {
  const isTelegram = useTelegramWebApp();

  if (isTelegram === false) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
          <Image src="/logo.svg" alt="NextMile" width={64} height={64} className="mb-4" />
          <h1 className="text-2xl font-bold mb-2">NextMile</h1>
          <p className="text-gray-500 mb-6 text-center">
            Это мини-приложение Telegram.<br />
            Пожалуйста, откройте его через Telegram (бот или меню мини-приложений).
          </p>
        </div>
      </main>
    );
  }

  if (isTelegram === null) {
    // Можно показать лоадер
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <Image src="/logo.svg" alt="NextMile" width={64} height={64} className="mb-4" />
        <h1 className="text-2xl font-bold mb-2">NextMile</h1>
        <p className="text-gray-500 mb-6 text-center">AI-трекер бизнес-целей с интеграцией Telegram</p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-2 w-full"
          onClick={() => {
            if (window.Telegram?.WebApp) {
              window.Telegram.WebApp.expand();
            }
          }}
        >
          Войти через Telegram
        </button>
        <a href="/dashboard" className="text-blue-600 hover:underline text-sm mt-2">Перейти к целям</a>
      </div>
    </main>
  );
}
