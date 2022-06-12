const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

class TicTacToe {

    /**
   * @name TicTacToe
   * @kind constructor
   * @param {Object} options options
   * @param {String} [options.xEmoji] x emoji
   * @param {any} [options.message] the discord message
   * @param {String} [options.oEmoji] o emoji
   * @param {String} [options.embedDescription] embedDescription
   * @param {any} [options.opponent] const opponent = <Message>.mentions.members.first() (NOT CHANGEABLE)
   * @param {Set} [options.midDuel]
   */

    constructor(options) {
        if (!options.xEmoji) throw new TypeError('Missing argument: xEmoji')
        if (typeof options.xEmoji !== 'string') throw new TypeError('Error: xEmoji must be a string')

        if (!options.oEmoji) throw new TypeError('Missing argument: oEmoji')
        if (typeof options.oEmoji !== 'string') throw new TypeError('Error: oEmoji must be a string')

        if (!options.opponent) throw new TypeError('Error: Missing argument opponent')

        if (!options.message) throw new TypeError('Error: Missing argument message')

        this.message = options.message;
        this.xEmoji = options.xEmoji
        this.oEmoji = options.oEmoji
        this.opponent = options.opponent
        this.xColor = options.xColor
        this.oColor = options.oColor
        this.embedDescription = options.embedDescription
        this.midDuel = options.midDuel
    }
    async start() {
        let a1 = ' '
        let a2 = ' '
        let a3 = ' '
        let b1 = ' '
        let b2 = ' '
        let b3 = ' '
        let c1 = ' '
        let c2 = ' '
        let c3 = ' '

        function getRandomString(length) {
            var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var result = '';
            for (var i = 0; i < length; i++) {
                result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
            }
            return result
        }
        let a11 = (getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4))
        let a22 = (getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4))
        let a33 = (getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4))
        let b11 = (getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4))
        let b22 = (getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4))
        let b33 = (getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4))
        let c11 = (getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4))
        let c22 = (getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4))
        let c33 = (getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4) + '-' + getRandomString(4))
        
        const author = this.message.author
        const opponent = this.opponent
        const xEmoji = this.xEmoji
        const oEmoji = this.oEmoji
        const midDuel = this.midDuel

        if (midDuel.has(author.id)) {
            return this.message.channel.send(`You are already playing a game`)
        } else if (midDuel.has(opponent.id)) {
            return this.message.channel.send(`<@${opponent.id}> is currently playing a game`)
        } if (opponent.bot) {
            return this.message.channel.send("You can't play against a bot")
        }

        let player1Color, player2Color, player1Emoji, player2Emoji, player;

        function decideColor(){
            const rand = Math.floor(Math.random() * 2);
            if (rand === 0){
                player1Emoji = xEmoji
                player2Emoji = oEmoji
                player1Color = 'DANGER'
                player2Color = 'PRIMARY' 
                player = 0;

            } else if (rand === 1) {
                player1Emoji = oEmoji
                player2Emoji = xEmoji
                player1Color = 'PRIMARY'
                player2Color = 'DANGER' 
                player = 1;
            } else {
                player1Color = xEmoji
                player2Emoji = oEmoji
                player1Color = 'DANGER'
                player2Color = 'PRIMARY' 
                player = 0;
            }
        }

        function updateButton(message, customId){
            for (let row of message.components){
                for (let comp of row.components){
                    if (comp.customId === customId){
                        comp.setStyle(gameData[(player + 1) % 2].color).setEmoji(gameData[(player + 1) % 2].em).setDisabled()
                    }
                }
            }
            return(message.components)
        }
        
        function disableAll(message, customId){
            for (let comp of message.components){
                for (let btn of comp.components){
                    btn.setDisabled()
                    if (btn.customId === customId){
                        btn.setStyle(gameData[player].color).setEmoji(gameData[player].em)
                    }
                }
            }
            message.edit({
                embeds: [Embed],
                components: message.components,
                content: `${gameData[player].member} wins the game!! :tada:`
            })
        }

        decideColor()

        const gameData = [
            { member: author, em: player1Emoji, color: player1Color },
            { member: opponent, em: player2Emoji, color: player2Color }
        ];

        let Embed = new MessageEmbed()
            .setTitle(`${author.username} VS ${opponent.username}`)
            .setColor(3426654)
        const A1 = new MessageButton()
            .setCustomId(a11)
            .setStyle('SECONDARY')
            .setLabel(' ')
        const A2 = new MessageButton()
            .setCustomId(a22)
            .setStyle('SECONDARY')
            .setLabel(' ')
        const A3 = new MessageButton()
            .setCustomId(a33)
            .setStyle('SECONDARY')
            .setLabel(' ')
        const B1 = new MessageButton()
            .setCustomId(b11)
            .setStyle('SECONDARY')
            .setLabel(' ')
        const B2 = new MessageButton()
            .setCustomId(b22)
            .setStyle('SECONDARY')
            .setLabel(' ')
        const B3 = new MessageButton()
            .setCustomId(b33)
            .setStyle('SECONDARY')
            .setLabel(' ')
        const C1 = new MessageButton()
            .setCustomId(c11)
            .setStyle('SECONDARY')
            .setLabel(' ')
        const C2 = new MessageButton()
            .setCustomId(c22)
            .setStyle('SECONDARY')
            .setLabel(' ')
        const C3 = new MessageButton()
            .setCustomId(c33)
            .setStyle('SECONDARY')
            .setLabel(' ')
        this.message.channel.send({
            embeds: [Embed],
            components: [
                {
                    type: 1, components: [
                        A1, A2, A3
                    ]
                },
                {
                    type: 1, components: [
                        B1, B2, B3
                    ]
                },
                {
                    type: 1, components: [
                        C1, C2, C3
                    ]
                }, 
            ], content: `Your turn ${gameData[player].member} (${gameData[player].em})`
        }).then(async (msg) => {
            midDuel.add(author.id)
            midDuel.add(opponent.id)
            const filter = (interaction) => interaction.user.id === gameData[player].member.id;

            const gameCollector = msg.createMessageComponentCollector({ filter, componentType: 'BUTTON' });
            
            gameCollector.on('collect', async btn => {
                if (btn.customId === a11 && gameData[player].member.id === btn.user.id) {
                    btn.deferUpdate()
                    try {
                        a1 = gameData[player].em
                        if ((a1 === b1 && a1 === c1) || (a1 === a2 && a1 === a3) || (a1 === b2 && a1 === c3)){
                            
                            gameCollector.stop()
                            disableAll(msg, btn.customId)
                            midDuel.delete(author.id)
                            midDuel.delete(opponent.id)
                            return;
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    
                    player = (player + 1) % 2;
                    msg.edit({
                        content: `Your turn ${gameData[player].member} (${gameData[player].em})`,
                        embeds: [Embed],
                        components: updateButton(msg, btn.customId)
                    })
                    
                } else if (btn.customId === a22 && gameData[player].member.id === btn.user.id) {
                    btn.deferUpdate()
                    try {
                        a2 = gameData[player].em
                        if ((a2 === b2 && a2 === c2) || (a1 === a2 && a1 === a3)){
                            
                            gameCollector.stop()
                            disableAll(msg, btn.customId)
                            
                            midDuel.delete(author.id)
                            midDuel.delete(opponent.id)
                            return;
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    
                    player = (player + 1) % 2;
                    msg.edit({
                        content: `Your turn ${gameData[player].member} (${gameData[player].em})`,
                        embeds: [Embed],
                        components: updateButton(msg, btn.customId)
                    })
                    
                } else if (btn.customId === a33 && gameData[player].member.id === btn.user.id) {
                    btn.deferUpdate()
                    try {
                        a3 = gameData[player].em
                        if ((a3 === b3 && a3=== c3) || (a1 === a2 && a1 === a3) || (a3 === b2 && a3 === c1)){
                            
                            gameCollector.stop()
                            disableAll(msg, btn.customId)
                            midDuel.delete(author.id)
                            midDuel.delete(opponent.id)
                            return;
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    for (let row of updateButton(msg, btn.customId)){
                        for (let comp of row.components){
                            if (comp.customId === btn.customId){
                                comp.setStyle(gameData[player].color).setEmoji(gameData[player].em).setDisabled()
                            }
                        }
                    }
                    player = (player + 1) % 2;
                    msg.edit({
                        content: `Your turn ${gameData[player].member} (${gameData[player].em})`,
                        embeds: [Embed],
                        components: updateButton(msg, btn.customId)
                    })
                    
                } else if (btn.customId === b11 && gameData[player].member.id === btn.user.id) {
                    btn.deferUpdate()
                    try {
                        b1 = gameData[player].em
                        if ((a1 === b1 && a1 === c1) || (b1 === b2 && b1 === b3)){
                            
                            gameCollector.stop()
                            disableAll(msg, btn.customId)
                            
                            midDuel.delete(author.id)
                            midDuel.delete(opponent.id)
                            return;
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    
                    player = (player + 1) % 2;
                    msg.edit({
                        content: `Your turn ${gameData[player].member} (${gameData[player].em})`,
                        embeds: [Embed],
                        components: updateButton(msg, btn.customId)
                    })
                    
                } else if (btn.customId === b22 && gameData[player].member.id === btn.user.id) {
                    btn.deferUpdate()
                    try {
                        b2 = gameData[player].em
                        if ((a2 === b2 && a2 === c2) || (b1 === b2 && b1 === b3) || (a1 === b2 && b2 === c3) || (a3 === b2 && b2 === c1) ){
                            
                            gameCollector.stop()
                            disableAll(msg, btn.customId)
                            
                            midDuel.delete(author.id)
                            midDuel.delete(opponent.id)
                            return;
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    
                    player = (player + 1) % 2;
                    msg.edit({
                        content: `Your turn ${gameData[player].member} (${gameData[player].em})`,
                        embeds: [Embed],
                        components: updateButton(msg, btn.customId)
                    })
                    
                } else if (btn.customId === b33 && gameData[player].member.id === btn.user.id) {
                    btn.deferUpdate()
                    try {
                        b3 = gameData[player].em
                        if ((a3 === b3 && b3 === c3) ||  (b1 === b2 && b1 === b3)){
                            
                            gameCollector.stop()
                            disableAll(msg, btn.customId)
                            
                            midDuel.delete(author.id)
                            midDuel.delete(opponent.id)
                            return;
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    
                    player = (player + 1) % 2;
                    msg.edit({
                        content: `Your turn ${gameData[player].member} (${gameData[player].em})`,
                        embeds: [Embed],
                        components: updateButton(msg, btn.customId)
                    })
                    
                } else if (btn.customId === c11 && gameData[player].member.id === btn.user.id) {
                    btn.deferUpdate()
                    try {
                        c1 = gameData[player].em
                        if ((a1 === b1 && a1=== c1) || (c1 === c2 && c1 === c3) || (a3 === b2 && a3 === c1)){
                            
                            gameCollector.stop()
                            disableAll(msg, btn.customId)
                            
                            midDuel.delete(author.id)
                            midDuel.delete(opponent.id)
                            return;
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    
                    player = (player + 1) % 2;
                    msg.edit({
                        content: `Your turn ${gameData[player].member} (${gameData[player].em})`,
                        embeds: [Embed],
                        components: updateButton(msg, btn.customId)
                    })
                    
                } else if (btn.customId === c22 && gameData[player].member.id === btn.user.id) {
                    btn.deferUpdate()
                    try {
                        c2 = gameData[player].em
                        if ((a2 === b2 && b2 === c2) || (c1 === c2 && c2=== c3)){
                            
                            gameCollector.stop()
                            disableAll(msg, btn.customId)
                            
                            midDuel.delete(author.id)
                            midDuel.delete(opponent.id)
                            return;
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    player = (player + 1) % 2;
                    
                    msg.edit({
                        content: `Your turn ${gameData[player].member} (${gameData[player].em})`,
                        embeds: [Embed],
                        components: updateButton(msg, btn.customId)
                    })
                    
                } else if (btn.customId === c33 && gameData[player].member.id === btn.user.id) {
                    btn.deferUpdate()
                    try {
                        c3 = gameData[player].em;
                        if ((a3 === b3 && a3=== c3) || (c1 === c2 && c1 === c3) || (a1 === b2 && a1 === c3)){
                            
                            gameCollector.stop()
                            disableAll(msg, btn.customId)
                            midDuel.delete(author.id)
                            midDuel.delete(opponent.id)
                            return;
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    player = (player + 1) % 2;
                    msg.edit({
                        content: `Your turn ${gameData[player].member} (${gameData[player].em})`,
                        embeds: [Embed],
                        content: 'yes',
                        components: updateButton(msg, btn.customId)
                    })
                    
                } else {
                    return btn.reply({ content: "Wait for Opponent!", ephemeral: true })
                }

                let countDisabled = 0;
                for (let comp of msg.components){
                    for (let button of comp.components){
                        if (button.disabled){
                           countDisabled = countDisabled + 1;
                        }
                        if (countDisabled === 9){
                            gameCollector.stop()
                            midDuel.delete(author.id)
                            midDuel.delete(opponent.id)
                            msg.edit({
                                content: `The game has ended in a draw..`
                            })
                        }
                    }
                }
            })

        })
    }

}

module.exports = TicTacToe;