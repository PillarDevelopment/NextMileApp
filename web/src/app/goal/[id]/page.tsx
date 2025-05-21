import React from 'react';

export default function GoalDetail() {
  // TODO: получить id из params и загрузить цель из Supabase
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <h1 className="text-xl font-bold mb-4">Детали цели</h1>
        <div className="w-full">
          <div className="mb-2"><b>Название:</b> Заглушка</div>
          <div className="mb-2"><b>Категория:</b> -</div>
          <div className="mb-2"><b>Дедлайн:</b> -</div>
          <div className="mb-2"><b>Целевое значение:</b> -</div>
          <div className="mb-2"><b>Прогресс:</b> 0%</div>
          <div className="mb-2"><b>Статус:</b> -</div>
        </div>
      </div>
    </main>
  );
} 