# NextMile MVP — Спринт 3: Управление целями

## Новое в этом спринте

- Расширена таблица целей (goals) в Supabase: добавлены поля category, end_date, target_value, progress, status и др.
- Включён RLS и политики доступа: только владелец может видеть/редактировать свои цели
- В боте реализованы команды:
  - `/addgoal` — пошаговое создание цели
  - `/goals` — просмотр списка целей
- В webapp реализованы:
  - Экран списка целей (GoalsList)
  - Экран создания цели (CreateGoal)
  - Экран деталей цели (GoalDetail)
- Вся логика работает через Supabase API

## Структура проекта

- `/bot` — Telegram-бот (Node.js, Telegraf)
- `/web` — фронтенд (будет позже)
- `/db` — SQL-миграции для Supabase
- `/src/webapp` — React Native Web App (Expo)
- `/src` — исходный код (будет позже)
- `/tests` — автотесты (будет позже)
- `/scripts` — вспомогательные скрипты (будет позже)

## Быстрый старт бота

1. Перейдите в папку `bot`
2. Скопируйте `.env.example` в `.env` и вставьте свой токен бота, а также параметры Supabase и WEB_APP_URL
3. Установите зависимости: `npm install`
4. Запустите бота: `npm start`

## Быстрый старт webapp (Expo)

1. Перейдите в папку `src/webapp`
2. Скопируйте `.env.example` в `.env` и вставьте параметры Supabase
3. Установите зависимости: `npm install`
4. Запустите webapp: `npm run web`

## Переменные окружения

- `BOT_TOKEN` — токен Telegram-бота
- `SUPABASE_URL` — URL вашего Supabase-проекта
- `SUPABASE_SERVICE_KEY` — сервисный ключ Supabase
- `WEB_APP_URL` — URL вашего Web App (React Native Web)
- `EXPO_PUBLIC_SUPABASE_URL` — URL вашего Supabase для webapp
- `EXPO_PUBLIC_SUPABASE_ANON_KEY` — анонимный ключ Supabase для webapp

## Supabase

1. Создайте проект на https://app.supabase.com/
2. Выполните миграцию из `db/01_init.sql` для создания таблиц users, goals, tasks

## Регистрация Telegram-бота

1. Перейдите в BotFather в Telegram
2. Создайте нового бота, получите токен
3. Вставьте токен в `.env` в папке `bot`

## Доступные команды бота

- `/start` — регистрация и запуск
- `/help` — справка
- `/status` — статус аккаунта

---

## QA-чеклист для спринта 3

- [x] Миграция для расширения таблицы целей применена
- [x] Включён RLS и политики доступа для целей
- [x] Бот: /addgoal и /goals работают, цели создаются и отображаются
- [x] Webapp: список целей, создание, детали работают
- [x] Ошибок при запуске нет
- [x] Документация и структура соответствуют master_promt_cursor.md

**После этого бот будет отвечать на /start.** 