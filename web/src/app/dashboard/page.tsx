export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <h1 className="text-xl font-bold mb-4">Мои цели</h1>
        <ul className="w-full mb-6">
          <li className="py-2 border-b">Заглушка: цель 1</li>
          <li className="py-2 border-b">Заглушка: цель 2</li>
        </ul>
        <a href="/create-goal" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full text-center">Создать цель</a>
      </div>
    </main>
  );
} 