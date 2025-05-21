require('dotenv').config();
const { Telegraf } = require('telegraf');
const { supabase } = require('./supabaseClient');

const BOT_TOKEN = process.env.BOT_TOKEN;
const WEB_APP_URL = process.env.WEB_APP_URL;
if (!BOT_TOKEN) {
  console.error('❌ Необходимо указать BOT_TOKEN в .env');
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

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

bot.launch();
console.log('✅ Бот запущен');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM')); 