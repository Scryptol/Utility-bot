const mongoCurrency = require("discord-mongo-currency")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {
    const possibleCoins = [0, 20, 1350, 600, 40, 70, 0, 5000];
    const placesToSearch = ['trash', 'train station', 'school', 'bank', 'streets']

    const random = Math.floor(Math.random() * possibleCoins.length);
    const random2 = Math.floor(Math.random() * placesToSearch.length);

    if(possibleCoins[random] != 0) {
        mongoCurrency.giveCoins(message.author.id, message.guild.id, possibleCoins[random]);
    } 

    message.reply(`You searched in the ${placesToSearch[random2]} and found ${possibleCoins[random]} coins!`);
}

module.exports.config = {
    name: 'search',
    description: 'Search for some coins!',
    cooldown: 40,
    category: 'Economy'
}