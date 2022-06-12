const mongoCurrency = require("discord-mongo-currency")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {
    const items = [
        [
            Name = 'Small Apple',
            Price = 250,
            Description = "A useless apple, don't buy this."
        ],
        [
            Name = 'Shovel',
            Price = 1600,
            Description = 'Use for the ".dig" command!'
        ],
        [
            Name = 'Fishing Rod',
            Price = 1000,
            Description = 'Use for the ".fish" command!'
        ],
        [
            Name = 'Gun',
            Price = 6000,
            Description = 'Raise chances of ".steal" working by 5%!'
        ], [
            Name = 'Rare Fish',
            Price = 20000,
            Description = 'Rare fish init'
        ]
    ]

    let newEmbed = new Discord.MessageEmbed()
    .setTitle("Items in the shop!")
    
    items.forEach(item => {
        newEmbed = newEmbed.addField(item[0], `${item[2]} Cost: ${item[1]} coins.`)
    });

    message.channel.send({embeds: [newEmbed]})
}

module.exports.config = {
    name: 'shopitems',
    description: 'See what items are in the shop!',
    cooldown: 0,
    category: 'Economy'
}