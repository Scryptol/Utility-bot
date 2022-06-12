const mongoCurrency = require("discord-mongo-currency")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {
    const member = message.mentions.members.first() || message.member;
 
    const user = await mongoCurrency.findUser(member.id, message.guild.id);
 
    const embed = new Discord.MessageEmbed()
    .setTitle(`${member.user.username}'s Balance`)
    .setDescription(`Wallet: ${user.coinsInWallet}
    Bank: ${user.coinsInBank}
    Total: ${user.coinsInBank + user.coinsInWallet}`)
    .setColor('GREEN')
    
    message.channel.send({embeds: [embed]});
}

module.exports.config = {
    name: 'bal',
    description: 'Check your balance!',
    cooldown: 5,
    category: 'Economy'
}