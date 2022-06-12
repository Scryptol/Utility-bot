const mongoCurrency = require("discord-mongo-currency")
const Discord = require('discord.js');

module.exports.execute = async(client, message, args) => {
    function isValidItem(itemName) {
        if(args[0] != itemName) {
            return false;
        } else {
            return true;
        }
    }

    const items = [
        [
            Name = 'Small Apple',
            Price = 250,
            Description = "A useless apple, don't buy this.",
            Id = 1
        ],
        [
            Name = 'Shovel',
            Price = 1600,
            Description = 'Use for the ".dig" command!',
            Id = 2
        ],
        [
            Name = 'Fishing Rod',
            Price = 1000,
            Description = 'Use for the ".fish" command!',
            Id = 3
        ],
        [
            Name = 'Gun',
            Price = 6000,
            Description = 'Raise chances of ".steal" working by 5%!',
            Id = 4
        ], [
            Name = 'Rare Fish',
            Price = 20000,
            Description = 'Rare fish init',
            Id = 5
        ]
    ]

    let validItems = 0;
    let validItem = null;

    items.forEach(item => {
        let isValid = isValidItem(item[0].replace(" ", "").toLowerCase());

        if(isValid == true) {
            validItems = 1;
            validItem = item;
        }

        console.log(isValid);
    })

    if(validItems == 1) {
        const user = await mongoCurrency.findUser(message.author.id, message.guild.id);
        const coinsInWallet = user.coinsInWallet;
    
        if(coinsInWallet >= validItem[1]) {
            message.reply(`You bought the ${validItem[0]}`);
        } else {
            message.reply("You don't have enough coins for this item!");
        }
    } else {
        return message.reply("Please enter the name of a valid item!");
    }
}

module.exports.config = {
    name: 'buy',
    description: 'Buy an item from the shop!',
    cooldown: 20,
    category: 'Economy'
}