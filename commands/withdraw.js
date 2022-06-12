const mongoCurrency = require("discord-mongo-currency-fork")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {    
    const randomCoins = Math.floor(Math.random() * 6);

    const user = await mongoCurrency.findUser(message.author.id, message.guild.id);
    const coinsInWallet = user.coinsInBank;

    let newEmbed = new Discord.MessageEmbed();

    if(!isNaN(args[0]) && !isNaN(parseFloat(args[0]))) {
        if(parseInt(args[0]) < 0) {
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
        
        newEmbed = newEmbed.setTitle("Withdrawed coins!")
        .setDescription(`Successfully Withdrawed ${args[0]} coins into your wallet!`)
        .setColor("GREEN")

        message.channel.send({embeds: [newEmbed]})

        mongoCurrency.withdraw(message.author.id, message.guild.id, parseFloat(args[0]));
    } else {
        message.reply("Please enter a valid number!");
        return;
    }
}

module.exports.config = {
    name: 'withdraw',
    description: 'Withdraw your coins from your bank into your wallet!',
    cooldown: 30,
    category: 'Economy'
}