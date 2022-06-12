const mongoCurrency = require("discord-mongo-currency")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {    
    const randomCoins = Math.floor(Math.random() * 20);

    const user = await mongoCurrency.findUser(message.author.id, message.guild.id);
    const coinsInWallet = user.coinsInWallet;

    let newEmbed = new Discord.MessageEmbed()

    if(isNaN(args[1]) && isNaN(parseFloat(args[0]))) {
        newEmbed = newEmbed.setTitle("Please enter a valid number!")
        .setDescription("That's not a real number, you have no chance of winning!")
        .setColor('DARK_RED');
        return message.channel.send({embeds: [newEmbed]});
    }

    if(parseInt(args[0]) < 0) {
        newEmbed = newEmbed.setTitle("Your number is too small!")
        .setDescription("My number is between 0 and 20, you have no chance of winning!")
        .setColor('DARK_RED');
        return message.channel.send({embeds: [newEmbed]});
    }

    if(parseInt(args[0]) > 20 || parseInt(args[0]) < 0) {
        newEmbed = newEmbed.setTitle("Your number is too big!")
        .setDescription("My number is between 0 and 20, you have no chance of winning!")
        .setColor('DARK_RED');
        return message.channel.send({embeds: [newEmbed]});
    }

    if(parseInt(args[0]) == randomCoins) {
        mongoCurrency.giveCoins(message.author.id, message.guild.id, 4000);
        newEmbed = newEmbed.setTitle("Congratulations!")
        .setDescription("You guessed the correct number and you won 4000 coins!")
        .setColor('GREEN');
        return message.channel.send({embeds: [newEmbed]});
    } else {
        newEmbed = newEmbed.setTitle("Unlucky!")
        .setDescription(`You guessed the wrong number! The number was ${randomCoins}!`)
        .setColor('DARK_RED');
        return message.channel.send({embeds: [newEmbed]});
    }
}

module.exports.config = {
    name: 'guess',
    description: 'Guess a number for some coins!',
    cooldown: 10,
    category: 'Economy'
}