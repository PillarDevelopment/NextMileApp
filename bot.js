const { Telegraf } = require('telegraf');
const bot = new Telegraf(' ');

// Важно: используем keyboard, а не inline_keyboard
bot.start((ctx) => {
  const webAppUrl = 'https://next-mile-app.vercel.app';

  ctx.reply('Добро пожаловать в NextMile! 🚀', {
    reply_markup: {
      keyboard: [
        [
          {
            text: '📱 Открыть NextMile App',
            web_app: { url: webAppUrl }
          }
        ]
      ],
      resize_keyboard: true,
      persistent: true,
      one_time_keyboard: false
    }
  });
});

// Команда для установки menu button
bot.command('setmenu', async (ctx) => {
  try {
    await ctx.telegram.setChatMenuButton({
      chat_id: ctx.chat.id,
      menu_button: {
        type: 'web_app',
        text: 'NextMile',
        web_app: {
          url: 'https://next-mile-app.vercel.app'
        }
      }
    });

    ctx.reply('✅ Menu button установлен! Теперь вы можете открыть приложение через кнопку меню.');
  } catch (error) {
    console.error('Error setting menu button:', error);
    ctx.reply('❌ Ошибка при установке menu button: ' + error.message);
  }
});

// Обработка данных от WebApp
bot.on('web_app_data', (ctx) => {
  const data = ctx.webAppData.data;
  console.log('Received data from WebApp:', data);
  ctx.reply(`Получены данные: ${data}`);
});

// Команда для тестирования
bot.command('test', (ctx) => {
  const debugInfo = {
    chat_id: ctx.chat.id,
    user_id: ctx.from.id,
    username: ctx.from.username,
    first_name: ctx.from.first_name,
  };

  ctx.reply(`Debug info:\n${JSON.stringify(debugInfo, null, 2)}`);
});

bot.launch();
console.log('Bot started successfully!');