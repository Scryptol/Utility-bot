const mongoCurrency = require("discord-mongo-currency")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {    
    
}

module.exports.config = {
    name: 'safemode',
    description: "Go into safe mode! You can't get robbed in the mode, however, you also can't use any other economy commands",
    cooldown: 120,
    category: 'Economy'
}