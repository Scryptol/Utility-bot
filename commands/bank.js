const mongoCurrency = require("discord-mongo-currency-fork")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {    
    const randomCoins = Math.floor(Math.random() * 6);

    const user = await mongoCurrency.findUser(message.author.id, message.guild.id);
    const coinsInWallet = user.coinsInWallet;
    const spaceInBank = user.bankSpace;

    let newEmbed = new Discord.MessageEmbed();

    if(!isNaN(args[0]) && !isNaN(parseFloat(args[0]))) {
        if(parseInt(args[0]) <= 0) {
            newEmbed.setTitle("Come on now")
            .setDescription("Amount must not be less than 0!")
            .setColor("DARK_RED");

            return message.channel.send({embeds: [newEmbed]});
        }
    
        if(coinsInWallet < parseInt(args[0])) {
            newEmbed.setTitle("LMAO poor boy")
            .setDescription("You don't have enough coins for this!")
            .setColor("DARK_RED");

            return message.channel.send({embeds: [newEmbed]});
        }
        
        newEmbed = newEmbed.setTitle("Deposited coins!")
        .setDescription(`Successfully deposited ${args[0]} coins into your bank!`)
        .setColor("GREEN")

        message.channel.send({embeds: [newEmbed]})

        mongoCurrency.deposit(message.author.id, message.guild.id, parseFloat(args[0]));
    } else {
        if(args[0] = 'all') {
            mongoCurrency.deposit(message.author.id, message.guild.id, user.coinsInWallet)

            newEmbed = newEmbed.setTitle("Deposited coins!")
            .setDescription(`Successfully deposited ${args[0]} coins into your bank!`)
            .setColor("GREEN")

            return message.channel.send({embeds: [newEmbed]});
        }

        newEmbed = newEmbed.setTitle("Come on now")
        .setDescription(`Please enter a valid number!`)
        .setColor("GREEN")

        return message.channel.send({embeds: [newEmbed]});
    }
}

module.exports.config = {
    name: 'bank',
    description: 'Deposit your coins into your bank!',
    cooldown: 30,
    category: 'Economy'
}