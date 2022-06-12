const mongoCurrency = require("discord-mongo-currency")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {
    const randomCoins = Math.floor(Math.random() * 99) + 1; // Random amount of coins.

    await mongoCurrency.giveCoins(message.member.id, message.guild.id, randomCoins);

    message.reply(`You dug and you found ${randomCoins} coins!`);
}

module.exports.config = {
    name: 'dig',
    description: 'Dig for some coins!',
    cooldown: 30,
    category: 'Economy'
}