// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
token = '[your_token]'

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES);
// Create a new client instance
const client = new Client({ intents: myIntents });



// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get('[join_channel]').send('Welcome, Imperial citizen. Identification: ' + member.user.username + '!'); 
});

client.on('messageCreate', message => {
	let tag = client.users.cache.get(message.author);
	if (message.mentions.has(client.user) && message.content.includes("birthday")) {
        message.channel.send('Enjoy your birthday, Imperial citizen. Identification: ' + message.author.username + '.'); 
    }
	if (message.mentions.has(client.user) && !message.content.includes("birthday")) {
		message.channel.send('Good hello to ' + message.author.username + '!');
	}
});
