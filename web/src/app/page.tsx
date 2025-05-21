'use client';
import Image from "next/image";
import { useTelegramWebApp } from "../hooks/useTelegramWebApp";
import { useTelegramUser } from "../hooks/useTelegramUser";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const isTelegram = useTelegramWebApp();
  const userId = useTelegramUser();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      setLoading(true);
      (async () => {
        const { data } = await supabase
          .from("users")
          .select("*")
          .eq("telegram_id", userId)
          .single();
        if (!data) {
          await supabase.from("users").insert({
            telegram_id: userId,
            created_at: new Date().toISOString(),
          });
        }
        setLoading(false);
      })();
    }
  }, [userId]);

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

  if (isTelegram === null || (userId && loading)) {
    // Можно показать лоадер
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
          <Image src="/logo.svg" alt="NextMile" width={64} height={64} className="mb-4" />
          <h1 className="text-2xl font-bold mb-2">NextMile</h1>
          <p className="text-gray-500 mb-6 text-center">Загрузка...</p>
        </div>
      </main>
    );
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
