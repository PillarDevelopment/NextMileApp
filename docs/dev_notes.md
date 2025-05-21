# dev_notes.md

## v0.3-sprint3

- Для целей расширена схема таблицы goals (см. db/02_goals_extend.sql)
- Включён RLS и политики доступа (см. db/03_goals_rls.sql)
- CRUD для целей реализован через Supabase API (бот + webapp)
- В боте реализованы команды /addgoal (wizard) и /goals (список)
- В webapp реализованы экраны: список целей, создание, детали
- Для навигации в webapp используется React Navigation
- Все действия с целями завязаны на Telegram user ID через Supabase

## v0.2-sprint2

- Для регистрации пользователя используется Supabase (таблица users)
- Проверка и регистрация происходят при /start
- Для команд /help и /status реализованы шаблоны ответов
- Используется Telegraf, но архитектура совместима с node-telegram-bot-api
- Для доступа к Supabase используются переменные окружения SUPABASE_URL и SUPABASE_SERVICE_KEY
- Для webapp используется Expo (React Native Web) в /src/webapp
- Для webapp используется Supabase JS SDK и Telegram WebApp SDK (window.Telegram.WebApp)
- Поток: initData → userId → запрос к Supabase → Dashboard/Login

## v0.1-sprint1

- Проект разделён на /bot, /web, /db для изоляции логики
- Для миграций используется SQL-файл db/01_init.sql (ручной запуск через Supabase UI)
- Для бота выбран Telegraf (Node.js) — простота, популярность, поддержка web_app
- .env.example не удалось создать из-за ограничений, но переменная BOT_TOKEN обязательна
- В README.md описан процесс запуска и настройки
- QA: вручную проверено создание таблиц и запуск бота, ошибок не обнаружено 