# Product Requirements Document: Business Connect Telegram Bot

## 1. Обзор продукта

### 1.1 Видение продукта
Business Connect Telegram Bot — это облегченная версия основного приложения Business Connect, предоставляющая быстрый доступ к ключевым функциям через Telegram Web App. Бот позволяет предпринимателям управлять бизнес-целями и задачами в привычном мессенджере, получать уведомления и выполнять быстрые действия.

### 1.2 Ключевые характеристики
- Доступ исключительно через Telegram
- Полностью функциональный web app интерфейс на React Native
- Авторизация через Telegram ID
- Push-уведомления с inline кнопками для быстрых действий
- Интеграция с основным бэкендом Business Connect на Supabase

### 1.3 Ценностные предложения
- Мгновенный доступ к бизнес-целям без установки отдельного приложения
- Удобные уведомления в привычном мессенджере
- Быстрые действия прямо из уведомлений
- Упрощенный интерфейс для ежедневного использования
- Сохранение контекста работы в одном приложении (Telegram)

## 2. Целевая аудитория

### 2.1 Основные пользователи
- Существующие пользователи Business Connect, предпочитающие Telegram
- Предприниматели, активно использующие Telegram для работы
- Пользователи, которым нужен быстрый доступ к основным функциям
- Индивидуальные предприниматели и фрилансеры

### 2.2 Сценарии использования
- Быстрый просмотр задач на день во время коммутирования
- Отметка выполнения задач "на ходу"
- Получение напоминаний о важных дедлайнах
- Просмотр прогресса по целям в любой момент
- Добавление новых задач через мобильное устройство

## 3. Функциональные требования

### 3.1 Основные функции
1. **Просмотр дашборда**
   - Отображение текущего Business Load
   - Список активных целей с прогрессом
   - Задачи на сегодня
   - Быстрая навигация по разделам

2. **Управление целями**
   - Создание новых целей
   - Просмотр детальной информации по целям
   - Отслеживание прогресса
   - Редактирование параметров целей

3. **Управление задачами**
   - Просмотр задач на день
   - Отметка выполнения задач
   - Создание новых задач
   - Привязка задач к целям

4. **Отчетность**
   - Еженедельные отчеты о прогрессе
   - Статистика выполнения задач
   - Тренды Business Load

### 3.2 Категории целей
- Финансы
- Маркетинг
- Продукт
- Продажи
- Юридические
- Государство
- Прочее

### 3.3 Система уведомлений
1. **Типы уведомлений:**
   - Утреннее напоминание о задачах на день
   - Напоминания о дедлайнах
   - Еженедельный отчет о прогрессе
   - Предупреждения о высоком Business Load
   - Достижение вех в целях

2. **Inline кнопки в уведомлениях:**
   - ✅ Отметить выполненной (для задач)
   - 📊 Открыть отчет
   - 📱 Открыть приложение
   - ⏰ Отложить напоминание

3. **Настройки уведомлений:**
   - Выбор времени получения утренних уведомлений
   - Включение/отключение типов уведомлений
   - Настройка частоты напоминаний

## 4. Технические требования

### 4.1 Архитектура
- **Telegram Bot:** Node.js сервер для обработки команд и отправки уведомлений
- **Web App:** React Native приложение, открываемое в Telegram WebView
- **Backend:** Интеграция с существующим Supabase бэкендом
- **Авторизация:** Через Telegram ID с привязкой к существующему аккаунту

### 4.2 Технический стек
- **Bot Server:**
  - Node.js/TypeScript
  - Telegram Bot API (node-telegram-bot-api)
  - Express.js для webhook'ов
  - Интеграция с Supabase для данных

- **Web App:**
  - React Native Web
  - Telegram Web App SDK
  - Tailwind CSS для стилей
  - React Navigation для маршрутизации
  - Axios для API запросов

### 4.3 Интеграция с бэкендом
- Использование существующих Supabase API
- JWT токены для аутентификации
- Realtime подписки для обновлений
- Кэширование данных для оффлайн доступа

### 4.4 Безопасность
- Валидация Telegram ID при каждом запросе
- Шифрование чувствительных данных
- Безопасная передача токенов
- Ограничение доступа только через Telegram

## 5. Пользовательский интерфейс

### 5.1 Основные экраны
1. **Дашборд**
   - Business Load индикатор (визуальная шкала)
   - Карточки целей с прогрессом
   - Секция "Задачи на день"
   - Кнопка добавления новой цели

2. **Создание/редактирование цели**
   - Поле названия цели
   - Выпадающий список категорий
   - Выбор дедлайна (календарь)
   - Кнопка сохранения

3. **Список задач**
   - Задачи сгруппированные по целям
   - Чекбоксы для выполнения
   - Индикаторы приоритета
   - Быстрое добавление задачи

4. **Еженедельный отчет**
   - График Business Load за неделю
   - Статистика выполненных задач
   - Прогресс по каждой цели
   - Рекомендации на следующую неделю

### 5.2 Дизайн принципы
- Минималистичный интерфейс
- Темная тема по умолчанию
- Крупные элементы управления для мобильных устройств
- Быстрая навигация между разделами
- Единообразие с основным приложением Business Connect

### 5.3 Навигация
- Нижняя панель навигации с основными разделами
- Свайпы для быстрого переключения между экранами
- Кнопка "Назад" для глубокой навигации
- Deep linking для открытия конкретных разделов из уведомлений

## 6. Workflow пользователя

### 6.1 Первичная настройка
1. Пользователь добавляет бота в Telegram
2. Нажимает кнопку "Старт"
3. Бот проверяет наличие аккаунта Business Connect
4. Если аккаунт есть - привязка через Telegram ID
5. Если нет - предложение создать через основное приложение
6. Настройка времени уведомлений
7. Открытие web app

### 6.2 Ежедневное использование
1. Утреннее уведомление с задачами на день
2. Клик на уведомление открывает web app
3. Просмотр Business Load и задач
4. Выполнение задач с отметкой в приложении
5. Добавление новых задач при необходимости
6. Вечернее уведомление о завершении дня (опционально)

### 6.3 Еженедельный цикл
1. Еженедельный отчет в воскресенье вечером
2. Анализ прогресса по целям
3. Корректировка планов на следующую неделю
4. Установка новых задач

## 7. Интеграция уведомлений

### 7.1 Триггеры уведомлений
- Cron-задачи для регулярных уведомлений
- Webhook'и от Supabase для событийных уведомлений
- Таймеры для напоминаний о дедлайнах

### 7.2 Обработка inline кнопок
- Callback Query Handler для обработки нажатий
- Прямое обновление в базе данных для простых действий
- Открытие web app для сложных действий

### 7.3 Персонализация
- Учет часового пояса пользователя
- Настраиваемое время уведомлений
- Персонализированный контент на основе данных пользователя

## 8. Примеры кода интеграции

### 8.1 Инициализация Telegram бота
```javascript
// bot.js
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

// Инициализация бота
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { 
  webHook: true 
});

// Инициализация Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Настройка webhook
const app = express();
app.use(express.json());

app.post(`/bot${process.env.TELEGRAM_BOT_TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Команда /start
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  // Проверка существующего пользователя
  const { data: user } = await supabase
    .from('users')
    .select('*')
    .eq('telegram_id', userId)
    .single();
  
  if (user) {
    // Отправка web app кнопки
    await bot.sendMessage(chatId, 'Добро пожаловать обратно!', {
      reply_markup: {
        inline_keyboard: [[
          {
            text: 'Открыть Business Connect',
            web_app: { url: process.env.WEB_APP_URL }
          }
        ]]
      }
    });
  } else {
    // Регистрация нового пользователя
    await bot.sendMessage(chatId, 
      'Для использования бота необходим аккаунт Business Connect'
    );
  }
});
```

### 8.2 Web App инициализация
```javascript
// App.js (React Native Web)
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const tg = window.Telegram.WebApp;
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Инициализация Telegram Web App
    tg.ready();
    tg.expand();
    
    // Получение данных пользователя
    authenticateUser();
  }, []);

  const authenticateUser = async () => {
    const telegramId = tg.initDataUnsafe?.user?.id;
    
    if (!telegramId) {
      tg.close();
      return;
    }

    // Авторизация через Telegram ID
    const { data: userData } = await supabase
      .from('users')
      .select('*')
      .eq('telegram_id', telegramId)
      .single();

    if (userData) {
      setUser(userData);
      // Инициализация JWT токена
      const { data: { session } } = await supabase.auth.signInWithPassword({
        email: userData.email,
        password: userData.telegram_id // временное решение
      });
    }
    
    setLoading(false);
  };

  if (loading) return <div>Загрузка...</div>;
  if (!user) return <div>Пользователь не найден</div>;

  return <Dashboard user={user} />;
}
```

### 8.3 Отправка уведомлений
```javascript
// notifications.js
const schedule = require('node-schedule');

// Утренние уведомления
const sendMorningNotifications = async () => {
  // Получение пользователей с активными задачами
  const { data: users } = await supabase
    .from('users')
    .select(`
      id,
      telegram_id,
      notification_time,
      tasks(
        id,
        title,
        scheduled_date,
        status
      )
    `)
    .eq('tasks.scheduled_date', new Date().toISOString().split('T')[0])
    .eq('tasks.status', 'pending');

  for (const user of users) {
    if (user.tasks.length > 0) {
      const taskList = user.tasks
        .map((task, idx) => `${idx + 1}. ${task.title}`)
        .join('\n');

      await bot.sendMessage(user.telegram_id, 
        `🌅 Доброе утро!\n\nВаши задачи на сегодня:\n${taskList}`,
        {
          reply_markup: {
            inline_keyboard: [
              ...user.tasks.map(task => [{
                text: `✅ Выполнить: ${task.title.substring(0, 20)}...`,
                callback_data: `complete_task_${task.id}`
              }]),
              [{
                text: '📱 Открыть приложение',
                web_app: { url: process.env.WEB_APP_URL }
              }]
            ]
          }
        }
      );
    }
  }
};

// Обработка inline кнопок
bot.on('callback_query', async (query) => {
  const action = query.data;
  const userId = query.from.id;

  if (action.startsWith('complete_task_')) {
    const taskId = action.replace('complete_task_', '');
    
    // Обновление статуса задачи
    await supabase
      .from('tasks')
      .update({ 
        status: 'completed',
        completed_at: new Date()
      })
      .eq('id', taskId);

    await bot.answerCallbackQuery(query.id, {
      text: 'Задача отмечена как выполненная! ✅'
    });
    
    // Обновление сообщения
    await bot.editMessageReplyMarkup(
      { inline_keyboard: [] },
      {
        chat_id: query.message.chat.id,
        message_id: query.message.message_id
      }
    );
  }
});

// Планирование уведомлений
schedule.scheduleJob('0 9 * * *', sendMorningNotifications);
```

### 8.4 React Native компонент для дашборда
```jsx
// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { supabase } from './supabaseClient';

const Dashboard = ({ user }) => {
  const [businessLoad, setBusinessLoad] = useState(0);
  const [goals, setGoals] = useState([]);
  const [todayTasks, setTodayTasks] = useState([]);

  useEffect(() => {
    loadDashboardData();
    
    // Подписка на изменения в реальном времени
    const subscription = supabase
      .channel('dashboard-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'tasks' },
        handleRealtimeUpdate
      )
      .subscribe();

    return () => subscription.unsubscribe();
  }, []);

  const loadDashboardData = async () => {
    // Загрузка Business Load
    const { data: progressData } = await supabase
      .from('daily_progress')
      .select('business_load')
      .eq('user_id', user.id)
      .eq('date', new Date().toISOString().split('T')[0])
      .single();

    if (progressData) {
      setBusinessLoad(progressData.business_load);
    }

    // Загрузка целей
    const { data: goalsData } = await supabase
      .from('goals')
      .select('*')
      .eq('user_id', user.id)
      .eq('status', 'active');

    setGoals(goalsData || []);

    // Загрузка задач на сегодня
    const { data: tasksData } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', user.id)
      .eq('scheduled_date', new Date().toISOString().split('T')[0])
      .order('priority', { ascending: false });

    setTodayTasks(tasksData || []);
  };

  const handleRealtimeUpdate = (payload) => {
    if (payload.eventType === 'UPDATE' && payload.new.status === 'completed') {
      setTodayTasks(prev => 
        prev.map(task => 
          task.id === payload.new.id 
            ? { ...task, status: 'completed' }
            : task
        )
      );
    }
  };

  const completeTask = async (taskId) => {
    await supabase
      .from('tasks')
      .update({ 
        status: 'completed',
        completed_at: new Date()
      })
      .eq('id', taskId);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Business Load индикатор */}
      <View style={styles.businessLoadSection}>
        <Text style={styles.sectionTitle}>Бизнес-нагрузка</Text>
        <View style={styles.loadBar}>
          <View style={[
            styles.loadFill,
            { 
              width: `${businessLoad}%`,
              backgroundColor: businessLoad > 70 ? '#ff6b6b' : '#4ecdc4'
            }
          ]} />
        </View>
        <Text style={styles.loadText}>{businessLoad}%</Text>
      </View>

      {/* Цели */}
      <View style={styles.goalsSection}>
        <Text style={styles.sectionTitle}>Ваши цели</Text>
        {goals.map(goal => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('CreateGoal')}
        >
          <Text style={styles.addButtonText}>+ Новая цель</Text>
        </TouchableOpacity>
      </View>

      {/* Задачи на день */}
      <View style={styles.tasksSection}>
        <Text style={styles.sectionTitle}>Задачи на день</Text>
        {todayTasks.length === 0 ? (
          <Text style={styles.noTasksText}>Нет задач на сегодня</Text>
        ) : (
          todayTasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task}
              onComplete={() => completeTask(task.id)}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
};
```

### 8.5 Webhook для синхронизации данных
```javascript
// webhooks.js
app.post('/webhook/task-created', async (req, res) => {
  const { record } = req.body;
  
  // Получение пользователя
  const { data: user } = await supabase
    .from('users')
    .select('telegram_id, notification_settings')
    .eq('id', record.user_id)
    .single();

  if (user?.telegram_id && user.notification_settings?.instant_notifications) {
    // Отправка мгновенного уведомления
    await bot.sendMessage(user.telegram_id, 
      `📝 Создана новая задача: ${record.title}`,
      {
        reply_markup: {
          inline_keyboard: [[
            {
              text: '📱 Посмотреть',
              web_app: { 
                url: `${process.env.WEB_APP_URL}/tasks/${record.id}` 
              }
            }
          ]]
        }
      }
    );
  }
  
  res.sendStatus(200);
});
```

## 9. Схемы взаимодействия компонентов

### 9.1 Общая архитектура системы
```
┌─────────────────────────────────────────────────────────────────┐
│                         TELEGRAM CLIENT                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌──────────────┐        ┌──────────────────────────┐          │
│   │  Telegram    │        │   Telegram Web App       │          │
│   │  Bot Chat    │◄──────►│   (React Native Web)     │          │
│   └──────────────┘        └──────────────────────────┘          │
│         ▲                           ▲                            │
│         │                           │                            │
└─────────┼───────────────────────────┼────────────────────────────┘
          │                           │
          ▼                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                         BOT SERVER                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌──────────────┐        ┌──────────────────────────┐          │
│   │   Bot API    │        │    Express Server        │          │
│   │   Handler    │        │    (Webhooks)            │          │
│   └──────────────┘        └──────────────────────────┘          │
│         ▲                           ▲                            │
│         │                           │                            │
└─────────┼───────────────────────────┼────────────────────────────┘
          │                           │
          ▼                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                         SUPABASE                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌──────────────┐    ┌──────────────┐    ┌────────────────┐    │
│   │  PostgreSQL  │    │  Auth        │    │  Storage       │    │
│   │  Database    │    │  Service     │    │  Service       │    │
│   └──────────────┘    └──────────────┘    └────────────────┘    │
│                                                                  │
│   ┌──────────────┐    ┌──────────────┐    ┌────────────────┐    │
│   │  Realtime    │    │  Edge        │    │  Row Level     │    │
│   │  Engine      │    │  Functions   │    │  Security      │    │
│   └──────────────┘    └──────────────┘    └────────────────┘    │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### 9.2 Поток авторизации
```
┌─────────┐     ┌──────────┐     ┌──────────┐     ┌───────────┐
│  User   │     │ Telegram │     │   Bot    │     │ Supabase  │
│         │     │   Bot    │     │  Server  │     │           │
└────┬────┘     └────┬─────┘     └────┬─────┘     └─────┬─────┘
     │               │                │                  │
     │   /start      │                │                  │
     ├──────────────►│                │                  │
     │               │   Webhook      │                  │
     │               ├───────────────►│                  │
     │               │                │  Check User      │
     │               │                ├─────────────────►│
     │               │                │                  │
     │               │                │  User Data       │
     │               │                │◄─────────────────┤
     │               │                │                  │
     │           Send WebApp Button   │                  │
     │◄──────────────┤◄───────────────┤                  │
     │               │                │                  │
     │  Open WebApp  │                │                  │
     ├──────────────►│                │                  │
     │               │                │                  │
     │          WebApp loads with     │                  │
     │           Telegram ID          │                  │
     │◄──────────────┤                │                  │
     │               │                │                  │
```

### 9.3 Уведомления и взаимодействие
```
┌─────────────┐     ┌──────────┐     ┌──────────┐     ┌───────────┐
│   Cron/     │     │   Bot    │     │ Telegram │     │   User    │
│  Scheduler  │     │  Server  │     │   API    │     │           │
└──────┬──────┘     └────┬─────┘     └────┬─────┘     └─────┬─────┘
       │                 │                │                  │
       │  Trigger        │                │                  │
       ├────────────────►│                │                  │
       │                 │  Get Users     │                  │
       │                 ├──────────────► │                  │
       │                 │  & Tasks       │ (Supabase)       │
       │                 │◄──────────────┤                  │
       │                 │                │                  │
       │                 │  Send Message  │                  │
       │                 ├───────────────►│                  │
       │                 │                │  Notification    │
       │                 │                ├─────────────────►│
       │                 │                │                  │
       │                 │                │  Click Action    │
       │                 │                │◄─────────────────┤
       │                 │                │                  │
       │                 │  Callback      │                  │
       │                 │◄───────────────┤                  │
       │                 │                │                  │
       │                 │  Update Task   │                  │
       │                 ├──────────────► │                  │
       │                 │                │ (Supabase)       │
       │                 │                │                  │
       │                 │  Answer Query  │                  │
       │                 ├───────────────►│                  │
       │                 │                │  Success ✅      │
       │                 │                ├─────────────────►│
       │                 │                │                  │
```

### 9.4 Realtime синхронизация
```
┌──────────────┐     ┌───────────┐     ┌──────────┐     ┌───────────┐
│   WebApp     │     │ Supabase  │     │   Bot    │     │ Telegram  │
│  (User A)    │     │ Realtime  │     │  Server  │     │  (User A) │
└──────┬───────┘     └─────┬─────┘     └────┬─────┘     └─────┬─────┘
       │                   │                │                  │
       │  Complete Task    │                │                  │
       ├──────────────────►│                │                  │
       │                   │  Broadcast     │                  │
       │                   ├───────────────►│                  │
       │                   │                │  Send Update     │
       │                   │                ├─────────────────►│
       │  Update UI        │                │                  │
       │◄──────────────────┤                │                  │
       │                   │                │                  │
```

## 10. Развертывание и инфраструктура

### 8.1 Хостинг
- Bot Server: VPS или облачный хостинг (Heroku, Railway)
- Web App: Статический хостинг (Vercel, Netlify)
- Использование существующей Supabase инфраструктуры

### 8.2 CI/CD
- GitHub Actions для автоматического развертывания
- Тестирование перед деплоем
- Откат при ошибках

### 8.3 Мониторинг
- Логирование ошибок
- Метрики использования
- Мониторинг производительности

## 9. MVP и дальнейшее развитие

### 9.1 MVP функции
1. Базовая авторизация через Telegram ID
2. Просмотр дашборда с целями и задачами
3. Создание и управление целями
4. Управление задачами на день
5. Утренние уведомления о задачах
6. Еженедельные отчеты

### 9.2 Версия 1.1
1. Расширенная система уведомлений
2. Inline кнопки для быстрых действий
3. Настройки персонализации
4. Улучшенная визуализация прогресса

### 9.3 Версия 2.0
1. Голосовые команды для создания задач
2. Интеграция с Telegram платежами для Premium
3. Экспорт отчетов
4. Групповые челленджи через Telegram группы

## 10. Метрики успеха

### 10.1 Пользовательские метрики
- Количество активных пользователей (DAU/MAU)
- Конверсия из Telegram в основное приложение
- Процент выполнения задач
- Частота использования web app

### 10.2 Технические метрики
- Время отклика бота
- Скорость загрузки web app
- Процент успешных уведомлений
- Количество ошибок

### 10.3 Бизнес-метрики
- Влияние на retention в основном приложении
- Увеличение вовлеченности пользователей
- Конверсия в Premium подписку

## 11. Риски и ограничения

### 11.1 Технические риски
- Ограничения Telegram Web App API
- Производительность React Native Web
- Зависимость от стабильности Telegram

### 11.2 Пользовательские риски
- Сложность миграции существующих пользователей
- Ограниченный функционал по сравнению с основным приложением
- Возможные проблемы с навигацией в WebView

### 11.3 Стратегии митигации
- Тщательное тестирование на разных устройствах
- Постепенный rollout функций
- Сбор обратной связи и быстрая итерация
- Fallback на команды бота при проблемах с web app

## 12. Заключение

Business Connect Telegram Bot предоставляет удобный способ управления бизнес-целями прямо из Telegram. Комбинация push-уведомлений и полноценного web app интерфейса создает оптимальный баланс между простотой и функциональностью, позволяя пользователям оставаться продуктивными без необходимости устанавливать дополнительные приложения.