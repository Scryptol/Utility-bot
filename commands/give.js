const mongoCurrency = require("discord-mongo-currency");
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {
    const member = message.mentions.members.first();

    let newEmbed = new Discord.MessageEmbed();

    if(!member) {
        newEmbed = newEmbed.setTitle("How am I supposed to know?")
        .setDescription("You need to mention a valid member to give your money to!")
        .setColor("DARK_RED")

        return message.channel.send({embeds: [newEmbed]})
    }

    if(!args[1]) return;

    if(isNaN(args[1]) && isNaN(parseFloat(args[0]))) {
        newEmbed = newEmbed.setTitle("Come on now")
        .setDescription("You need to say an amount of coins to give them!")
        .setColor("DARK_RED")

        return message.channel.send({embeds: [newEmbed]})
    }

    if(parseInt(args[1]) < 0) {
        newEmbed = newEmbed.setTitle("Are you trying to steal their coins?")
        .setDescription("You can't give somebody negative coins!")
        .setColor("DARK_RED")

        return message.channel.send({embeds: [newEmbed]})
    }

    console.log(await mongoCurrency.findUser(message.author.id, message.guild.id).coinsInWallet);
    console.log(parseInt(args[1]));

    const user = await mongoCurrency.findUser(message.author.id, message.guild.id);
    const coinsInWallet = user.coinsInWallet;

    if(coinsInWallet > parseInt(args[1])) {
        await mongoCurrency.giveCoins(member.id, message.guild.id, `${args[1]}`);
        await mongoCurrency.deductCoins(message.author.id, message.guild.id, `${args[1]}`);

        newEmbed = newEmbed.setTitle("Aww, how sweet of you")
        .setDescription(`You gave ${member} ${args[1]} coins!`)
        .setColor('GREEN')

        return message.channel.send({embeds: [newEmbed]})
    } else {
        newEmbed = newEmbed.setTitle("Put your money where your mouth is!")
        .setDescription(`You don't have enough coins for this!`)
        .setColor('DARK_RED')

        return message.channel.send({embeds: [newEmbed]})
    }
}

module.exports.config = {
    name: 'give',
    description: 'Gives another user some of your money!',
    cooldown: 15,
    category: 'Economy'
}