const mongoCurrency = require("discord-mongo-currency")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {
    const randomCoins = Math.floor(Math.random() * 7000) + 5000; // Random amount of coins.

    await mongoCurrency.giveCoins(message.member.id, message.guild.id, randomCoins);

    let newEmbed = new Discord.MessageEmbed()
    .setTitle("Weekly rewards!")
    .setDescription(`You claimed your weekly reward and you got ${randomCoins} coins!`)
    .setColor("GREEN");

    message.channel.send({embeds: [newEmbed]});
}

module.exports.config = {
    name: 'weekly',
    description: 'Get your weekly coins!',
    cooldown: 604800,
    category: 'Economy'
}