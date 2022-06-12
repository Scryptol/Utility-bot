const mongoCurrency = require("discord-mongo-currency")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {    
    const randomCoins = Math.floor(Math.random() * 6);

    const user = await mongoCurrency.findUser(message.author.id, message.guild.id);
    const coinsInWallet = user.coinsInWallet;

    let newEmbed = new Discord.MessageEmbed();

    if(isNaN(args[1]) && isNaN(parseFloat(args[0]))) {
        newEmbed = newEmbed.setTitle("How am I supposed to know?")
        .setDescription(`You need to say a valid number of coins to bet on!`)
        .setColor('DARK_RED')

        return message.channel.send({embeds: [newEmbed]})
    }

    if(parseInt(args[0]) < 0) {
        newEmbed = newEmbed.setTitle("Come on now")
        .setDescription(`The number can't be less than 0!`)
        .setColor('DARK_RED')

        return message.channel.send({embeds: [newEmbed]})
    }

    if(coinsInWallet < parseInt(args[0])) {
        newEmbed = newEmbed.setTitle("LMAO poor boy 💀")
        .setDescription(`You don't have enough coins for this!`)
        .setColor('DARK_RED')

        return message.channel.send({embeds: [newEmbed]})
    };

    if(randomCoins > 3) {
        if(args[0]) {
                mongoCurrency.giveCoins(message.author.id, message.guild.id, args[0]);

                newEmbed = newEmbed.setTitle("GGs, you won!")
                .setDescription(`You won ${args[0]} coins from the bet!`)
                .setColor('GREEN')
        
                return message.channel.send({embeds: [newEmbed]})
        }
    } else {
        if(args[0]) {
                mongoCurrency.deductCoins(message.author.id, message.guild.id, args[0]);

                newEmbed = newEmbed.setTitle("L, you lost!")
                .setDescription(`You lost ${args[0]} coins from the bet!`)
                .setColor('DARK_RED')
        
                return message.channel.send({embeds: [newEmbed]})
        }
    }
}

module.exports.config = {
    name: 'bet',
    description: 'Bet on some coins!',
    cooldown: 60,
    category: 'Economy'
}