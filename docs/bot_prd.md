# Product Requirements Document: Телеграм-бот Business Connect

## 1. Обзор и видение продукта

### 1.1 Описание продукта и его цель
Business Connect Telegram Bot — это более доступная версия основного приложения Business Connect, предоставляющая ключевые функции через Telegram. Бот сочетает преимущества мессенджера (простота использования, доступность) с уникальными особенностями Business Connect (AI-планирование, метрика "Business Load", геймификация).

Основная цель бота — помочь предпринимателям систематически достигать бизнес-целей и предотвращать выгорание через удобный интерфейс Telegram, который интегрируется в их повседневную деятельность.

### 1.2 Ключевые ценностные предложения
- Быстрый доступ к бизнес-целям и задачам прямо из Telegram
- AI-ассистент для планирования и приоритизации задач
- Визуализация прогресса и "Business Load" в Telegram
- Умные уведомления с возможностью быстрого действия
- Интеграция с основным приложением для более глубокого анализа
- Геймификация через достижения и челленджи

### 1.3 Отличия от конкурентов
- В отличие от iTasker, UTasksBot и taskibot, фокус не просто на задачах, а на достижении бизнес-целей
- AI-планирование и приоритизация задач (отсутствует у конкурентов)
- Метрика "Business Load" для предотвращения выгорания (уникальная функция)
- Более глубокая аналитика через интеграцию с основным приложением
- Система мотивации через геймификацию бизнес-процессов

## 2. Целевая аудитория

### 2.1 Основные пользователи
- Предприниматели-одиночки, активно использующие Telegram
- Основатели стартапов (команды до 20 человек)
- Фрилансеры и консультанты
- Существующие пользователи Business Connect, предпочитающие Telegram

### 2.2 Сценарии использования
- Быстрое планирование и отслеживание задач на день
- Получение AI-рекомендаций по приоритизации задач 
- Мониторинг прогресса по бизнес-целям "на ходу"
- Получение уведомлений и быстрое реагирование через inline-кнопки
- Мгновенная фиксация новых идей и задач прямо из чатов
- Еженедельный анализ прогресса с рекомендациями

### 2.3 Пользовательские боли, которые решает бот
- Информационная перегрузка и отсутствие фокуса
- Несистематичный подход к достижению бизнес-целей
- Постоянное переключение между приложениями
- Риск выгорания из-за неконтролируемой нагрузки
- Потеря важных идей и задач из-за неудобства их фиксации
- Отсутствие мотивации для регулярного отслеживания прогресса

## 3. Функциональные требования

### 3.1 Основные функции

#### 3.1.1 Управление бизнес-целями
- Создание и отслеживание бизнес-целей с метриками
- Разбивка целей на вехи и задачи с помощью AI
- Визуализация прогресса в стиле прогресс-баров
- Установка дедлайнов и получение уведомлений

#### 3.1.2 Умное управление задачами
- AI-приоритизация задач на день (топ-3 задачи)
- Быстрое создание задач через пересылку сообщений
- Отметка выполнения задач через inline-кнопки
- Адаптивное перепланирование при срыве сроков
- Связь задач с бизнес-целями

#### 3.1.3 Индикатор "Business Load"
- Визуализация текущей нагрузки в стиле батареи
- Предупреждения о риске выгорания
- Рекомендации по балансировке нагрузки
- Еженедельный трекинг динамики нагрузки

#### 3.1.4 Система мотивации и геймификации
- Достижения за выполнение целей и задач
- Серии и "цепочки" выполненных задач
- Челленджи для развития бизнеса
- Сравнение с другими предпринимателями (опционально)

#### 3.1.5 Умные уведомления
- Утренний план на день с приоритетными задачами
- Напоминания о приближающихся дедлайнах
- Уведомления о высоком "Business Load"
- Еженедельные отчеты о прогрессе
- Мотивационные сообщения при достижении целей

#### 3.1.6 Telegram Mini App
- Полноценный интерфейс для более детального анализа
- Расширенные визуализации прогресса
- Более глубокая работа с целями и задачами
- Доступ к полной аналитике

### 3.2 Категории целей
- Финансовые (выручка, прибыль, ROI)
- Маркетинговые (лиды, конверсии, охват)
- Продуктовые (разработка, запуск, метрики)
- Продажи (объем, сделки, клиенты)
- Операционные (процессы, эффективность)
- Личные (саморазвитие, здоровье, баланс)

### 3.3 Система уведомлений

#### 3.3.1 Типы уведомлений
- **Ежедневные уведомления**:
  - Утренний план дня с приоритетными задачами
  - Напоминания о невыполненных задачах в течение дня
  - Вечерний отчет о результатах дня
  
- **Уведомления о событиях**:
  - Приближающиеся дедлайны целей и вех (за 3, 2, 1 день)
  - Достижение или отставание от целевых показателей
  - Высокий уровень "Business Load" (риск выгорания)
  - Получение достижений и наград

- **Еженедельные уведомления**:
  - Отчет о прогрессе за неделю
  - AI-рекомендации по планированию следующей недели
  - Сравнение с предыдущими периодами
  - Анализ тенденций "Business Load"

#### 3.3.2 Формат уведомлений
- Краткий текст с ключевой информацией
- Emoji для визуального выделения типа сообщения
- Inline-кнопки для быстрых действий
- Мини-графики и визуализации (где применимо)
- Ссылки на более подробную информацию в Mini App

#### 3.3.3 Настройки уведомлений
- Выбор времени для утренних и вечерних уведомлений
- Настройка частоты напоминаний
- Возможность отключения определенных типов уведомлений
- Настройка "не беспокоить" в выбранные периоды
- Персонализация формата уведомлений

#### 3.3.4 Интерактивные действия в уведомлениях
- Отметка выполнения задач прямо из уведомления
- Перенос задач на другое время
- Запрос дополнительной информации или рекомендаций
- Быстрый переход к соответствующему разделу в Mini App
- Шеринг достижений в социальные сети

## 4. Технические требования

### 4.1 Архитектура
- **Bot Server**: Node.js/TypeScript сервер для обработки Telegram API запросов
- **Telegram Mini App**: Интерактивный веб-интерфейс, встроенный в Telegram
- **Интеграция с бэкендом**: Прямое взаимодействие с Supabase API основного приложения
- **Realtime обновления**: Подписки на изменения данных через Supabase Realtime
- **Асинхронные задачи**: Обработка AI-запросов и генерация рекомендаций в фоновом режиме

### 4.2 Технический стек
- **Бот-фреймворк**: Telegraf.js (Node.js)
- **Telegram Mini App**: React, Tailwind CSS
- **Серверная часть**: Node.js, Express, TypeScript
- **База данных**: Использование Supabase (PostgreSQL) основного приложения
- **AI-интеграция**: OpenAI GPT-4 API через Supabase Edge Functions
- **Кэширование**: Redis для оптимизации частых запросов
- **Деплой**: Docker контейнеры на VPS/облачном хостинге

### 4.3 Интеграция с бэкендом
- Прямой доступ к базе данных Supabase с соблюдением политик безопасности
- Использование существующих Edge Functions для AI-функциональности
- Единая система аутентификации через Supabase Auth
- Обмен данными через защищенные API-вызовы
- Realtime подписки на изменения данных

### 4.4 Безопасность
- Аутентификация пользователей через Telegram ID с подтверждением
- Шифрование чувствительных данных
- Использование JWT токенов для API запросов
- Защита от инъекций и других типов атак
- Разграничение доступа через Row Level Security (RLS) в Supabase

## 5. Пользовательский интерфейс и опыт

### 5.1 Основные экраны и интерфейсы
1. **Чат-интерфейс бота**:
   - Команды и кнопки для быстрого доступа к функциям
   - Inline-кнопки для действий с задачами
   - Интерактивные карточки с информацией о прогрессе
   - Мини-графики и визуализации для метрик
   
2. **Telegram Mini App**:
   - Дашборд с ключевыми показателями
   - Интерфейс управления целями и задачами
   - Подробные графики прогресса и нагрузки
   - Еженедельная аналитика и отчеты
   - Настройки уведомлений и интеграций

### 5.2 Принципы дизайна
- Минималистичный и чистый интерфейс
- Акцент на ключевой информации без перегрузки
- Интуитивное взаимодействие через кнопки и команды
- Визуализация данных для простого восприятия
- Консистентность с дизайном основного приложения
- Адаптация к ограничениям Telegram API

### 5.3 Навигация
- Главное меню с основными разделами
- Inline-кнопки для быстрых действий
- Deep linking для быстрого доступа к конкретным разделам
- Интеграция с Telegram Mini App для расширенной функциональности
- Кнопка "Назад" для навигации между разделами

## 6. Рабочий процесс пользователя

### 6.1 Онбординг и настройка
1. Пользователь находит бота в Telegram и отправляет команду /start
2. Бот приветствует пользователя и предлагает регистрацию/авторизацию
3. Если у пользователя уже есть аккаунт в Business Connect, он связывает его с Telegram
4. Если нет, пользователь проходит регистрацию через Mini App
5. Бот проводит мини-онбординг, объясняя ключевые функции
6. Пользователь настраивает предпочтения по уведомлениям
7. Предлагается создать первую бизнес-цель через интерактивный процесс

### 6.2 Ежедневное взаимодействие
1. Утром пользователь получает сообщение с планом на день
2. Приоритетные задачи выделены с оценкой времени и сложности
3. В течение дня пользователь отмечает выполнение задач через inline-кнопки
4. При необходимости пользователь добавляет новые задачи через команды или пересылку сообщений
5. При выполнении значимых задач бот дает позитивную обратную связь
6. При высоком "Business Load" бот предлагает корректировки плана
7. Вечером пользователь получает краткий отчет о результатах дня

### 6.3 Еженедельный цикл
1. В конце недели бот отправляет еженедельный отчет о прогрессе
2. Визуализация достижений и прогресса к целям
3. Анализ трендов "Business Load" за неделю
4. AI-рекомендации по корректировке планов на следующую неделю
5. Предложение просмотреть подробную аналитику в Mini App
6. Планирование ключевых задач на следующую неделю

## 7. Интеграция с основным приложением

### 7.1 Синхронизация данных
- Единая база данных для бота и основного приложения (Supabase)
- Мгновенная синхронизация изменений через Realtime API
- Кэширование данных для оптимизации производительности
- Разрешение конфликтов при одновременном редактировании

### 7.2 Обмен уведомлениями
- Централизованная система уведомлений с выбором канала доставки
- Приоритетные уведомления отправляются в Telegram
- Важные события из основного приложения передаются в бот
- Статус прочтения и взаимодействия синхронизируется между платформами

### 7.3 Переходы между интерфейсами
- Deep linking для перехода из бота в соответствующие разделы основного приложения
- Кнопки для перехода между ботом и Telegram Mini App
- Возможность продолжить работу с того же места при переключении между интерфейсами
- Синхронизация состояния пользовательского интерфейса

## 8. Разделение функций между уровнями подписки

### 8.1 Free-уровень
- Основные команды бота для управления задачами
- Ограниченное количество активных целей (1-2)
- Базовые уведомления о задачах
- Простая визуализация прогресса
- Базовые функции Telegram Mini App
- Ручное создание задач без AI-рекомендаций

### 8.2 Premium-уровень (Solo)
- Полный доступ к функциям бота и Mini App
- Неограниченное количество целей и задач
- AI-планирование и приоритизация
- Метрика "Business Load" с рекомендациями
- Расширенная аналитика и отчеты
- Система геймификации и достижений
- Персонализированные уведомления и напоминания
- Интеграция с внешними календарями
- Еженедельные AI-рекомендации

### 8.3 Business-уровень
- Все функции Premium-уровня
- Командная работа с общими целями
- Делегирование задач участникам команды
- Аналитика эффективности команды
- Командные челленджи и достижения
- Расширенные интеграции с бизнес-инструментами
- Корпоративный брендинг в интерфейсе
- Приоритетная поддержка

## 9. Фазы разработки

### 9.1 MVP (Фаза 1)
- Базовый функционал бота (управление задачами, уведомления)
- Простая интеграция с базой данных основного приложения
- Основные команды и inline-кнопки
- Простая визуализация прогресса и "Business Load"
- Базовые уведомления о задачах и целях
- Минимальный функционал Telegram Mini App
- Только русский язык

### 9.2 Версия 1.1
- Расширенная интеграция с AI для планирования и рекомендаций
- Усовершенствованная система уведомлений
- Полный функционал Telegram Mini App
- Геймификация и система достижений
- Еженедельные отчеты с визуализацией
- Интеграция с Google Calendar

### 9.3 Версия 2.0
- Полная командная функциональность (Business-уровень)
- Расширенные интеграции с бизнес-инструментами
- Голосовой ввод задач и голосовые отчеты
- Персонализированный AI-коучинг для бизнеса
- Расширенная аналитика эффективности
- Мультиязычность (английский и другие языки)
- API для внешних интеграций

## 10. Риски и ограничения

### 10.1 Технические риски
- Ограничения Telegram Bot API по интерактивности интерфейса
- Возможные задержки при интенсивном использовании AI-функций
- Синхронизация данных между ботом и основным приложением
- Ограничения производительности при масштабировании

### 10.2 Пользовательские риски
- Сложность баланса между простотой и функциональностью
- Потенциальные проблемы с удержанием пользователей
- Неочевидность преимуществ перед обычными менеджерами задач
- Необходимость изменения привычного рабочего процесса

### 10.3 Стратегии митигации
- Поэтапное внедрение функциональности с фокусом на UX
- Активный сбор обратной связи от ранних пользователей
- A/B тестирование различных вариантов интерфейса
- Оптимизация AI-запросов для снижения задержек
- Кэширование данных для улучшения производительности
- Режим работы офлайн с последующей синхронизацией
- Использование Telegram Mini App для расширенной функциональности
- Прозрачное объяснение преимуществ через обучающие материалы

## 11. Примеры кода и интеграции

### 11.1 Инициализация Telegram бота

```javascript
// Инициализация бота
const { Telegraf, Scenes, session } = require('telegraf');
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

// Создание инстанса бота
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { 
  webHook: { 
    domain: process.env.WEBHOOK_DOMAIN,
    port: process.env.PORT 
  } 
});

// Инициализация Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Настройка middleware
bot.use(session());

// Настройка Express сервера для вебхуков
const app = express();
app.use(express.json());

// Обработка вебхуков от Telegram
app.post(`/bot${process.env.TELEGRAM_BOT_TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Запуск приложения
app.listen(process.env.PORT || 3000);
```

### 11.2 Обработка команды /start

```javascript
// Обработка команды /start
bot.command('start', async (ctx) => {
  const telegramId = ctx.from.id;
  
  // Проверка существования пользователя
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('telegram_id', telegramId)
    .single();

  if (user) {
    // Существующий пользователь
    await ctx.reply(`Добро пожаловать обратно, ${user.name}! Чем я могу помочь сегодня?`, {
      reply_markup: {
        keyboard: [
          [{ text: '📊 Дашборд' }, { text: '✅ Задачи на сегодня' }],
          [{ text: '🎯 Мои цели' }, { text: '📋 Новая задача' }]
        ],
        resize_keyboard: true
      }
    });
  } else {
    // Новый пользователь
    await ctx.reply('Добро пожаловать в Business Connect! Для начала работы необходимо создать аккаунт или связать существующий.', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Создать аккаунт', web_app: { url: `${process.env.WEBAPP_URL}/register` } }],
          [{ text: 'У меня уже есть аккаунт', callback_data: 'login' }]
        ]
      }
    });
  }
});
```

### 11.3 Отображение задач на день

```javascript
// Обработка команды получения задач на день
bot.command('tasks', async (ctx) => {
  const telegramId = ctx.from.id;
  const today = new Date().toISOString().split('T')[0];
  
  // Получение задач пользователя на сегодня
  const { data: tasks, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', getUserIdByTelegramId(telegramId))
    .eq('scheduled_date', today)
    .order('priority', { ascending: false });
  
  if (error) {
    return ctx.reply('Произошла ошибка при получении задач. Пожалуйста, попробуйте позже.');
  }
  
  if (!tasks || tasks.length === 0) {
    return ctx.reply('На сегодня нет запланированных задач. Чтобы добавить задачу, используйте команду /newtask или кнопку "Новая задача".');
  }
  
  // Формирование сообщения с задачами
  let message = '📋 *Ваши задачи на сегодня:*\n\n';
  
  // Выделение приоритетных задач
  const priorityTasks = tasks.filter(t => t.priority === 'high').slice(0, 3);
  if (priorityTasks.length > 0) {
    message += '*🔝 Приоритетные задачи:*\n';
    priorityTasks.forEach((task, i) => {
      message += `${i+1}. ${task.status === 'completed' ? '✅' : '⬜'} ${task.title}\n`;
    });
    message += '\n';
  }
  
  // Остальные задачи
  const otherTasks = tasks.filter(t => !priorityTasks.includes(t));
  if (otherTasks.length > 0) {
    message += '*📌 Остальные задачи:*\n';
    otherTasks.forEach((task, i) => {
      message += `${i+1}. ${task.status === 'completed' ? '✅' : '⬜'} ${task.title}\n`;
    });
  }
  
  // Создание inline-кнопок для управления задачами
  const inlineKeyboard = tasks.map(task => [
    {
      text: `${task.status === 'completed' ? '✅' : '☑️'} ${task.title.substring(0, 30)}${task.title.length > 30 ? '...' : ''}`,
      callback_data: `toggle_task_${task.id}`
    }
  ]);
  
  // Добавление кнопки для просмотра в Mini App
  inlineKeyboard.push([
    {
      text: '📱 Открыть в приложении',
      web_app: { url: `${process.env.WEBAPP_URL}/tasks` }
    }
  ]);
  
  await ctx.reply(message, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: inlineKeyboard
    }
  });
});
```

### 11.4 Создание новой задачи

```javascript
// Сцена для создания новой задачи
const createTaskScene = new Scenes.WizardScene(
  'create_task',
  // Шаг 1: Ввод названия задачи
  async (ctx) => {
    await ctx.reply('Введите название задачи:');
    return ctx.wizard.next();
  },
  // Шаг 2: Выбор цели (опционально)
  async (ctx) => {
    ctx.wizard.state.taskTitle = ctx.message.text;
    
    // Получение списка целей пользователя
    const { data: goals, error } = await supabase
      .from('goals')
      .select('id, title')
      .eq('user_id', getUserIdByTelegramId(ctx.from.id))
      .eq('status', 'active');
    
    if (!goals || goals.length === 0) {
      ctx.wizard.state.goalId = null;
      return ctx.wizard.selectStep(3);
    }
    
    const inlineKeyboard = goals.map(goal => [
      {
        text: goal.title,
        callback_data: `goal_${goal.id}`
      }
    ]);
    
    // Добавляем опцию "Без цели"
    inlineKeyboard.push([{ text: 'Без привязки к цели', callback_data: 'goal_none' }]);
    
    await ctx.reply('Выберите цель для задачи (опционально):', {
      reply_markup: {
        inline_keyboard: inlineKeyboard
      }
    });
    
    return ctx.wizard.next();
  },
  // Шаг 3: Выбор приоритета
  async (ctx) => {
    if (ctx.callbackQuery) {
      const callbackData = ctx.callbackQuery.data;
      if (callbackData.startsWith('goal_')) {
        const goalId = callbackData.replace('goal_', '');
        ctx.wizard.state.goalId = goalId !== 'none' ? goalId : null;
      }
    }
    
    await ctx.reply('Выберите приоритет задачи:', {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🔴 Высокий', callback_data: 'priority_high' }],
          [{ text: '🟡 Средний', callback_data: 'priority_medium' }],
          [{ text: '🟢 Низкий', callback_data: 'priority_low' }]
        ]
      }
    });
    
    return ctx.wizard.next();
  },
  // Шаг 4: Выбор даты
  async (ctx) => {
    if (ctx.callbackQuery) {
      ctx.wizard.state.priority = ctx.callbackQuery.data.replace('priority_', '');
    }
    
    // Создание календаря для выбора даты (упрощенно)
    await ctx.reply('Выберите дату для задачи:', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Сегодня', callback_data: 'date_today' }],
          [{ text: 'Завтра', callback_data: 'date_tomorrow' }],
          [{ text: 'Выбрать другую дату', callback_data: 'date_custom' }]
        ]
      }
    });
    
    return ctx.wizard.next();
  },
  // Шаг 5: Создание задачи
  async (ctx) => {
    if (ctx.callbackQuery) {
      const callbackData = ctx.callbackQuery.data;
      
      let scheduledDate = new Date();
      if (callbackData === 'date_tomorrow') {
        scheduledDate.setDate(scheduledDate.getDate() + 1);
      } else if (callbackData === 'date_custom') {
        // Должна быть логика для выбора произвольной даты
        // Упрощенно используем дату через неделю
        scheduledDate.setDate(scheduledDate.getDate() + 7);
      }
      
      ctx.wizard.state.scheduledDate = scheduledDate.toISOString().split('T')[0];
      
      // Создание задачи в базе данных
      const { data, error } = await supabase
        .from('tasks')
        .insert({
          title: ctx.wizard.state.taskTitle,
          user_id: getUserIdByTelegramId(ctx.from.id),
          goal_id: ctx.wizard.state.goalId,
          priority: ctx.wizard.state.priority,
          status: 'pending',
          scheduled_date: ctx.wizard.state.scheduledDate,
          created_at: new Date().toISOString()
        })
        .select()
        .single();
      
      if (error) {
        await ctx.reply('Произошла ошибка при создании задачи. Пожалуйста, попробуйте еще раз позже.');
      } else {
        await ctx.reply(`✅ Задача "${data.title}" успешно создана и запланирована на ${formatDate(ctx.wizard.state.scheduledDate)}.`, {
          reply_markup: {
            inline_keyboard: [
              [{ text: 'Показать все задачи на этот день', callback_data: `show_tasks_${ctx.wizard.state.scheduledDate}` }]
            ]
          }
        });
      }
    }
    
    return ctx.scene.leave();
  }
);

// Регистрация сцены
const stage = new Scenes.Stage([createTaskScene]);
bot.use(stage.middleware());

// Команда для начала создания задачи
bot.command('newtask', (ctx) => ctx.scene.enter('create_task'));
```

## 12. Расчет и визуализация "Business Load"

### 12.1 Алгоритм расчета "Business Load"

```javascript
// Функция расчета Business Load
const calculateBusinessLoad = async (userId) => {
  const today = new Date().toISOString().split('T')[0];
  
  // Получение задач на день
  const { data: tasks } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', userId)
    .eq('scheduled_date', today)
    .eq('status', 'pending');

  // Получение исторических данных для модели
  const { data: historicalData } = await supabase
    .from('daily_progress')
    .select('*')
    .eq('user_id', userId)
    .order('date', { ascending: false })
    .limit(30);

  // Базовый расчет нагрузки
  let load = 0;
  
  // Фактор 1: Количество задач (максимум 30 баллов)
  const taskCountFactor = Math.min(tasks.length / 10 * 30, 30);
  
  // Фактор 2: Сложность задач (максимум 30 баллов)
  const complexityFactor = tasks.reduce((acc, task) => {
    const weights = { low: 1, medium: 2, high: 3 };
    return acc + (weights[task.complexity] || 1);
  }, 0) / Math.max(1, tasks.length) * 10;
  
  // Фактор 3: Когнитивная нагрузка (максимум 20 баллов)
  const cognitiveFactor = tasks.reduce((acc, task) => 
    acc + (task.cognitive_load || 0), 0) / Math.max(1, tasks.length);
  
  // Фактор 4: Близость дедлайнов (максимум 20 баллов)
  const urgencyFactor = tasks.filter(task => {
    if (!task.deadline) return false;
    const deadline = new Date(task.deadline);
    const daysLeft = (deadline - new Date()) / (1000 * 60 * 60 * 24);
    return daysLeft <= 2;
  }).length / Math.max(1, tasks.length) * 20;
  
  // Базовая нагрузка - сумма факторов
  load = taskCountFactor + complexityFactor + cognitiveFactor + urgencyFactor;
  
  // Корректировка на основе исторических данных
  if (historicalData && historicalData.length > 0) {
    // Получаем средний уровень нагрузки за последнюю неделю
    const recentLoad = historicalData
      .filter((_, i) => i < 7)
      .reduce((acc, day) => acc + day.business_load, 0) / 
      Math.min(7, historicalData.length);
      
    // Учитываем историческую нагрузку с весом 30%
    load = load * 0.7 + recentLoad * 0.3;
  }
  
  // Нормализация до 0-100
  load = Math.min(Math.max(Math.round(load), 0), 100);
  
  // Сохранение результата
  await supabase
    .from('daily_progress')
    .upsert({
      user_id: userId,
      date: today,
      business_load: load,
      tasks_planned: tasks.length,
      tasks_completed: 0
    });
  
  return load;
};
```

### 12.2 Визуализация "Business Load" в Telegram

```javascript
// Функция для отображения Business Load
const sendBusinessLoadVisualization = async (ctx, userId) => {
  // Получение текущего значения Business Load
  const load = await calculateBusinessLoad(userId);
  
  // Определение цвета индикатора на основе значения
  let color, emoji, recommendation;
  
  if (load < 40) {
    color = '🟢';
    emoji = '😊';
    recommendation = 'Нагрузка оптимальная. Хороший день для продуктивной работы!';
  } else if (load < 70) {
    color = '🟡';
    emoji = '😐';
    recommendation = 'Умеренная нагрузка. Следите за своим самочувствием и делайте перерывы.';
  } else {
    color = '🔴';
    emoji = '😓';
    recommendation = 'Высокая нагрузка! Рекомендуется пересмотреть приоритеты и делегировать часть задач.';
  }
  
  // Создание визуальной шкалы
  const totalBlocks = 10;
  const filledBlocks = Math.round(load / 100 * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;
  
  const progressBar = '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks);
  
  // Получение динамики нагрузки
  const { data: history } = await supabase
    .from('daily_progress')
    .select('business_load, date')
    .eq('user_id', userId)
    .order('date', { ascending: false })
    .limit(5);
  
  let trendEmoji = '';
  if (history && history.length > 1) {
    const previousLoad = history[1].business_load;
    if (load > previousLoad + 10) {
      trendEmoji = '📈';
    } else if (load < previousLoad - 10) {
      trendEmoji = '📉';
    } else {
      trendEmoji = '📊';
    }
  }
  
  // Формирование сообщения
  const message = `
*Business Load: ${load}%* ${emoji} ${trendEmoji}

${color} ${progressBar} ${color}

${recommendation}
  `;
  
  // Дополнительные действия на основе нагрузки
  const inlineKeyboard = [
    [{ text: '📊 Подробная аналитика', web_app: { url: `${process.env.WEBAPP_URL}/load` } }]
  ];
  
  // Дополнительные рекомендации при высокой нагрузке
  if (load >= 70) {
    inlineKeyboard.push([{ text: '🔍 Получить рекомендации', callback_data: 'get_load_recommendations' }]);
    inlineKeyboard.push([{ text: '⚙️ Перепланировать задачи', callback_data: 'reschedule_tasks' }]);
  }
  
  await ctx.reply(message, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: inlineKeyboard
    }
  });
};

// Обработка команды показа Business Load
bot.command('load', async (ctx) => {
  const userId = getUserIdByTelegramId(ctx.from.id);
  await sendBusinessLoadVisualization(ctx, userId);
});
```

## 13. Тестирование и мониторинг

### 13.1 План тестирования
- **Юнит-тесты** для основных функций бота
- **Интеграционные тесты** для проверки взаимодействия с Supabase
- **End-to-End тесты** для полных пользовательских сценариев
- **Нагрузочное тестирование** для проверки производительности при масштабировании
- **Тесты безопасности** для проверки защиты данных

### 13.2 Пример юнит-теста

```javascript
// __tests__/businessLoad.test.js
const { calculateBusinessLoad } = require('../src/services/businessLoad');
const { createClient } = require('@supabase/supabase-js');

jest.mock('@supabase/supabase-js');

describe('Business Load Calculation', () => {
  let mockSupabase;
  
  beforeEach(() => {
    mockSupabase = {
      from: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      order: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      upsert: jest.fn().mockResolvedValue({ data: {}, error: null })
    };
    
    createClient.mockReturnValue(mockSupabase);
  });
  
  test('should calculate low load when few tasks', async () => {
    // Мокаем данные для сценария низкой нагрузки
    mockSupabase.select.mockImplementation(() => ({
      eq: jest.fn().mockImplementation(() => ({
        eq: jest.fn().mockImplementation(() => ({
          order: jest.fn().mockImplementation(() => ({
            limit: jest.fn().mockResolvedValue({ 
              data: [
                { id: 1, title: 'Task 1', complexity: 'low', cognitive_load: 10 }
              ], 
              error: null 
            })
          }))
        }))
      }))
    }));
    
    const result = await calculateBusinessLoad('test-user-id');
    
    expect(result).toBeLessThan(40);
    expect(mockSupabase.from).toHaveBeenCalledWith('tasks');
    expect(mockSupabase.upsert).toHaveBeenCalled();
  });
  
  test('should calculate high load for many complex tasks', async () => {
    // Мокаем данные для сценария высокой нагрузки
    mockSupabase.select.mockImplementation(() => ({
      eq: jest.fn().mockImplementation(() => ({
        eq: jest.fn().mockImplementation(() => ({
          order: jest.fn().mockImplementation(() => ({
            limit: jest.fn().mockResolvedValue({ 
              data: Array(10).fill().map((_, i) => ({
                id: i, 
                title: `Task ${i}`, 
                complexity: 'high', 
                cognitive_load: 30,
                deadline: new Date(Date.now() + 86400000) // завтра
              })), 
              error: null 
            })
          }))
        }))
      }))
    }));
    
    const result = await calculateBusinessLoad('test-user-id');
    
    expect(result).toBeGreaterThan(70);
  });
});
```

### 13.3 Мониторинг и логирование

```javascript
// Пример настройки логирования
const winston = require('winston');

// Настройка логгера
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Middleware для логирования запросов
bot.use(async (ctx, next) => {
  const startTime = Date.now();
  
  // Логирование входящего сообщения
  logger.info({
    type: 'request',
    from: ctx.from?.id,
    chatId: ctx.chat?.id,
    message: ctx.message?.text,
    updateType: ctx.updateType
  });
  
  try {
    // Выполнение обработчика
    await next();
    
    // Логирование успешного ответа
    logger.info({
      type: 'response',
      from: ctx.from?.id,
      chatId: ctx.chat?.id,
      duration: Date.now() - startTime
    });
  } catch (error) {
    // Логирование ошибки
    logger.error({
      type: 'error',
      from: ctx.from?.id,
      chatId: ctx.chat?.id,
      error: error.message,
      stack: error.stack,
      duration: Date.now() - startTime
    });
    
    // Отправка сообщения пользователю об ошибке
    await ctx.reply('Произошла ошибка при обработке запроса. Попробуйте позже или обратитесь в поддержку.');
    
    // Отправка уведомления разработчикам при критической ошибке
    if (process.env.ADMIN_CHAT_ID) {
      await bot.telegram.sendMessage(
        process.env.ADMIN_CHAT_ID,
        `⚠️ Критическая ошибка:\n${error.message}\n\nПользователь: ${ctx.from?.id}\nКоманда: ${ctx.message?.text}`
      );
    }
  }
});
```

## 14. Метрики и аналитика

### 14.1 Ключевые метрики для отслеживания

#### 14.1.1 Пользовательская активность
- DAU/MAU (ежедневные/ежемесячные активные пользователи)
- Процент задач, выполненных через бота vs. через основное приложение
- Частота взаимодействия с ботом (количество сеансов в день/неделю)
- Время, затрачиваемое на взаимодействие с ботом
- Показатель отказов (процент пользователей, которые прекращают использовать бота)

#### 14.1.2 Эффективность выполнения задач
- Процент выполненных задач от запланированных
- Среднее время выполнения задачи
- Распределение задач по категориям и приоритетам
- Количество задач, созданных через пересылку сообщений
- Эффективность AI-приоритизации (количество изменений приоритетов пользователем)

#### 14.1.3 Показатели "Business Load"
- Средний уровень нагрузки по пользователям
- Динамика нагрузки в течение недели/месяца
- Корреляция между высоким "Business Load" и отказами от использования
- Эффективность рекомендаций по снижению нагрузки

#### 14.1.4 Эффективность уведомлений
- Процент открытых уведомлений
- CTR по кнопкам в уведомлениях
- Время отклика на уведомления
- Эффективность разных типов уведомлений
- Отключение уведомлений пользователями

#### 14.1.5 Бизнес-показатели
- Конверсия из Free в Premium
- Удержание платящих пользователей
- MRR (Monthly Recurring Revenue)
- Customer Acquisition Cost (CAC)
- Lifetime Value (LTV)

### 14.2 Дашборды и отчеты

#### 14.2.1 Ежедневный дашборд активности
- Количество активных пользователей
- Количество созданных/выполненных задач
- Распределение активности по часам
- Новые регистрации

#### 14.2.2 Еженедельный отчет по продукту
- Динамика ключевых метрик
- Популярные функции и команды
- Проблемные области (ошибки, отказы)
- A/B тестирование новых функций

#### 14.2.3 Ежемесячный бизнес-отчет
- Динамика конверсии и удержания
- Финансовые показатели
- Сравнение с основным приложением
- Прогнозы роста и рекомендации

## 15. План маркетинга и продвижения

### 15.1 Целевые каналы продвижения

#### 15.1.1 Для существующих пользователей
- Уведомления в основном приложении о новом боте
- Email-рассылка с преимуществами бота
- Интеграция приглашения в основное приложение

#### 15.1.2 Для новых пользователей
- Директ-маркетинг в Telegram-каналах для предпринимателей
- Партнерство с бизнес-сообществами
- Таргетированная реклама для предпринимателей в соцсетях
- Контент-маркетинг с акцентом на продуктивность и предотвращение выгорания
- Программа рекомендаций (реферальная система)

### 15.2 Ключевые сообщения
1. **Для предпринимателей-одиночек**: "Управляйте бизнес-целями прямо в Telegram и предотвращайте выгорание с AI-планированием"
2. **Для основателей стартапов**: "Синхронизируйте цели команды и держите руку на пульсе бизнеса в любое время"
3. **Для фрилансеров**: "Управляйте проектами, отслеживайте прогресс и оптимизируйте нагрузку в привычном мессенджере"

### 15.3 Тактики запуска
- **Закрытый бета-тест** для лояльных пользователей основного приложения
- **Waitlist** с приоритетным доступом для ранних подписчиков
- **Product Hunt запуск** с специальными предложениями
- **AMA-сессии** (Ask Me Anything) в Telegram-каналах и сообществах
- **Webinar/demo** функциональности для бизнес-сообществ

### 15.4 Метрики эффективности маркетинга
- CAC (Customer Acquisition Cost) по каналам
- Конверсия на различных этапах воронки
- Виральность (K-фактор, коэффициент распространения)
- ROI маркетинговых кампаний
- Стоимость привлечения пользователя по сегментам

## 16. Заключение и следующие шаги

Телеграм-бот Business Connect представляет собой важное расширение экосистемы основного продукта, предоставляя пользователям возможность управлять бизнес-целями и задачами в привычном и доступном интерфейсе Telegram. Ключевые преимущества бота:

1. Доступность и простота использования через Telegram
2. AI-планирование и приоритизация задач
3. Визуализация прогресса и "Business Load"
4. Умные уведомления с возможностью быстрых действий
5. Telegram Mini App для расширенной функциональности

Рекомендуемые следующие шаги:
1. Проведение глубинных интервью с существующими пользователями для валидации концепции
2. Разработка MVP с фокусом на ключевые функции
3. Закрытое бета-тестирование с группой пользователей основного продукта
4. Доработка на основе обратной связи
5. Полноценный запуск с маркетинговой кампанией
6. Регулярные итерации и улучшения на основе метрик и обратной связи

Этот бот может значительно расширить охват аудитории и улучшить удержание пользователей за счет встраивания функциональности Business Connect в повседневный рабочий процесс предпринимателей, использующих Telegram.