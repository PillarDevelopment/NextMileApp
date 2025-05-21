# CHANGELOG

## v0.2-sprint2

- Добавлена регистрация пользователя в Supabase при /start
- Добавлены команды /help и /status в боте
- Интеграция с Supabase через @supabase/supabase-js
- Обновлён .env.example (SUPABASE_URL, SUPABASE_SERVICE_KEY, WEB_APP_URL)
- Подготовка к запуску webapp (React Native Web)
- Инициализирован Expo-проект в /src/webapp
- Добавлен supabaseClient.js для webapp
- Реализован базовый поток аутентификации через Telegram WebApp SDK и Supabase

## v0.1-sprint1

- Инициализирован Node.js проект
- Создана структура папок: /bot, /web, /db, /src, /tests, /scripts
- Добавлен минимальный Telegram-бот на Telegraf
- Добавлены SQL-миграции для users, goals, tasks
- Добавлена инструкция в README.md
- Добавлен QA-чеклист и ручное тестирование 