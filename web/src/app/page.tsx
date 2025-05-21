'use client';
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <Image src="/logo.svg" alt="NextMile" width={64} height={64} className="mb-4" />
        <h1 className="text-2xl font-bold mb-2">NextMile</h1>
        <p className="text-gray-500 mb-6 text-center">AI-трекер бизнес-целей с интеграцией Telegram</p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-2 w-full"
          onClick={() => {
            if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
              window.Telegram.WebApp.expand();
            } else {
              alert('Откройте через Telegram WebApp');
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
