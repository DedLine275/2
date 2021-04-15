	module.exports = {
	name: 'args-info',
	description: 'Информация о приведенных аргументах.',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`Вы не предоставили никаких аргументов, ${message.author}!`);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Первый аргумент: ${args[0]}`);
	},
};
