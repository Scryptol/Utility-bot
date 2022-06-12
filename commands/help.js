const mongoCurrency = require("discord-mongo-currency")
const Discord = require('discord.js');

const fs = require('fs');

module.exports.execute = async(client, message, args) => {
    const commandFiles = fs.readdirSync(__dirname);

    if(!args[0]) {
        let embed = new Discord.MessageEmbed()
        .setTitle('I need a valid category!')
        .setDescription('You need to put a valid category! The possible categories are: "economy", "fun", "admin"')
        .setColor("DARK_RED")

        return message.channel.send({embeds: [embed]});
    }

    let newEmbed = new Discord.MessageEmbed()
    .setTitle(`List of all ${args[0].toLowerCase()} commands!`)

    if(args[0].toLowerCase() == 'economy') {
        for(const file of commandFiles) {
            console.log(commandFiles);
    
            const command = require(`./${file}`);
    
            if(command.config.category == 'Economy') {
                newEmbed = newEmbed.addField(command.config.name, command.config.description)
                .setColor("GREEN")
            }
        }
    } else if(args[0].toLowerCase() == 'fun') {
        for(const file of commandFiles) {
            console.log(commandFiles);
    
            const command = require(`./${file}`);
    
            if(command.config.category == 'Fun') {
                newEmbed = newEmbed.addField(command.config.name, command.config.description)
                .setColor("GREEN")
            }
        }
    } else if(args[0].toLowerCase() == 'admin') {
        for(const file of commandFiles) {
            console.log(commandFiles);
    
            const command = require(`./${file}`);
    
            if(command.config.category == 'Admin') {
                newEmbed = newEmbed.addField(command.config.name, command.config.description)
                .setColor("GREEN")
            }
        }
    } else {
        let embed = new Discord.MessageEmbed()
        .setTitle('I need a valid category!')
        .setDescription('You need to put a valid category! The possible categories are: "economy", "fun", "admin"')
        .setColor("DARK_RED")

        return message.channel.send({embeds: [embed]});
    }

    message.channel.send({embeds: [newEmbed]});
}

module.exports.config = {
    name: 'help',
    description: 'Shows a list of all the commands!',
    cooldown: 0,
    category: 'Utility'
}