const { Telegraf } = require('telegraf');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

const WEB_APP_URL = process.env.WEB_APP_URL || 'https://next-mile-app.vercel.app';

// /start — приветствие и web_app-кнопка
bot.start((ctx) => {
  ctx.reply('👋 Добро пожаловать в NextMile! Откройте дашборд по кнопке ниже:', {
    reply_markup: {
      inline_keyboard: [[
        { text: 'Открыть NextMile', web_app: { url: WEB_APP_URL } }
      ]]
    }
  });
});

// /dashboard — заглушка (пример интеграции с Supabase)
bot.command('dashboard', async (ctx) => {
  const telegramId = ctx.from.id;
  // Пример: ищем пользователя по telegram_id (таблица users должна быть в Supabase)
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('telegram_id', telegramId)
    .single();
  if (error || !user) {
    ctx.reply('Пользователь не найден в базе. Зарегистрируйтесь через WebApp!');
    return;
  }
  ctx.reply(`Ваш дашборд (заглушка):\nИмя: ${user.name || '—'}\nID: ${user.id}`);
});

// /help — краткая справка
bot.help((ctx) => {
  ctx.reply('Доступные команды:\n/start — открыть WebApp\n/dashboard — ваш дашборд');
});

bot.launch();
console.log('NextMileBot запущен!'); 