'use client';
import { useTasks } from '../../hooks/useTasks';

export default function TasksPage() {
  const { tasks, loading, error } = useTasks();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Мои задачи</h1>
        {loading && <p>Загрузка...</p>}
        {error && <p className="text-red-500">Ошибка: {error}</p>}
        {!loading && !error && tasks.length === 0 && <p className="text-gray-500">Пока задач нет.</p>}
        <ul className="w-full">
          {tasks.map(task => (
            <li key={task.id} className="border-b py-2 flex justify-between items-center">
              <span>{task.title}</span>
              {task.is_completed ? (
                <span className="text-green-500 text-xs ml-2">Выполнено</span>
              ) : (
                <span className="text-yellow-500 text-xs ml-2">В работе</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
} 