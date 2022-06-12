const mongoCurrency = require("discord-mongo-currency")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {
    const randomCoins = Math.floor(Math.random() * 3000) + 2000; // Random amount of coins.

    await mongoCurrency.giveCoins(message.member.id, message.guild.id, randomCoins);

    let newEmbed = new Discord.MessageEmbed()
    .setTitle("Daily rewards!")
    .setDescription(`You claimed your daily reward and you got ${randomCoins} coins!`)
    .setColor("GREEN");

    message.channel.send({embeds: [newEmbed]});
}

module.exports.config = {
    name: 'daily',
    description: 'Get your daily coins!',
    cooldown: 86400,
    category: 'Economy'
}