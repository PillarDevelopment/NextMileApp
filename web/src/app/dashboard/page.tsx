'use client';
import { BusinessLoad, GoalProgress } from '../../types/analytics';

const mockBusinessLoad: BusinessLoad[] = [
  { date: '2024-05-20', load: 3 },
  { date: '2024-05-21', load: 5 },
  { date: '2024-05-22', load: 2 },
];
const mockGoalProgress: GoalProgress[] = [
  { goal_id: '1', goal_title: 'Запустить MVP', completed_tasks: 3, total_tasks: 5, progress: 0.6 },
  { goal_id: '2', goal_title: 'Маркетинг', completed_tasks: 1, total_tasks: 2, progress: 0.5 },
];

export default function Dashboard() {
  const businessLoad = mockBusinessLoad;
  const goalProgress = mockGoalProgress;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <h1 className="text-xl font-bold mb-4">Дашборд</h1>
        <section className="w-full mb-6">
          <h2 className="text-lg font-semibold mb-2">Business Load (за 3 дня)</h2>
          <ul className="w-full flex gap-2 justify-between">
            {businessLoad.map((b) => (
              <li key={b.date} className="flex flex-col items-center">
                <span className="text-xs text-gray-400">{b.date.slice(5)}</span>
                <span className="text-blue-600 font-bold text-lg">{b.load}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full mb-6">
          <h2 className="text-lg font-semibold mb-2">Прогресс по целям</h2>
          <ul className="w-full">
            {goalProgress.map((g) => (
              <li key={g.goal_id} className="mb-2">
                <div className="flex justify-between">
                  <span>{g.goal_title}</span>
                  <span className="text-xs text-gray-500">{Math.round(g.progress * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded h-2 mt-1">
                  <div
                    className="bg-blue-500 h-2 rounded"
                    style={{ width: `${g.progress * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
        <a href="/create-goal" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full text-center">Создать цель</a>
      </div>
    </main>
  );
} 