module.exports = {
	name: 'kick',
	description: 'Отметьте участника и пните его (но не совсем).',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('вам нужно пометить пользователя, чтобы выгнать его!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`Вы хотели ударить:  ${taggedUser.username}`);
	},
};
