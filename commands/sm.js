const Discord = require("discord.js");

module.exports.execute = async(client, message, args) => {
    if(!message.member.permissions.has('ADMINISTRATOR') && !message.member.roles.cache.some(role => role.name === 'Moderator')) return;

    let newEmbed = new Discord.MessageEmbed();

    if(!isNaN(args[0]) && !isNaN(parseFloat(args[0]))) {
        if(args[0] < 3600) {
            message.channel.setRateLimitPerUser(Math.floor(args[0]));

            newEmbed = newEmbed.setTitle("Set Slowmode")
            .setDescription('Slowmode set to ' + Math.floor(args[0]) + ' second(s)!')
            .setColor('GREEN')
            message.channel.send({embeds: [newEmbed]});
        } else {
            newEmbed = mewEmbed.setTitle("Are you trying to kill your server!?")
            .setDescription('Cannot set slowmode to more than 1 hour (3600 seconds)')
            .setColor("DARK_RED")

            message.channel.send({embeds: [newEmbed]});
        }
    }
}

module.exports.config = {
    name: 'sm',
    description: 'Moderator Only. Sets the slowmode of a channel',
    cooldown: 0,
    category: 'Admin'
}