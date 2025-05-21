import React from 'react';

export default function CreateGoal() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <h1 className="text-xl font-bold mb-4">Создать цель</h1>
        <form className="w-full flex flex-col gap-4">
          <input type="text" placeholder="Название" className="border rounded px-3 py-2" required />
          <select className="border rounded px-3 py-2">
            <option value="finance">Финансы</option>
            <option value="marketing">Маркетинг</option>
            <option value="product">Продукт</option>
            <option value="sales">Продажи</option>
            <option value="legal">Юридические</option>
            <option value="government">Государство</option>
            <option value="other">Прочее</option>
          </select>
          <input type="date" className="border rounded px-3 py-2" required />
          <input type="number" placeholder="Целевое значение" className="border rounded px-3 py-2" required />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Создать</button>
        </form>
      </div>
    </main>
  );
} 