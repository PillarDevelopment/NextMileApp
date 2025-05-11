# NextMile Telegram WebApp Prototype

Прототип Telegram WebApp для приложения Business Connect (NextMile).

## Стек
- Next.js (React SPA)
- Tailwind CSS
- Telegram WebApp SDK

## Запуск
```bash
npm install
npm run dev
```

## Страницы
- `/` — Экран регистрации (Telegram WebApp авторизация)
- `/dashboard` — Дашборд пользователя

## Особенности
- Минималистичный дизайн, стилизация под Telegram
- Интеграция с Telegram WebApp SDK 

## Telegram Auth & User Flow

- После авторизации через Telegram WebApp initData (данные пользователя) пробрасываются через query-параметр между всеми страницами.
- Все цели, задачи и планы фильтруются по Telegram user ID (поле telegram_id в базе).
- Если у пользователя нет целей — происходит редирект на /onboarding (форма создания первой цели).
- После создания цели пользователь всегда попадает на /dashboard.
- Для корректной работы initData должен быть всегда в query (реализовано через InitDataProvider в _app.tsx). 