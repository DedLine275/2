module.exports = {
	name: 'heads_or_tails',
//mess.channel.send('Монета подбрасывается...')
execute(message, args) {
  const random = Math.floor(Math.random() * 4) + 1; // Объявление переменной random - она вычисляет случайное число от 1 до 3

if (random === 1) { // Если вычислено число 1, то выпадает орёл.
    return message.reply(':full_moon: Орёл!')
} else if (random === 2) { // Если вычислено число 2, то выпадает решка.
    return message.reply(':new_moon: Решка!')
} else if (random === 3) { // Если вычислено число 3, то монета падает ребром.
    return message.reply(':last_quarter_moon: Монета упала ребром!')
  }




/*
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
*/
