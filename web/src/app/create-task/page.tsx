'use client';
import { useState } from 'react';

export default function CreateTaskPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: добавить логику создания задачи
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Создать задачу</h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            className="border rounded px-3 py-2 mb-2 w-full"
            placeholder="Название задачи"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <textarea
            className="border rounded px-3 py-2 mb-2 w-full"
            placeholder="Описание (необязательно)"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
          >
            Создать
          </button>
        </form>
      </div>
    </main>
  );
} 