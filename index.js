require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const { menu, cats } = require('./keyboards');

const token = process.env.TOKEN;
process.env["NTBA_FIX_350"] = 1;

const express = require('express');
const app = express();

app.use(express.json());

const bot = new TelegramBot(token, { polling: true });

const port = process.env.PORT;

app.listen(port, () =>
	console.log(`App is listening on port ${port}.`)
);

app.get('/api', async (req, res) => {
	return res.json('work');
})

const start = async () => {

	try {
		console.log('Connection has been established successfully.');
	} catch (e) {
		console.log('Подключение сломалось', e);
	}

	bot.setMyCommands([])

	bot.on('message', async (msg) => {
		const text = msg.text;
		const chatId = msg.chat.id;

		try {
			if (text === '/start') {
				return bot.sendMessage(
					chatId,
					`Добро пожаловать в телеграм бота Батыревского сообщества`,
					menu
				)
			} else if (text === 'Сотрудничество') {
				return bot.sendMessage(
					chatId,
					`Есть предложения? Пиши нам на почту batyr21zem@gmail.com`,
					menu
				)
			} else if (text === 'Социальные сети') {
				await bot.sendMessage(
					chatId,
					`https://vk.com/batyrzem21`,
					menu
				)
				await bot.sendMessage(
					chatId,
					`https://ok.ru/batyrzem21`,
					menu
				)
				return bot.sendMessage(
					chatId,
					`Подписывайтесь и будьте в курсе всех новостей!`,
					menu
				)
			} else if (text === 'Категории') {
				return bot.sendMessage(
					chatId,
					`Выбери категорию:`,
					cats
				)
			} else if (text === 'Спорт') {
				await bot.sendMessage(
					chatId,
					`Все о спорте. О спортсменах, тренерах. Спортивные секции. Соревнования и турниры.`,
					menu
				)
				return bot.sendMessage(
					chatId,
					`@sport_batyrzem21`,
					menu
				)
			} else if (text === 'Бизнес') {
				await bot.sendMessage(
					chatId,
					`Бизнес. Коммерция. Трудоустройство.`,
					menu
				)
				return bot.sendMessage(
					chatId,
					`@biz_batyrzem21`,
					menu
				)
			} else if (text === 'Культура') {
				await bot.sendMessage(
					chatId,
					`Все о культурной жизни и творчестве уроженцев Батыревского района`,
					menu
				)
				return bot.sendMessage(
					chatId,
					`@kultura_batyrzem21`,
					menu
				)
			} else if (text === 'Назад') {
				return bot.sendMessage(
					chatId,
					`Что тебя интересует?`,
					menu
				)
			}
		} catch (error) {
			console.log(error);
		}
	})
}

start();