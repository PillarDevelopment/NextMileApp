require('dotenv').config();
const { Telegraf, Scenes, session } = require('telegraf');
const { supabase } = require('./supabaseClient');
const { createGoal, getGoals } = require('./goals');

const BOT_TOKEN = process.env.BOT_TOKEN;
const WEB_APP_URL = process.env.WEB_APP_URL;
if (!BOT_TOKEN) {
  console.error('❌ Необходимо указать BOT_TOKEN в .env');
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

// Категории целей
const GOAL_CATEGORIES = [
  { value: 'finance', label: 'Финансы' },
  { value: 'marketing', label: 'Маркетинг' },
  { value: 'product', label: 'Продукт' },
  { value: 'sales', label: 'Продажи' },
  { value: 'legal', label: 'Юридические' },
  { value: 'government', label: 'Государство' },
  { value: 'other', label: 'Прочее' },
];

// Сцена создания цели
const addGoalWizard = new Scenes.WizardScene(
  'add-goal-wizard',
  async (ctx) => {
    ctx.reply('Введите название цели:');
    ctx.wizard.state.goal = {};
    return ctx.wizard.next();
  },
  async (ctx) => {
    ctx.wizard.state.goal.title = ctx.message.text;
    // Выбор категории
    await ctx.reply('Выберите категорию цели:', {
      reply_markup: {
        inline_keyboard: GOAL_CATEGORIES.map(cat => [{ text: cat.label, callback_data: `cat_${cat.value}` }])
      }
    });
    return ctx.wizard.next();
  },
  async (ctx) => {
    if (ctx.callbackQuery) {
      const cat = ctx.callbackQuery.data.replace('cat_', '');
      ctx.wizard.state.goal.category = cat;
      await ctx.answerCbQuery();
      await ctx.reply('Введите дедлайн (в формате ГГГГ-ММ-ДД):');
      return ctx.wizard.next();
    }
    await ctx.reply('Пожалуйста, выберите категорию через кнопки.');
  },
  async (ctx) => {
    ctx.wizard.state.goal.end_date = ctx.message.text;
    await ctx.reply('Введите целевое значение (например, 100000):');
    return ctx.wizard.next();
  },
  async (ctx) => {
    ctx.wizard.state.goal.target_value = ctx.message.text;
    // Сохраняем цель
    try {
      const goal = ctx.wizard.state.goal;
      await createGoal(ctx.from.id, {
        title: goal.title,
        category: goal.category,
        end_date: goal.end_date,
        target_value: parseFloat(goal.target_value),
        status: 'active',
      });
      await ctx.reply('🎯 Цель успешно создана!');
    } catch (e) {
      await ctx.reply('Ошибка при создании цели: ' + e.message);
    }
    return ctx.scene.leave();
  }
);

const stage = new Scenes.Stage([addGoalWizard]);

bot.use(session());
bot.use(stage.middleware());

bot.start(async (ctx) => {
  const telegramId = String(ctx.from.id);
  // Проверяем, есть ли пользователь
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('telegram_id', telegramId)
    .single();
  if (!user) {
    // Регистрируем пользователя
    await supabase.from('users').insert({ telegram_id: telegramId });
  }
  await ctx.reply('👋 Добро пожаловать в NextMile! Откройте WebApp для продолжения:', {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'Открыть NextMile',
            web_app: { url: WEB_APP_URL },
          },
        ],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.help((ctx) => {
  ctx.reply('ℹ️ Доступные команды:\n/start — запуск\n/help — помощь\n/status — статус аккаунта');
});

bot.command('status', async (ctx) => {
  const telegramId = String(ctx.from.id);
  const { data: user } = await supabase
    .from('users')
    .select('*')
    .eq('telegram_id', telegramId)
    .single();
  if (user) {
    ctx.reply(`✅ Вы зарегистрированы. Ваш Telegram ID: ${telegramId}`);
  } else {
    ctx.reply('❌ Пользователь не найден. Используйте /start для регистрации.');
  }
});

bot.command('addgoal', (ctx) => ctx.scene.enter('add-goal-wizard'));

bot.command('goals', async (ctx) => {
  try {
    const goals = await getGoals(ctx.from.id);
    if (!goals.length) {
      await ctx.reply('У вас пока нет целей. Используйте /addgoal для создания.');
      return;
    }
    for (const goal of goals) {
      await ctx.replyWithMarkdown(
        `*${goal.title}*
Категория: ${goal.category || '-'}
Дедлайн: ${goal.end_date || '-'}
Прогресс: ${goal.progress || 0}%
Целевое значение: ${goal.target_value || '-'}
Статус: ${goal.status || '-'}

ID цели: '${goal.id}'`
      );
    }
  } catch (e) {
    await ctx.reply('Ошибка при получении целей: ' + e.message);
  }
});

bot.launch();
console.log('✅ Бот запущен');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM')); 