const fs = require('fs');// Подключаем родной модуль файловой системы node.js
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const { prefix, token } = require('./config.json'); // Подключаем файл с параметрами и информацией

const client = new Discord.Client(); // Объявляем, что robot - бот
client.commands = new Discord.Collection(); // Подключаем папку с командами для бота

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log(`Запустился бот ${client.user.username}`);
  
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);
