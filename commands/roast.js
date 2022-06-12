const mongoCurrency = require("discord-mongo-currency")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {
    const possibleRoasts = [
        "You are what happens when women drink during pregnancy.",
        "You are the sun in my life... now get 93 million miles away from me.",
        "I can't wait to spend my whole life without you.",
        "Whoever told you to be yourself had no clue what they were talking about.",
        "I don't know what makes you so stupid, but it works.",
        "I told my therapist about you, he didn't believe me.",
        "You are like a software update. Every time I see you I think 'not now'.",
        "You are the reason why there are instructions on shampoo bottles.",
        "You are the reason why god is not talking to us anymore.",
        "It's all about balance, you start talking, I stop listening.",
        "Everyone has purpose in life, yours is to become an organ donor.",
        "You haven't changed since the last time I saw you. You should.",
        "Every time I think you can't get any dumber, you are proving me wrong",
        "I am not ignoring you; I am just giving you a time to understand what you just said.",
        "All mistakes are fixable... Except for you.",
        "When God made you, you must have been on the bottom of his to-do list",
        "Taking a picture of you would put a virus on my phone",
        "You make me increase the amount of caffeine I take daily."
    ]

    const random = Math.floor(Math.random() * possibleRoasts.length);

    let newEmbed = new Discord.MessageEmbed()

    if(!message.mentions.members.first()) {
        newEmbed = newEmbed.setTitle("You moron.")
        .setDescription("You need to specify a member to roast!")
        .setColor("DARK_RED")

        return message.channel.send({embeds: [newEmbed]});
    }

    newEmbed = newEmbed
    .setTitle(`${message.author.tag} wants to roast ${message.mentions.members.first().user.tag}`)
    .setDescription(possibleRoasts[random])
    .setColor("GREEN");
    
    message.channel.send({embeds: [newEmbed]});
}

module.exports.config = {
    name: 'roast',
    description: 'Roast someone so hard they will burn to death!',
    cooldown: 0,
    category: 'Fun'
}