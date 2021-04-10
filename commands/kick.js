module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('вам нужно пометить пользователя, чтобы выгнать его!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`Вы хотели ударить:  ${taggedUser.username}`);
	},
};
