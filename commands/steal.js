const mongoCurrency = require("discord-mongo-currency")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {
    const randomChance = Math.floor(Math.random() * 2);

    const memberToRob = message.mentions.members.first();

    let newEmbed = new Discord.MessageEmbed();

    if(!memberToRob) {
        newEmbed = newEmbed.setTitle("I need to know who to steal from, idiot")
        .setDescription("You need to specify a member to steal from!")
        .setColor("DARK_RED");

        return message.channel.send({embeds: [newEmbed]})
    }

    const userToRob = await mongoCurrency.findUser(memberToRob.id, message.guild.id);
    const coinsInVictimsWallet = userToRob.coinsInWallet;

    const user = await mongoCurrency.findUser(message.author.id, message.guild.id);
    const coinsInWallet = user.coinsInWallet;

    if(coinsInWallet < 500 ) {
        newEmbed = newEmbed.setTitle("LMAO poor boy")
        .setDescription("You need at least 500 coins to use the steal command!")
        .setColor("DARK_RED");

        return message.channel.send({embeds: [newEmbed]})
    }

    if(coinsInVictimsWallet < 500) {
        newEmbed = newEmbed.setTitle("Stop bullying people smh")
        .setDescription("The other person need at least 500 coins to use the steal command, otherwise its not fair on them!")
        .setColor("DARK_RED");

        return message.channel.send({embeds: [newEmbed]})
    }

    if(randomChance == 0) {
        mongoCurrency.deductCoins(message.author.id, message.guild.id, coinsInWallet / 2);

        newEmbed = newEmbed.setTitle("Caught red-handed!")
        .setDescription("You failed and you lost half of your money as a consequence!")
        .setColor("DARK_RED");

        return message.channel.send({embeds: [newEmbed]})
    } else {
        mongoCurrency.giveCoins(message.author.id, message.guild.id, coinsInVictimsWallet / 2)
        mongoCurrency.deductCoins(memberToRob.id, message.guild.id, coinsInVictimsWallet / 2);

        newEmbed = newEmbed.setTitle("Sneaky!")
        .setDescription("You succeeded and you stole 50% of their money! Nice job!")
        .setColor("GREEN");

        return message.channel.send({embeds: [newEmbed]})
    }
}

module.exports.config = {
    name: 'steal',
    description: 'Steal from another user!',
    cooldown: 120,
    category: 'Economy'
}