require('dotenv').config();

const webAppUrl = process.env.URL;

// const webAppUrl = 'https://chic-lolly-1605d1.netlify.app';

module.exports = {
	menu: {
		reply_markup: {
			keyboard: [
				[{ text: 'Направления деятельности' }],
				[{ text: 'Социальные сети' }],
				[{ text: 'Сотрудничество' }],
			],
		}
	},
	cats: {
		reply_markup: {
			keyboard: [
				[{ text: 'Спорт' }, { text: 'Бизнес' }],
				[{ text: 'Культура и образование' }],
				[{ text: 'Назад', }],
			],
		}
	}
}