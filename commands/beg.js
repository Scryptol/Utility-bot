const mongoCurrency = require("discord-mongo-currency")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {
    const possiblePeople = [
        'old lady',
        'old man',
        'young boy',
        'young girl',
        'middle aged man',
        'bus driver',
        'english teacher',
        'maths teacher',
        'geography teacher',
        'scientist'
    ]

    const randomCoins = Math.floor(Math.random() * 99) + 1; // Random amount of coins.
    const randomPerson = Math.floor(Math.random() * possiblePeople.length)

    await mongoCurrency.giveCoins(message.member.id, message.guild.id, randomCoins);

    message.reply(`You begged for some coins and a friendly ${possiblePeople[randomPerson]} gave you ${randomCoins} coins!`);
}

module.exports.config = {
    name: 'beg',
    description: 'Beg for some coins!',
    cooldown: 30,
    category: 'Economy'
}