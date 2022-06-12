const path = require('path');
const Discord = require('discord.js');
const mongoose = require('mongoose');
const mongoCurrency = require('discord-mongo-currency');
const mongoCurrencyFork = require('discord-mongo-currency-fork')

const profileModel = require('./models/profileSchema.js');

const prefix = '.';

const bannedWords = [
    
]

const client = new Discord.Client({ intents: 
    [
        Discord.Intents.FLAGS.GUILDS, 
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_INTEGRATIONS
    ] });

mongoose.connect('mongodb+srv://DiscordBot:RubiksCube10@crusadesbot.enmk5.mongodb.net/Data', { useNewUrlParser: true}, {useUnifiedTopology: true});
mongoCurrency.connect('mongodb+srv://DiscordBot:RubiksCube10@crusadesbot.enmk5.mongodb.net/Data', { useNewUrlParser: true}, {useUnifiedTopology: true})
mongoCurrencyFork.connect('mongodb+srv://DiscordBot:RubiksCube10@crusadesbot.enmk5.mongodb.net/Data', { useNewUrlParser: true}, {useUnifiedTopology: true})

const fs = require('fs');
const { string } = require('fx/config');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    console.log(commandFiles);

    const command = require(`./commands/${file}`);

    client.commands.set(command.config.name, command);
}

client.once('ready', () => {
    console.log('Bot is online!');

    client.user.setActivity(prefix + "help");
});

client.on('guildMemberAdd', guildMember => {
    const memberAdd = require('./events/guildMemberAdd.js')

    memberAdd.execute(client, guildMember)
});

client.on('messageCreate', message => {
    const messagejs = require('./events/message.js')

    messagejs.execute(client, message, client.commands)
});

client.login('OTY1Mzc0MDcyNTcxNzExNTI4.YlyQqg.O4gBgc4YAs_MIOP18eaf3IrcDtU');