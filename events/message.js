const profileModel = require('../models/profileSchema.js')
const Discord = require('discord.js')

const midDuel = new Set();

const prefix = '.'

const cooldowns = new Map();

module.exports.execute = async(client, message, cmds) => {
    if(message.content.toLowerCase().includes('ratio')) {
        message.react('🇼')
        message.react('🇱')
    }

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if(!message.content.startsWith(prefix)) return;
    
    let profileData;
    try {
        profileData = await profileModel.findOne({userID: message.author.id });
        if(!profileData) {
            profileData = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                pokemons: [],
                ownsStarter: 0
            })
        }
    } catch(err) {
        console.log(err);
    }
    
    const possibleMessages = [
        "Slow it down a bit",
        "Take a breather",
        "Hey, slow it down",
        "You're going too fast",
        "Wait a bit",
        "Woah, slow down there"
    ]
    
    const random = Math.floor(Math.random() * possibleMessages.length);
    
    const commandfile = cmds.get(cmd.slice(prefix.length));

    if(cmd.slice(prefix.length) == 'chess') {
        console.log("chess")

        const opponent = message.mentions.users.first();

        if (!opponent) return message.channel.send(`Please mention who you want to challenge at chess.`);
        
        const Chess = require('../chess.js')
        const game = new Chess({
            message: message,
            opponent: opponent,
            midDuel, midDuel
        })

        game.start()
    } if(cmd.slice(prefix.length) == 'tictactoe') {
        console.log("ttt")

        const opponent = message.mentions.users.first();

        if (!opponent) return message.channel.send(`Please mention who you want to challenge at tictactoe.`);
        
        const TicTacToe = require('../tictactoe.js')
        const game = new TicTacToe({
            message: message,
            opponent: opponent,
            xEmoji: '<:xEmoji:973277687055515660>',
            oEmoji: '<:oEmoji:973277570353209354>',
            midDuel: midDuel,
        })

        game.start()
    }

    if(commandfile) {
        if(!cooldowns.has(commandfile.config.name)){
            cooldowns.set(commandfile.config.name, new Discord.Collection());
        }
    
        const current_time = Date.now();
        const time_stamps = cooldowns.get(commandfile.config.name);
        const cooldown_amount = (commandfile.config.cooldown) * 1000;
    
        if(time_stamps.has(message.author.id)){
            const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;
    
            if(current_time < expiration_time){
                const time_left = (expiration_time - current_time) / 1000;
    
                let shortenedTimeLeft = "";
    
                if(time_left >= 0 && time_left < 60) {
                    shortenedTimeLeft = `${Math.floor(time_left)}s`
                } else if(time_left >= 60 && time_left < 3600) {
                    shortenedTimeLeft = `${Math.floor(time_left / 60)}m`
                } else if(time_left >= 3600 && time_left < 86400) {
                    shortenedTimeLeft = `${Math.floor(time_left / 3600)}h`
                } else {
                    shortenedTimeLeft = `${Math.floor(time_left / 86400)}d`
                }
    
                const newEmbed = new Discord.MessageEmbed()
                .setTitle(possibleMessages[random])
                .setDescription(`You can use that command again in \`${shortenedTimeLeft}\`!`)
                .setColor("DARK_RED")
    
                return message.channel.send({embeds: [newEmbed]})
            }
        }

        time_stamps.set(message.author.id, current_time);
        setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
        
        commandfile.execute(client, message, args, profileModel, profileData, message.author.id);
    }
}