module.exports = {
	name: 'clear',
	description: 'Сократить до 99 сообщений.',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('Это не похоже на действительное число.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('Вам нужно ввести число от 1 до 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('Произошла ошибка при попытке удалить сообщения на этом канале!');
		});
	},
};
