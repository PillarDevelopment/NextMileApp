# Frontend-разработка: Business Connect

## 1. Обзор продукта

Business Connect — это AI-трекер бизнес-целей и задач, аналог Garmin Connect/Strava для бизнеса. Приложение помогает предпринимателям систематически достигать бизнес-целей, снижать уровень стресса и предотвращать выгорание через адаптивное планирование и визуализацию прогресса.

### 1.1 Ключевые ценностные предложения
- Снижение стресса и выгорания предпринимателей через адаптивное планирование с ИИ
- Повышение ясности, контроля и мотивации через визуализацию прогресса
- Геймификация через бейджи и челленджи
- Визуализация текущей рабочей нагрузки ("Business Load")
- Отображение прогресса к цели
- Динамический ежедневный треккер
- Простой и быстрый ввод ежедневных задач и прогресса
- Удобный интерфейс для ежедневного отслеживания действий

### 1.2 Целевая аудитория
- Предприниматели-одиночки
- Основатели стартапов (команды до 20 человек)
- Малый и средний бизнес (SMB)
- Фрилансеры и консультанты

## 2. Требования к платформе

### 2.1 Мобильное приложение
- Нативное приложение для Android (приоритет для MVP)
- Нативное приложение для iOS (для premium-версии, V2)

### 2.2 Философия дизайна
- Чистый, минималистичный интерфейс
- Достаточно пустого пространства
- Фокус на данных и решениях
- Максимум 5 ключевых элементов на экран
- Дизайн, вдохновленный:
  - Garmin Connect/Strava (для отслеживания прогресса)
  - Sunsama (для ежедневного планирования)
  - I am Sober (для отслеживания привычек)
  - Motion (для приоритизации задач на базе ИИ)
  - Linear (для чистого интерфейса)

## 3. Пользовательский опыт и интерфейс

### 3.1 Ключевые пользовательские потоки

#### 3.1.1 Поток онбординга
- Создание учетной записи
  - Регистрация через Email + Пароль
  - Альтернативные методы входа (Google, Apple ID, Яндекс ID, Telegram)
- Мастер настройки целей
  - Выбор категории цели (финансовая, маркетинг, продукт, операции, личная)
  - Ввод конкретных показателей цели
  - Установка сроков
- Настройка интеграций (опционально)
  - Подключение Google Calendar
- Конфигурация предпочтений
  - Частота уведомлений
  - Настройка рабочих часов
  - Настройка выходных дней

**Критерий приемки:** Новые пользователи могут завершить настройку менее чем за 5 минут.

#### 3.1.2 Поток ежедневного взаимодействия
- Быстрый обзор задач (5-10 минут)
  - Просмотр приоритезированных ИИ 3-х главных задач дня
  - Отметка выполнения задач
- Логирование прогресса
  - Обновление метрик по целям
  - Краткая рефлексия (опционально)

**Критерий приемки:** Ежедневные чек-ины быстрые и не создают трения.

#### 3.1.3 Поток еженедельного обзора
- Сводка прогресса (15-30 минут)
  - Сравнение плана и факта
  - Визуализация тенденций
- Обзор рекомендаций ИИ
  - Предложения по корректировке фокуса
  - Советы по управлению нагрузкой
- Корректировки плана
  - Подтверждение или изменение предложенных ИИ корректировок
  - Ручные изменения планов при необходимости

**Критерий приемки:** Еженедельные обзоры предоставляют комплексные, но легко воспринимаемые выводы.

### 3.2 Ключевые экраны

#### 3.2.1 Дашборд
- Визуализация прогресса к цели
  - Процентное соотношение или этапы
  - Графическое представление (круговые или линейные диаграммы)
- Текущая скорость (velocity)
  - Сравнение с требуемой для достижения цели
  - Тренд (растет/снижается)
- Приоритетные задачи на сегодня
  - Топ-3 задачи с отметкой статуса выполнения
  - Кнопка для быстрого добавления задач
- Индикатор бизнес-нагрузки (Business Load)
  - Визуальная шкала (как Body Battery в Garmin)
  - Цветовая индикация (зеленый/желтый/красный)
- Предупреждения о рисках (если есть)
  - Иконки с предупреждениями
  - Краткие описания проблем

**Критерий приемки:** Пользователи могут сразу видеть свой текущий статус.

#### 3.2.2 Экран ежедневных задач
- Задачи с приоритетами ИИ
  - Разделение на приоритетные и дополнительные
  - Цветовая маркировка по важности
- Отслеживание выполнения
  - Чекбоксы для отметки выполнения
  - Прогресс-бары для частично выполненных задач
- Оценки времени
  - Предполагаемое время на задачу
  - Отслеживание фактического времени (опционально)
- Индикаторы сложности
  - Визуальные маркеры сложности задачи
  - Уровень когнитивной нагрузки

**Критерий приемки:** Задачи четко представлены со всем необходимым контекстом.

#### 3.2.3 Аналитический обзор
- Графики прогресса
  - По каждой активной цели
  - Агрегированный общий прогресс
- Исторические данные нагрузки
  - Недельные/месячные диаграммы
  - Сравнение с оптимальными показателями
- Анализ трендов
  - Скорость движения к целям
  - Паттерны выполнения задач
- История рекомендаций
  - Архив рекомендаций ИИ
  - Отметка о применении/игнорировании

**Критерий приемки:** Пользователи могут легко анализировать свои паттерны производительности.

#### 3.2.4 Экран управления целями
- Создание/редактирование целей
  - Форма с полями категории, описания, метрик
  - Выбор временных рамок
- Визуализация вех
  - Временная линия с ключевыми точками
  - Статус каждой вехи
- Управление дедлайнами
  - Календарное представление сроков
  - Возможность корректировки
- Опции обмена
  - Настройки приватности
  - Кнопки шеринга для соцсетей/мессенджеров

**Критерий приемки:** Пользователи могут создавать и управлять целями со всеми необходимыми параметрами.

#### 3.2.5 Экран еженедельного отчета
- Сводка достижений
  - Инфографика по выполненным задачам
  - Ключевые метрики и их изменения
- Выявление отстающих областей
  - Индикаторы проблемных зон
  - Предложения по исправлению
- Персонализированные рекомендации
  - Советы по перераспределению фокуса
  - Рекомендации по управлению нагрузкой
- Прогноз на следующую неделю
  - Предварительный план
  - Ожидаемый уровень нагрузки

**Критерий приемки:** Пользователь получает еженедельный отчет с практическими выводами.

### 3.3 Элементы геймификации
- Значки достижений за выполнение этапов
  - Дизайн бейджей соответствует категориям целей
  - Анимации при получении новых бейджей
- Серии привычек для регулярных чек-инов
  - Счетчики последовательных дней
  - Визуализация "цепочки" привычек
- Челленджи (индивидуальные или командные)
  - Временные вызовы с определенными критериями
  - Рейтинги и лидерборды (опционально)

**Критерий приемки:** Пользователи получают награды, стимулирующие вовлеченность, за последовательные действия и достижение целей.

### 3.4 Интеграции пользовательского интерфейса
- Google Calendar
  - Синхронизация задач с календарем
  - Визуализация занятого времени
- Уведомления
  - Push-уведомления о задачах
  - Напоминания о чек-инах
  - Еженедельные сводки

**Критерий приемки:** Интеграции работают бесшовно и повышают ценность приложения.

## 4. Разделение функций между уровнями

### 4.1 Free-уровень (Бесплатный)
- Ограниченное количество активных целей (1-2)
- Базовые рекомендации ИИ
- Ручное создание задач
- Основное отслеживание прогресса
- Без интеграций
- Базовые дашборды и визуализации

**Критерий приемки:** Бесплатный уровень предоставляет реальную ценность, одновременно поощряя обновление.

### 4.2 Premium-уровень (Соло)
- Неограниченные цели
- Полные функции планирования с ИИ
- Вся аналитика и расширенные дашборды
- 1-2 базовые интеграции
- Расширенные визуализации прогресса
- Экспорт отчетов

**Критерий приемки:** Соло-уровень предоставляет полную функциональность для индивидуальных предпринимателей.

### 4.3 Business-уровень
- Командные дашборды
- Общие цели и задачи
- Расширенные интеграции
- Пользовательская отчетность
- Брендинг в отчетах
- Командные челленджи

**Критерий приемки:** Бизнес-уровень добавляет ценные функции координации команды.

## 5. Фазы разработки фронтенда

### 5.1 MVP (Фаза 1)
- **Фокусные области:**
  - Основной Дашборд с ключевыми метриками
  - Простой экран ежедневных задач
  - Базовый интерфейс управления целями
  - Экран простого еженедельного отчета
  - Базовая версия экрана аналитики
  - Только русский язык
  - Только Android приложение

**Критерии приемки:** 
- Приложение работает стабильно
- Ключевые экраны реализованы
- Пользователь может выполнять основные действия
- Дизайн соответствует минималистичной концепции

### 5.2 Версия 2
- **Расширения интерфейса:**
  - Расширенная аналитика с дополнительными графиками
  - Более гибкие настройки отображения
  - Полная система геймификации
  - Улучшенные визуализации прогресса
  - Расширенные интеграции
  - iOS версия приложения

**Критерии приемки:** 
- Все расширенные функции работают корректно
- iOS приложение соответствует гайдлайнам Apple
- Улучшенный пользовательский опыт на основе обратной связи

### 5.3 Будущие версии
- Веб-интерфейс
- Расширенная система обмена целями и достижениями
- Интерфейс для персонализированного AI коучинга
- Кастомизируемые дашборды
- Интерфейс для отраслевых шаблонов

## 6. Технические требования к фронтенду

### 6.1 Разработка
- **Нативные приложения:**
  - Android:
    - Kotlin
    - Jetpack Compose (рекомендуется)
    - Material Design 3
  - iOS (V2):
    - Swift
    - SwiftUI (рекомендуется)
    - Human Interface Guidelines
- **Компонентная система:**
  - Shadcn UI для генерации визуальных компонентов приложения
  - Адаптация Shadcn UI компонентов под мобильные платформы
  - Единая система дизайна на основе Shadcn UI

### 6.2 Требования к пользовательскому интерфейсу
- Соответствие современным практикам UX/UI
- Адаптивное отображение для разных экранов
- Темная/светлая тема (опционально для MVP)
- Доступность для пользователей с ограниченными возможностями
- Анимации для ключевых взаимодействий
- Оптимизация для быстрого отклика

### 6.3 Офлайн-возможности
- Кэширование данных для работы без соединения
- Синхронизация при восстановлении соединения
- Индикация статуса соединения

### 6.4 Взаимодействие с бэкендом
- Supabase для всех взаимодействий с бэкендом
- REST API через Supabase для основных операций
- Realtime подписки Supabase для обновлений в реальном времени
- Supabase Storage для хранения файлов и медиа
- Supabase Auth для управления аутентификацией
- Клиентские SDK Supabase для всех платформ
- Обработка ошибок и состояний загрузки
- Отображение подсказок при сбоях

## 7. Технические вызовы фронтенда и решения

### 7.1 Производительность и отзывчивость
- **Вызов:** Обеспечение плавной работы с большим количеством данных и визуализаций
  - **Решение:** 
    - Виртуализация списков
    - Ленивая загрузка данных
    - Оптимизация рендеринга графиков
    - Использование нативных компонентов

### 7.2 Сложные визуализации
- **Вызов:** Создание информативных и интуитивно понятных визуализаций для бизнес-метрик
  - **Решение:**
    - Использование специализированных графических библиотек
    - Постепенное раскрытие деталей
    - A/B тестирование для определения наиболее понятных визуализаций

### 7.3 Адаптивные интерфейсы
- **Вызов:** Разработка интерфейса, который адаптируется к различным потребностям и привычкам пользователей
  - **Решение:**
    - Настраиваемые дашборды
    - Персонализируемые метрики
    - Сохранение пользовательских предпочтений

## 8. Метрики успеха фронтенда

### 8.1 Пользовательский опыт
- Среднее время выполнения ключевых действий
- Показатели завершения задач
- Количество ошибок при взаимодействии
- Метрики использования функций

### 8.2 Технические показатели
- Время загрузки экранов
- Частота крашей
- Использование памяти
- Энергопотребление

### 8.3 Визуальная согласованность
- Соответствие дизайн-системе
- Последовательность в использовании элементов
- Единство стиля во всех разделах

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

### 8.6 Управление целями
```javascript
// GoalManagement.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { supabase } from './supabaseClient';

const CreateGoal = ({ navigation }) => {
  const [goalData, setGoalData] = useState({
    title: '',
    category: 'finance',
    deadline: new Date(),
    target_value: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);

  const categories = [
    { value: 'finance', label: 'Финансы' },
    { value: 'marketing', label: 'Маркетинг' },
    { value: 'product', label: 'Продукт' },
    { value: 'sales', label: 'Продажи' },
    { value: 'legal', label: 'Юридические' },
    { value: 'government', label: 'Государство' },
    { value: 'other', label: 'Прочее' }
  ];

  const createGoal = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('goals')
        .insert({
          ...goalData,
          user_id: tg.initDataUnsafe?.user?.id,
          status: 'active',
          current_value: 0,
          start_date: new Date()
        })
        .select()
        .single();

      if (error) throw error;

      // Создание первых вех для цели
      await createMilestones(data.id);

      // Генерация задач через Edge Function
      await supabase.functions.invoke('generate-goal-tasks', {
        body: { goalId: data.id }
      });

      // Отправка подтверждения в Telegram
      await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: tg.initDataUnsafe?.user?.id,
          message: `🎯 Цель "${data.title}" успешно создана!`,
          buttons: [[{
            text: '📊 Посмотреть план',
            web_app: { url: `${process.env.WEB_APP_URL}/goals/${data.id}` }
          }]]
        })
      });

      navigation.navigate('Dashboard');
    } catch (error) {
      console.error('Error creating goal:', error);
    } finally {
      setLoading(false);
    }
  };

  const createMilestones = async (goalId) => {
    const totalDays = Math.ceil(
      (goalData.deadline - new Date()) / (1000 * 60 * 60 * 24)
    );
    const milestoneCount = Math.min(Math.floor(totalDays / 30), 4);

    const milestones = [];
    for (let i = 1; i <= milestoneCount; i++) {
      const deadline = new Date();
      deadline.setDate(deadline.getDate() + (i * 30));
      
      milestones.push({
        goal_id: goalId,
        title: `Веха ${i}`,
        target_value: (goalData.target_value / milestoneCount) * i,
        deadline: deadline,
        status: 'pending'
      });
    }

    await supabase.from('milestones').insert(milestones);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ваша первая цель</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Название цели"
        value={goalData.title}
        onChangeText={(text) => setGoalData({...goalData, title: text})}
      />

      <Picker
        selectedValue={goalData.category}
        style={styles.picker}
        onValueChange={(value) => setGoalData({...goalData, category: value})}
      >
        {categories.map(cat => (
          <Picker.Item key={cat.value} label={cat.label} value={cat.value} />
        ))}
      </Picker>

      <DateTimePicker
        value={goalData.deadline}
        mode="date"
        display="default"
        onChange={(event, date) => setGoalData({...goalData, deadline: date})}
      />

      <TouchableOpacity 
        style={styles.createButton}
        onPress={createGoal}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Создание...' : 'Создать цель'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
```

### 8.7 Еженедельные отчеты
```javascript
// weeklyReport.js
const generateWeeklyReport = async (userId) => {
  // Получение данных за неделю
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  const { data: weekData } = await supabase
    .from('daily_progress')
    .select(`
      date,
      business_load,
      tasks_completed,
      tasks_planned
    `)
    .eq('user_id', userId)
    .gte('date', weekAgo.toISOString())
    .order('date');

  const { data: goalsProgress } = await supabase
    .from('goal_progress')
    .select(`
      goals (
        id,
        title,
        category,
        target_value,
        current_value
      ),
      value,
      date
    `)
    .eq('goals.user_id', userId)
    .gte('date', weekAgo.toISOString());

  // Анализ данных
  const avgBusinessLoad = weekData.reduce((acc, day) => 
    acc + day.business_load, 0) / weekData.length;
  
  const completionRate = weekData.reduce((acc, day) => 
    acc + (day.tasks_completed / day.tasks_planned), 0) / weekData.length * 100;

  // Генерация отчета
  const report = {
    period: {
      start: weekAgo,
      end: new Date()
    },
    metrics: {
      avgBusinessLoad: Math.round(avgBusinessLoad),
      completionRate: Math.round(completionRate),
      totalTasksCompleted: weekData.reduce((acc, day) => 
        acc + day.tasks_completed, 0)
    },
    goalsProgress: goalsProgress.map(progress => ({
      goal: progress.goals,
      weeklyProgress: progress.value
    })),
    recommendations: await generateRecommendations(userId, weekData)
  };

  // Сохранение отчета
  await supabase
    .from('weekly_reports')
    .insert({
      user_id: userId,
      report_data: report,
      created_at: new Date()
    });

  return report;
};

// WeeklyReport.jsx - React Native компонент
const WeeklyReport = ({ route }) => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReport();
  }, []);

  const loadReport = async () => {
    const { reportId } = route.params;
    
    const { data } = await supabase
      .from('weekly_reports')
      .select('*')
      .eq('id', reportId)
      .single();

    setReport(data.report_data);
    setLoading(false);
  };

  const shareReport = async () => {
    // Генерация изображения отчета
    const imageUrl = await generateReportImage(report);
    
    // Открытие Telegram share
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(imageUrl)}&text=${encodeURIComponent('Мой еженедельный отчет Business Connect')}`;
    window.open(shareUrl, '_blank');
  };

  if (loading) return <LoadingScreen />;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Еженедельный отчет</Text>
      
      <View style={styles.metricsCard}>
        <Text style={styles.metricTitle}>Средняя бизнес-нагрузка</Text>
        <Text style={styles.metricValue}>{report.metrics.avgBusinessLoad}%</Text>
        
        <Text style={styles.metricTitle}>Выполнение задач</Text>
        <Text style={styles.metricValue}>{report.metrics.completionRate}%</Text>
        
        <Text style={styles.metricTitle}>Всего задач выполнено</Text>
        <Text style={styles.metricValue}>{report.metrics.totalTasksCompleted}</Text>
      </View>

      <View style={styles.goalsSection}>
        <Text style={styles.sectionTitle}>Прогресс по целям</Text>
        {report.goalsProgress.map((item, index) => (
          <GoalProgressCard key={index} data={item} />
        ))}
      </View>

      <View style={styles.recommendationsSection}>
        <Text style={styles.sectionTitle}>Рекомендации</Text>
        {report.recommendations.map((rec, index) => (
          <RecommendationCard key={index} recommendation={rec} />
        ))}
      </View>

      <TouchableOpacity style={styles.shareButton} onPress={shareReport}>
        <Text style={styles.shareButtonText}>Поделиться отчетом</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
```

### 8.8 Business Load расчет
```javascript
// businessLoad.js
const calculateBusinessLoad = async (userId) => {
  const today = new Date().toISOString().split('T')[0];
  
  // Получение задач на день
  const { data: tasks } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', userId)
    .eq('scheduled_date', today)
    .eq('status', 'pending');

  // Получение исторических данных для ML модели
  const { data: historicalData } = await supabase
    .from('daily_progress')
    .select('*')
    .eq('user_id', userId)
    .order('date', { ascending: false })
    .limit(30);

  // Расчет нагрузки
  let load = 0;
  
  // Фактор 1: Количество задач
  const taskCountFactor = Math.min(tasks.length / 10 * 30, 30);
  
  // Фактор 2: Сложность задач
  const complexityFactor = tasks.reduce((acc, task) => {
    const weights = { low: 1, medium: 2, high: 3 };
    return acc + (weights[task.complexity] || 1);
  }, 0) / tasks.length * 10;
  
  // Фактор 3: Когнитивная нагрузка
  const cognitiveFactor = tasks.reduce((acc, task) => 
    acc + task.cognitive_load, 0) / tasks.length;
  
  // Фактор 4: Дедлайны
  const urgencyFactor = tasks.filter(task => {
    const deadline = new Date(task.deadline);
    const daysLeft = (deadline - new Date()) / (1000 * 60 * 60 * 24);
    return daysLeft <= 2;
  }).length / tasks.length * 20;
  
  // Фактор 5: Исторический паттерн
  const dayOfWeek = new Date().getDay();
  const historicalPattern = historicalData
    .filter(day => new Date(day.date).getDay() === dayOfWeek)
    .reduce((acc, day) => acc + day.business_load, 0) / 
    historicalData.filter(day => new Date(day.date).getDay() === dayOfWeek).length;
  
  load = taskCountFactor + complexityFactor + cognitiveFactor + urgencyFactor;
  
  // Корректировка на основе исторических данных
  if (historicalPattern) {
    load = load * 0.7 + historicalPattern * 0.3;
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

// BusinessLoadIndicator.jsx
const BusinessLoadIndicator = ({ userId }) => {
  const [load, setLoad] = useState(0);
  const [trend, setTrend] = useState('stable');

  useEffect(() => {
    loadBusinessLoad();
    
    // Обновление каждые 30 минут
    const interval = setInterval(loadBusinessLoad, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const loadBusinessLoad = async () => {
    const currentLoad = await calculateBusinessLoad(userId);
    setLoad(currentLoad);
    
    // Определение тренда
    const { data: history } = await supabase
      .from('daily_progress')
      .select('business_load')
      .eq('user_id', userId)
      .order('date', { ascending: false })
      .limit(7);
    
    if (history.length > 3) {
      const recent = history.slice(0, 3).reduce((acc, day) => 
        acc + day.business_load, 0) / 3;
      const previous = history.slice(3).reduce((acc, day) => 
        acc + day.business_load, 0) / (history.length - 3);
      
      if (recent > previous + 10) setTrend('increasing');
      else if (recent < previous - 10) setTrend('decreasing');
      else setTrend('stable');
    }
  };

  const getLoadColor = () => {
    if (load < 40) return '#4ecdc4';
    if (load < 70) return '#f7b731';
    return '#ff6b6b';
  };

  const getRecommendation = () => {
    if (load > 80) return 'Высокая нагрузка! Рекомендуется перенести часть задач.';
    if (load > 60) return 'Умеренная нагрузка. Следите за своим самочувствием.';
    return 'Оптимальная нагрузка. Отличный день для продуктивной работы!';
  };

  return (
    <View style={styles.loadContainer}>
      <Text style={styles.loadTitle}>Бизнес-нагрузка</Text>
      
      <View style={styles.loadBar}>
        <View 
          style={[
            styles.loadFill,
            { 
              width: `${load}%`, 
              backgroundColor: getLoadColor()
            }
          ]} 
        />
      </View>
      
      <View style={styles.loadInfo}>
        <Text style={styles.loadValue}>{load}%</Text>
        <Text style={styles.loadTrend}>
          {trend === 'increasing' && '↑'}
          {trend === 'decreasing' && '↓'}
          {trend === 'stable' && '→'}
        </Text>
      </View>
      
      <Text style={styles.recommendation}>{getRecommendation()}</Text>
    </View>
  );
};
```

### 8.9 Быстрое добавление задач
```javascript
// QuickTaskAdd.jsx
const QuickTaskAdd = ({ goalId, onTaskAdded }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [taskData, setTaskData] = useState({
    priority: 'medium',
    estimated_time: 30,
    complexity: 'medium',
    scheduled_date: new Date()
  });

  const quickAdd = async () => {
    if (!taskTitle.trim()) return;

    try {
      const { data, error } = await supabase
        .from('tasks')
        .insert({
          title: taskTitle,
          user_id: tg.initDataUnsafe?.user?.id,
          goal_id: goalId,
          ...taskData,
          status: 'pending',
          cognitive_load: calculateCognitiveLoad(taskData),
          created_at: new Date()
        })
        .select()
        .single();

      if (error) throw error;

      // Очистка формы
      setTaskTitle('');
      setShowAdvanced(false);
      
      // Callback для обновления списка
      onTaskAdded(data);

      // Haptic feedback
      if (window.Telegram?.WebApp?.HapticFeedback) {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
      }

      // Показать уведомление
      if (window.Telegram?.WebApp?.showAlert) {
        window.Telegram.WebApp.showAlert('Задача добавлена!');
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const calculateCognitiveLoad = (data) => {
    const complexityWeights = { low: 10, medium: 25, high: 40 };
    const timeWeight = Math.min(data.estimated_time / 60 * 15, 30);
    const priorityWeight = data.priority === 'high' ? 20 : 10;
    
    return Math.round(
      complexityWeights[data.complexity] + timeWeight + priorityWeight
    );
  };

  return (
    <View style={styles.quickAddContainer}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.quickInput}
          placeholder="Добавить быструю задачу..."
          value={taskTitle}
          onChangeText={setTaskTitle}
          onSubmitEditing={quickAdd}
        />
        <TouchableOpacity 
          style={styles.quickAddButton}
          onPress={quickAdd}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {showAdvanced && (
        <View style={styles.advancedOptions}>
          <Picker
            selectedValue={taskData.priority}
            onValueChange={(value) => 
              setTaskData({...taskData, priority: value})
            }
          >
            <Picker.Item label="Низкий приоритет" value="low" />
            <Picker.Item label="Средний приоритет" value="medium" />
            <Picker.Item label="Высокий приоритет" value="high" />
          </Picker>

          <Slider
            value={taskData.estimated_time}
            onValueChange={(value) => 
              setTaskData({...taskData, estimated_time: value})
            }
            minimumValue={15}
            maximumValue={240}
            step={15}
          />
          <Text>Время: {taskData.estimated_time} мин</Text>
        </View>
      )}

      <TouchableOpacity
        onPress={() => setShowAdvanced(!showAdvanced)}
        style={styles.advancedToggle}
      >
        <Text style={styles.advancedToggleText}>
          {showAdvanced ? 'Скрыть опции' : 'Больше опций'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
```

## 9. Примеры тестирования

### 9.1 Юнит-тесты для бота
```javascript
// __tests__/bot.test.js
const { Telegraf } = require('telegraf');
const { createClient } = require('@supabase/supabase-js');

jest.mock('telegraf');
jest.mock('@supabase/supabase-js');

describe('Telegram Bot', () => {
  let bot;
  let supabase;

  beforeEach(() => {
    bot = new Telegraf();
    supabase = createClient();
  });

  test('should handle /start command for existing user', async () => {
    // Mock Supabase response
    supabase.from.mockReturnValue({
      select: jest.fn().mockReturnValue({
        eq: jest.fn().mockReturnValue({
          single: jest.fn().mockResolvedValue({
            data: {
              id: '123',
              telegram_id: '456',
              name: 'Test User'
            }
          })
        })
      })
    });

    // Mock bot sendMessage
    bot.telegram.sendMessage = jest.fn().mockResolvedValue({});

    // Simulate /start command
    await bot.handleUpdate({
      message: {
        text: '/start',
        from: { id: 456 },
        chat: { id: 789 }
      }
    });

    // Assert
    expect(bot.telegram.sendMessage).toHaveBeenCalledWith(
      789,
      'Добро пожаловать обратно!',
      expect.objectContaining({
        reply_markup: expect.objectContaining({
          inline_keyboard: expect.arrayContaining([])
        })
      })
    );
  });

  test('should handle callback query for task completion', async () => {
    // Mock Supabase update
    supabase.from.mockReturnValue({
      update: jest.fn().mockReturnValue({
        eq: jest.fn().mockResolvedValue({ data: {} })
      })
    });

    // Mock bot methods
    bot.telegram.answerCallbackQuery = jest.fn().mockResolvedValue({});
    bot.telegram.editMessageReplyMarkup = jest.fn().mockResolvedValue({});

    // Simulate callback query
    await bot.handleUpdate({
      callback_query: {
        id: 'query123',
        data: 'complete_task_task456',
        from: { id: 789 },
        message: {
          chat: { id: 111 },
          message_id: 222
        }
      }
    });

    // Assert
    expect(supabase.from).toHaveBeenCalledWith('tasks');
    expect(bot.telegram.answerCallbackQuery).toHaveBeenCalledWith(
      'query123',
      expect.objectContaining({
        text: 'Задача отмечена как выполненная! ✅'
      })
    );
  });
});
```

### 9.2 Интеграционные тесты для Web App
```javascript
// __tests__/integration/webapp.test.js
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { createClient } from '@supabase/supabase-js';
import Dashboard from '../Dashboard';

jest.mock('@supabase/supabase-js');

describe('Web App Integration', () => {
  let supabase;

  beforeEach(() => {
    supabase = createClient();
    
    // Mock Telegram WebApp
    global.window.Telegram = {
      WebApp: {
        initDataUnsafe: {
          user: { id: 123 }
        },
        ready: jest.fn(),
        expand: jest.fn(),
        HapticFeedback: {
          impactOccurred: jest.fn()
        }
      }
    };
  });

  test('should load dashboard data on mount', async () => {
    // Mock Supabase responses
    supabase.from.mockImplementation((table) => {
      if (table === 'daily_progress') {
        return {
          select: jest.fn().mockReturnValue({
            eq: jest.fn().mockReturnValue({
              eq: jest.fn().mockReturnValue({
                single: jest.fn().mockResolvedValue({
                  data: { business_load: 65 }
                })
              })
            })
          })
        };
      }
      if (table === 'goals') {
        return {
          select: jest.fn().mockReturnValue({
            eq: jest.fn().mockReturnValue({
              eq: jest.fn().mockResolvedValue({
                data: [
                  { id: '1', title: 'Test Goal', progress: 45 }
                ]
              })
            })
          })
        };
      }
      return {
        select: jest.fn().mockReturnValue({
          eq: jest.fn().mockReturnValue({
            eq: jest.fn().mockResolvedValue({ data: [] })
          })
        })
      };
    });

    const { getByText } = render(<Dashboard user={{ id: 123 }} />);

    await waitFor(() => {
      expect(getByText('65%')).toBeTruthy();
      expect(getByText('Test Goal')).toBeTruthy();
    });
  });

  test('should complete task on checkbox click', async () => {
    // Mock initial data load
    supabase.from.mockImplementation((table) => {
      if (table === 'tasks') {
        return {
          select: jest.fn().mockReturnValue({
            eq: jest.fn().mockReturnValue({
              eq: jest.fn().mockReturnValue({
                order: jest.fn().mockResolvedValue({
                  data: [
                    {
                      id: 'task1',
                      title: 'Test Task',
                      status: 'pending'
                    }
                  ]
                })
              })
            })
          }),
          update: jest.fn().mockReturnValue({
            eq: jest.fn().mockResolvedValue({ data: {} })
          })
        };
      }
    });

    const { getByTestId } = render(<Dashboard user={{ id: 123 }} />);

    await waitFor(() => {
      const checkbox = getByTestId('task-checkbox-task1');
      fireEvent.press(checkbox);
    });

    expect(supabase.from).toHaveBeenCalledWith('tasks');
    expect(supabase.from().update).toHaveBeenCalledWith({
      status: 'completed',
      completed_at: expect.any(Date)
    });
  });
});
```

### 9.3 E2E тесты
```javascript
// __tests__/e2e/fullflow.test.js
import { device, element, by, expect } from 'detox';

describe('Full User Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  test('should complete onboarding and create first goal', async () => {
    // Open bot
    await element(by.text('/start')).tap();
    
    // Click web app button
    await element(by.text('Открыть Business Connect')).tap();
    
    // Wait for web app to load
    await waitFor(element(by.id('dashboard')))
      .toBeVisible()
      .withTimeout(5000);
    
    // Click add goal
    await element(by.id('add-goal-button')).tap();
    
    // Fill goal form
    await element(by.id('goal-title-input')).typeText('Увеличить продажи');
    await element(by.id('goal-category-picker')).tap();
    await element(by.text('Продажи')).tap();
    
    // Set deadline
    await element(by.id('deadline-picker')).tap();
    await element(by.text('OK')).tap();
    
    // Create goal
    await element(by.id('create-goal-button')).tap();
    
    // Verify goal appears
    await expect(element(by.text('Увеличить продажи'))).toBeVisible();
  });

  test('should receive and interact with notification', async () => {
    // Simulate morning notification
    await device.sendToHome();
    await device.launchApp({ delete: false });
    
    // Check for notification
    await waitFor(element(by.text('Ваши задачи на сегодня')))
      .toBeVisible()
      .withTimeout(10000);
    
    // Click inline button
    await element(by.text('✅ Выполнить')).tap();
    
    // Verify completion message
    await expect(element(by.text('Задача отмечена как выполненная!'))).toBeVisible();
  });
});
```

### 9.4 Тесты производительности
```javascript
// __tests__/performance/load.test.js
const loadtest = require('loadtest');

describe('Performance Tests', () => {
  test('should handle concurrent webhook requests', (done) => {
    const options = {
      url: 'http://localhost:3000/webhook/task-created',
      maxRequests: 1000,
      concurrency: 50,
      method: 'POST',
      body: JSON.stringify({
        record: {
          id: 'test-task',
          user_id: 'test-user',
          title: 'Test Task'
        }
      }),
      contentType: 'application/json'
    };

    loadtest.loadTest(options, (error, result) => {
      expect(error).toBeNull();
      expect(result.errorCodes).toEqual({});
      expect(result.averageLatency).toBeLessThan(200);
      done();
    });
  });
});
```

### 9.5 Тесты безопасности
```javascript
// __tests__/security/auth.test.js
describe('Security Tests', () => {
  test('should reject requests without# Product Requirements Document: Business Connect Telegram Bot

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

### 9.5 Тесты безопасности
```javascript
// __tests__/security/auth.test.js
describe('Security Tests', () => {
  test('should reject requests without valid Telegram ID', async () => {
    const response = await fetch('/api/user/goals', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        telegram_id: null
      })
    });

    expect(response.status).toBe(401);
  });

  test('should validate Telegram Web App data signature', async () => {
    const invalidData = {
      user: { id: 123 },
      hash: 'invalid_hash'
    };

    const response = await fetch('/api/auth/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ initData: invalidData })
    });

    expect(response.status).toBe(403);
    expect(await response.json()).toEqual({
      error: 'Invalid Telegram data signature'
    });
  });

  test('should prevent SQL injection in goal creation', async () => {
    const maliciousInput = "'; DROP TABLE goals; --";
    
    const { data, error } = await supabase
      .from('goals')
      .insert({
        title: maliciousInput,
        user_id: 'test-user',
        category: 'finance'
      });

    // Supabase should handle parameterized queries safely
    expect(error).toBeNull();
    
    // Verify table still exists
    const { data: goals } = await supabase
      .from('goals')
      .select('count');
    
    expect(goals).toBeDefined();
  });
});
```

### 9.6 Тесты Realtime функциональности
```javascript
// __tests__/realtime/updates.test.js
import { createClient } from '@supabase/supabase-js';

describe('Realtime Updates', () => {
  let supabase;
  let subscription;

  beforeEach(() => {
    supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );
  });

  afterEach(() => {
    if (subscription) {
      subscription.unsubscribe();
    }
  });

  test('should receive realtime task updates', (done) => {
    const taskId = 'test-task-id';
    let updateReceived = false;

    // Subscribe to changes
    subscription = supabase
      .channel('task-updates')
      .on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'tasks',
        filter: `id=eq.${taskId}`
      }, (payload) => {
        expect(payload.new.status).toBe('completed');
        updateReceived = true;
        done();
      })
      .subscribe();

    // Wait for subscription to be ready
    setTimeout(async () => {
      // Update task
      await supabase
        .from('tasks')
        .update({ status: 'completed' })
        .eq('id', taskId);
    }, 1000);

    // Timeout if update not received
    setTimeout(() => {
      if (!updateReceived) {
        done(new Error('Realtime update not received'));
      }
    }, 5000);
  });
});
```

### 9.7 Мокирование Telegram WebApp
```javascript
// __tests__/mocks/telegram.js
export const mockTelegramWebApp = () => {
  global.window.Telegram = {
    WebApp: {
      initData: 'query_id=123&user=%7B%22id%22%3A123%7D',
      initDataUnsafe: {
        query_id: '123',
        user: {
          id: 123,
          first_name: 'Test',
          last_name: 'User',
          username: 'testuser'
        }
      },
      ready: jest.fn(),
      expand: jest.fn(),
      close: jest.fn(),
      MainButton: {
        text: '',
        show: jest.fn(),
        hide: jest.fn(),
        onClick: jest.fn()
      },
      BackButton: {
        show: jest.fn(),
        hide: jest.fn(),
        onClick: jest.fn()
      },
      HapticFeedback: {
        impactOccurred: jest.fn(),
        notificationOccurred: jest.fn(),
        selectionChanged: jest.fn()
      },
      showAlert: jest.fn(),
      showConfirm: jest.fn(),
      showPopup: jest.fn(),
      themeParams: {
        bg_color: '#ffffff',
        text_color: '#000000',
        hint_color: '#999999',
        link_color: '#0000ff',
        button_color: '#0000ff',
        button_text_color: '#ffffff'
      }
    }
  };
};

// Usage in tests
import { mockTelegramWebApp } from './mocks/telegram';

beforeEach(() => {
  mockTelegramWebApp();
});
```

### 9.8 Тестирование Edge Functions
```javascript
// __tests__/edge-functions/generate-tasks.test.js
import { createClient } from '@supabase/supabase-js';

describe('Generate Tasks Edge Function', () => {
  let supabase;

  beforeEach(() => {
    supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );
  });

  test('should generate tasks for a new goal', async () => {
    // Create test goal
    const { data: goal } = await supabase
      .from('goals')
      .insert({
        title: 'Test Goal',
        category: 'finance',
        target_value: 100000,
        deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days
        user_id: 'test-user'
      })
      .select()
      .single();

    // Call edge function
    const { data, error } = await supabase.functions.invoke('generate-goal-tasks', {
      body: { goalId: goal.id }
    });

    expect(error).toBeNull();
    expect(data.tasks).toBeDefined();
    expect(data.tasks.length).toBeGreaterThan(0);
    
    // Verify tasks were created
    const { data: createdTasks } = await supabase
      .from('tasks')
      .select('*')
      .eq('goal_id', goal.id);

    expect(createdTasks.length).toBe(data.tasks.length);
  });
});
```

### 9.9 Конфигурация тестового окружения
```javascript
// jest.config.js
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@supabase|@telegram-apps)/)'
  ],
  moduleNameMapper: {
    '^@/(.*)

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

Business Connect Telegram Bot предоставляет удобный способ управления бизнес-целями прямо из Telegram. Комбинация push-уведомлений и полноценного web app интерфейса создает оптимальный баланс между простотой и функциональностью, позволяя пользователям оставаться продуктивными без необходимости устанавливать дополнительные приложения.: '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/serviceWorker.js',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};

// jest.setup.js
import '@testing-library/jest-native/extend-expect';
import { mockTelegramWebApp } from './__tests__/mocks/telegram';

// Mock Telegram WebApp globally
beforeEach(() => {
  mockTelegramWebApp();
});

// Mock Supabase
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn(),
    auth: {
      signInWithPassword: jest.fn(),
      signOut: jest.fn(),
      getSession: jest.fn()
    },
    functions: {
      invoke: jest.fn()
    },
    channel: jest.fn(() => ({
      on: jest.fn().mockReturnThis(),
      subscribe: jest.fn().mockReturnThis(),
      unsubscribe: jest.fn()
    }))
  }))
}));

// Silence console during tests
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};
```

### 9.10 Тестирование Business Load алгоритма
```javascript
// __tests__/algorithms/businessLoad.test.js
import { calculateBusinessLoad } from '../../src/utils/businessLoad';

describe('Business Load Algorithm', () => {
  test('should calculate low load for few simple tasks', async () => {
    const tasks = [
      {
        id: '1',
        complexity: 'low',
        cognitive_load: 10,
        estimated_time: 30,
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      },
      {
        id: '2',
        complexity: 'low',
        cognitive_load: 15,
        estimated_time: 45,
        deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
      }
    ];

    const load = await calculateBusinessLoad('test-user', tasks, []);
    expect(load).toBeLessThan(40);
  });

  test('should calculate high load for many complex urgent tasks', async () => {
    const tasks = Array(10).fill(null).map((_, i) => ({
      id: `${i}`,
      complexity: 'high',
      cognitive_load: 35,
      estimated_time: 120,
      deadline: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) // Tomorrow
    }));

    const load = await calculateBusinessLoad('test-user', tasks, []);
    expect(load).toBeGreaterThan(80);
  });

  test('should adjust load based on historical data', async () => {
    const tasks = [
      {
        id: '1',
        complexity: 'medium',
        cognitive_load: 25,
        estimated_time: 60,
        deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
      }
    ];

    const historicalData = Array(30).fill(null).map((_, i) => ({
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000),
      business_load: 45 + Math.random() * 20,
      tasks_completed: 5 + Math.floor(Math.random() * 5)
    }));

    const load = await calculateBusinessLoad('test-user', tasks, historicalData);
    expect(load).toBeGreaterThan(30);
    expect(load).toBeLessThan(70);
  });
});
```

## 10. CI/CD конфигурация

### 10.1 GitHub Actions workflow
```yaml
# .github/workflows/test-and-deploy.yml
name: Test and Deploy

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [18.x, 20.x]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linter
      run: npm run lint
    
    - name: Run unit tests
      run: npm test -- --coverage
    
    - name: Run integration tests
      run: npm run test:integration
      env:
        SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
        SUPABASE_SERVICE_KEY: ${{ secrets.SUPABASE_SERVICE_KEY }}
        TELEGRAM_BOT_TOKEN: ${{ secrets.TELEGRAM_BOT_TOKEN }}
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        token: ${{ secrets.CODECOV_TOKEN }}

  deploy-bot:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to production
      uses: appleboy/ssh-action@v0.1.5
      with:
        host: ${{ secrets.SERVER_HOST }}
        username: ${{ secrets.SERVER_USER }}
        key: ${{ secrets.SERVER_SSH_KEY }}
        script: |
          cd /app/business-connect-bot
          git pull origin main
          npm install --production
          pm2 restart bot

  deploy-webapp:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Build React Native Web
      run: |
        cd webapp
        npm ci
        npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
        working-directory: ./webapp
```

## 11. Схемы взаимодействия компонентов

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

## 9. Рекомендации по дизайну и макетам

### 9.1 Цветовая схема
- Основные цвета:
  - Нейтральный фон (белый/серый для светлой темы)
  - Акцентный цвет для ключевых действий и показателей
  - Цветовая кодировка для статусов (зеленый/желтый/красный)
- Ограниченная палитра для сохранения ясности интерфейса

### 9.2 Типографика
- Четкая иерархия текста
- Достаточный контраст для читаемости
- Ограниченное количество шрифтов (1-2)
- Соответствие платформенным гайдлайнам

### 9.3 Иконография
- Консистентный набор иконок
- Интуитивно понятные символы
- Подписи к иконкам где необходимо

### 9.4 Анимации и переходы
- Сдержанная анимация для обратной связи
- Плавные переходы между экранами
- Анимации достижений для геймификации

## 10. Рекомендуемые макеты для разработки MVP

1. Экран входа/регистрации
2. Онбординг и настройка первой цели
3. Главный дашборд
4. Экран ежедневных задач
5. Экран создания/редактирования цели
6. Базовый аналитический экран
7. Экран еженедельного отчета
8. Экран настроек
