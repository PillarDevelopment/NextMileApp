# Backend-разработка: Business Connect

## 1. Обзор продукта

Business Connect — это AI-трекер бизнес-целей и задач, аналогичный Garmin Connect/Strava, но ориентированный на бизнес. Приложение помогает предпринимателям систематически достигать бизнес-целей, снижать уровень стресса и предотвращать выгорание через адаптивное AI-планирование и визуализацию прогресса.

### 1.1 Ключевые функции бэкенда
- AI-планирование и разбивка бизнес-целей
- Адаптивное перепланирование и рекалькуляция задач
- Хранение и обработка данных о целях и прогрессе
- Генерация персонализированных рекомендаций
- Расчет метрик "Business Load" (аналог Body Battery в Garmin)
- Интеграция с внешними сервисами
- Управление пользователями и аутентификация
- Аналитика и отчетность

### 1.2 Целевая аудитория
- Предприниматели-одиночки
- Основатели стартапов (команды до 20 человек)
- Малый и средний бизнес (SMB)
- Фрилансеры и консультанты

## 2. Архитектура и технологический стек

### 2.1 Общая архитектура
- **API-first подход** — разделение бэкенда и фронтенда
- **Serverless архитектура на базе Supabase**
- **Декларативная безопасность** через Row Level Security (RLS)
- **Realtime API** для обновлений в реальном времени
- **REST API** для основных операций
- **Асинхронная обработка** для AI-рекомендаций и анализа через Edge Functions
- **Событийно-ориентированная архитектура** с использованием Postgres триггеров и WebHooks

### 2.2 Технологический стек
- **Бэкенд-платформа:** 
  - Supabase как основная платформа для бэкенда
  - Edge Functions Supabase для дополнительной логики (на JavaScript/TypeScript)
  - Serverless функции для интеграции с внешними сервисами
- **База данных:** 
  - PostgreSQL (управляемая Supabase)
  - Row Level Security (RLS) для обеспечения безопасности данных
  - Realtime механизмы Supabase для обновлений в реальном времени
- **Аутентификация и авторизация:**
  - Supabase Auth для управления пользователями
  - JWT токены и социальные логины
  - Детальные политики доступа через RLS
- **AI-интеграция:**
  - OpenAI GPT-4 API через Supabase Edge Functions
  - Собственная логика маршрутизации промптов
- **Хранение файлов:**
  - Supabase Storage для хранения медиа и файлов
- **Мониторинг и логирование:**
  - Встроенные инструменты мониторинга Supabase
  - Логирование через Supabase Functions

## 3. Архитектура данных

### 3.1 Основные сущности
- **Пользователи (Users)**
  - Аутентификационные данные
  - Профильная информация
  - Настройки и предпочтения
  - Подписки и платежная информация
  
- **Цели (Goals)**
  - Категория цели
  - Метрики и целевые значения
  - Временные рамки
  - Прогресс и статус
  - Вехи и ключевые точки
  
- **Задачи (Tasks)**
  - Связь с целями
  - Приоритеты
  - Оценка времени и сложности
  - Статусы выполнения
  - История изменений
  
- **Прогресс и метрики (Progress)**
  - Временные ряды метрик
  - Ежедневная активность
  - Исторические данные
  
- **Аналитика (Analytics)**
  - Агрегированные данные
  - Тренды и паттерны
  - Расчетные показатели
  
- **Рекомендации (Recommendations)**
  - История рекомендаций AI
  - Обратная связь по рекомендациям
  
- **Интеграции (Integrations)**
  - Токены и настройки
  - Данные синхронизации

### 3.2 Схема базы данных
Основные таблицы и связи для PostgreSQL:

```
users
  id: uuid (PK)
  email: string (unique)
  password_hash: string
  name: string
  created_at: timestamp
  subscription_tier: enum
  subscription_status: enum
  
goals
  id: uuid (PK)
  user_id: uuid (FK -> users.id)
  title: string
  description: text
  category: enum
  target_value: float
  current_value: float
  start_date: date
  end_date: date
  status: enum
  visibility: enum
  created_at: timestamp
  updated_at: timestamp
  
milestones
  id: uuid (PK)
  goal_id: uuid (FK -> goals.id)
  title: string
  target_value: float
  deadline: date
  status: enum
  
tasks
  id: uuid (PK)
  user_id: uuid (FK -> users.id)
  goal_id: uuid (FK -> goals.id) [nullable]
  title: string
  description: text
  priority: integer
  estimated_time: integer (minutes)
  complexity: enum
  cognitive_load: integer
  status: enum
  scheduled_date: date
  completed_at: timestamp
  created_at: timestamp
  
daily_progress
  id: uuid (PK)
  user_id: uuid (FK -> users.id)
  date: date
  business_load: integer (0-100)
  tasks_completed: integer
  tasks_planned: integer
  reflection_notes: text
  
goal_progress
  id: uuid (PK)
  goal_id: uuid (FK -> goals.id)
  date: date
  value: float
  notes: text
  
recommendations
  id: uuid (PK)
  user_id: uuid (FK -> users.id)
  type: enum
  content: text
  context: json
  created_at: timestamp
  applied: boolean
  feedback: enum
  
integration_connections
  id: uuid (PK)
  user_id: uuid (FK -> users.id)
  service: enum
  access_token: string (encrypted)
  refresh_token: string (encrypted)
  expires_at: timestamp
  metadata: json
  
achievements
  id: uuid (PK)
  user_id: uuid (FK -> users.id)
  type: enum
  title: string
  description: text
  earned_at: timestamp
  
teams (для Business-уровня)
  id: uuid (PK)
  name: string
  owner_id: uuid (FK -> users.id)
  created_at: timestamp
  
team_members (для Business-уровня)
  team_id: uuid (FK -> teams.id)
  user_id: uuid (FK -> users.id)
  role: enum
  joined_at: timestamp
```

### 3.3 Шифрование и безопасность данных
- Row Level Security (RLS) Supabase для контроля доступа на уровне строк
- Шифрование чувствительных данных в БД с использованием pgcrypto
- Шифрование данных в пути (SSL/TLS)
- Хеширование паролей через встроенные механизмы Supabase Auth
- Шифрование токенов интеграций
- Регулярные бэкапы с шифрованием через Supabase
- Политики доступа на уровне таблиц и функций

## 4. Реализация API через Supabase

### 4.1 Аутентификация и управление пользователями
- Встроенные методы Supabase Auth:
  - Регистрация пользователя
  - Аутентификация через email/password
  - Социальные логины (Google, Apple ID, Яндекс)
  - Управление токенами
  - Верификация email
- Пользовательские данные:
  - Доступ через прямые запросы к таблице `users`
  - RLS политики для контроля доступа
  - Обновление профиля через API Supabase
- Управление подписками:
  - Таблица `subscriptions` с привязкой к пользователям
  - Edge Functions для интеграции с платежными сервисами

### 4.2 Управление целями
- Прямое взаимодействие с таблицей `goals` через Supabase API:
  - Получение списка целей с фильтрацией
  - Создание новых целей
  - Получение детальной информации
  - Обновление данных цели
  - Удаление (мягкое/логическое) целей
- Связанные данные:
  - Вехи через таблицу `milestones`
  - Прогресс через таблицу `goal_progress`
- RLS политики:
  - Пользователи видят только свои цели или цели с публичным доступом
  - Редактирование доступно только владельцам
- Реальновременные подписки на изменения целей

### 4.3 Управление задачами
- Операции с таблицей `tasks` через Supabase API:
  - Получение задач с гибкой фильтрацией
  - Задачи на день с AI-приоритизацией
  - Создание новых задач
  - Обновление существующих задач
  - Логическое удаление задач
  - Отметки о выполнении
- Специализированные Stored Procedures в PostgreSQL:
  - Генерация задач на основе целей
  - Приоритизация задач
  - Пересчет статусов
- Edge Functions для сложной логики:
  - AI-генерация задач на основе целей
  - Адаптивное перепланирование

### 4.4 AI-планирование и рекомендации
- Edge Functions для интеграции с OpenAI GPT-4:
  - Создание детализированного плана для достижения цели
  - Адаптивное перепланирование при срыве сроков
  - Генерация персонализированных рекомендаций
- База данных для хранения результатов:
  - Таблица `recommendations` для сохранения истории советов
  - Таблица `ai_plans` для хранения сгенерированных планов
  - Таблица `recommendation_feedback` для обратной связи
- Асинхронная обработка через очереди задач:
  - Фоновая генерация рекомендаций
  - Регулярное обновление советов

### 4.5 Аналитика и отчеты
- PostgreSQL Views для эффективной агрегации данных:
  - Представление `dashboard_metrics` для основных показателей
  - Представление `business_load_data` для расчета бизнес-нагрузки
  - Представление `weekly_report_data` для еженедельных отчетов
- Stored Procedures для комплексных расчетов:
  - Процедуры анализа трендов
  - Расчет прогнозов
- Edge Functions для сложной аналитики:
  - Глубокий анализ паттернов
  - Предсказательные модели

### 4.6 Интеграции
- Supabase Functions для внешних интеграций:
  - Google Calendar через OAuth
  - Email-интеграции через внешние API
  - Будущие интеграции с Slack, Telegram, Notion
- Хранение токенов и настроек:
  - Шифрованная таблица `integration_connections`
  - Временные токены в Supabase Auth
