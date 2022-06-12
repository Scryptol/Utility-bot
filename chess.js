
const { Message, MessageEmbed, MessageAttachment, MessageCollector, message} = require('discord.js');
const Canvas = require('canvas');
const path = require('path');

const midDuel = new Set() 

// Example usage
// if (cmd == 'chess'){
//     const opponent = message.mentions.users.first();
//     if (!opponent) return message.channel.send(`Please mention who you want to challenge at tictactoe.`);
//     const Chess = require('./chess')
//     const game = new Chess({
//         message: message,
//         opponent: opponent,
//     })
//     game.start()
// }

class gameChess {

    /**
   * @name Chess
   * @kind constructor
   * @param {Object} options options
   * @param {any} [options.message] the discord message
   * @param {String} [options.embedDescription] embedDescription
   * @param {any} [options.opponent] const opponent = <Message>.mentions.opponents.first() (NOT CHANGEABLE)
   * @param {Set} [options.midDuel]
   */

    constructor(options) {

        if (!options.opponent) throw new TypeError('Error: Missing argument opponent')

        if (!options.message) throw new TypeError('Error: Missing argument message')

        this.messageRecieve = options.message;
        this.opponent = options.opponent
        this.midDuel = options.midDuel
    }

    async start() {
        // board
        const board = await Canvas.loadImage(path.join(__dirname, './images/chess_board.png'))
        // white pieces
        const wPawn = await Canvas.loadImage(path.join(__dirname, './images/wPawn.png'))
        const wKing = await Canvas.loadImage(path.join(__dirname, './images/wKing.png'))
        const wQueen = await Canvas.loadImage(path.join(__dirname, './images/wQueen.png'))
        const wBishop = await Canvas.loadImage(path.join(__dirname, './images/wBishop.png'))
        const wKnight = await Canvas.loadImage(path.join(__dirname, './images/wKnight.png'))
        const wRook = await Canvas.loadImage(path.join(__dirname, './images/wRook.png'))
        // black pieces
        const bPawn = await Canvas.loadImage(path.join(__dirname, './images/bPawn.png'))
        const bKing = await Canvas.loadImage(path.join(__dirname, './images/bKing.png'))
        const bQueen = await Canvas.loadImage(path.join(__dirname, './images/bQueen.png'))
        const bBishop = await Canvas.loadImage(path.join(__dirname, './images/bBishop.png'))
        const bKnight = await Canvas.loadImage(path.join(__dirname, './images/bKnight.png'))
        const bRook = await Canvas.loadImage(path.join(__dirname, './images/bRook.png'))
        // set the chess up
        const { Chess } = await import('./node_modules/chess.js/chess.js');
        const chess = new Chess()
        let player1Color, player2Color, player;

        function decideColor(){
            const rand = Math.floor(Math.random() * 2);
            if (rand == 0){
                player1Color = '0xffffff'
                player2Color = '0x000000'
                player = 0;

            } else if (rand == 1) {
                player1Color = '0x000000'
                player2Color = '0xffffff'
                player = 1;
            } else {
                player1Color = '0xffffff'
                player2Color = '0x000000'
                player = 0;
            }
        }

        async function drawBoard(color){
            const canvas = Canvas.createCanvas(1200, 1200)
            const ctx = canvas.getContext('2d')
        
            ctx.drawImage(board, 0, 0,)
            for(let val of chess.board()){
                for(let val2 of val.values()) {
                    if(val2){
                        const letter = val2.square.slice(0,1);
                        const number = val2.square.slice(-1)
                        const piece = val2.type + val2.color
                        let x, y;
                        switch(letter){
                            case "a":
                                x = 105
                                break;
                            case "b":
                                x = 230
                                break;
                            case "c":
                                x = 355
                                break;
                            case "d":
                                x = 480
                                break;
                            case "e":
                                x = 605
                                break;
                            case "f":
                                x = 730
                                break;
                            case "g":
                                x = 855
                                break;
                            case "h":
                                x = 980
                                break;
                        }
                        switch(number){
                            case "8":
                                y = 105
                                break;
                            case "7":
                                y = 230
                                break;
                            case "6":
                                y = 355
                                break;
                            case "5":
                                y = 480
                                break;
                            case "4":
                                y = 605
                                break;
                            case "3":
                                y = 730
                                break;
                            case "2":
                                y = 855
                                break;
                            case "1":
                                y = 980
                                break;
                        }
                        switch(piece){
                            case 'pw':
                                ctx.drawImage(wPawn, x, y, 120, 120)
                                break;
                            case 'kw':
                                if (color == '0xffffff'){
                                    ctx.fillStyle = 'red';
                                    ctx.fillRect(x, y, 120, 120);
                                }
                                ctx.drawImage(wKing, x, y, 120, 120)
                                break;
                            case 'qw':
                                ctx.drawImage(wQueen, x, y, 120, 120)
                                break;
                            case 'bw':
                                ctx.drawImage(wBishop, x, y, 120, 120)
                                break;
                            case 'nw':
                                ctx.drawImage(wKnight, x, y, 120, 120)
                                break;
                            case 'rw':
                                ctx.drawImage(wRook, x, y, 120, 120)
                                break;
                            case 'pb':
                                ctx.drawImage(bPawn, x, y, 120, 120)
                                break;
                            case 'kb':
                                if (color == '0x000000'){
                                    ctx.fillStyle = 'red';
                                    ctx.fillRect(x, y, 120, 120);
                                }
                                ctx.drawImage(bKing, x, y, 120, 120)
                                break;
                            case 'qb':
                                ctx.drawImage(bQueen, x, y, 120, 120)
                                break;
                            case 'bb':
                                ctx.drawImage(bBishop, x, y, 120, 120)
                                break;
                            case 'nb':
                                ctx.drawImage(bKnight, x, y, 120, 120)
                                break;
                            case 'rb':
                                ctx.drawImage(bRook, x, y, 120, 120)
                                break;
                        }
                    }
                }
            }
            return(canvas)
        }

        const author = this.messageRecieve.author
        const opponent = this.opponent
        const midDuel = this.midDuel

        if (midDuel.has(author.id)) {
            return this.messageRecieve.channel.send(`You're currently in a duel`)
        } else if (midDuel.has(opponent.id)) {
            return this.messageRecieve.channel.send(`<@${opponent.id}> is currently in a duel`)
        } if (opponent.id === this.messageRecieve.client.user.id) {
            return this.messageRecieve.channel.send("You can't duel me lmfao")
        }

        decideColor()

        const gameData = [
            { user: author, color: player1Color},
            { user: opponent, color: player2Color }
        ];

        let attachment = new MessageAttachment((await drawBoard()).toBuffer(), 'board.png')
        let Embed = new MessageEmbed()
            .setTitle(`${author.username} VS ${opponent.username}`)
            .setColor(gameData[player].color)
            .setImage('attachment://board.png')
            .setFields(
                {name: `Legal Moves`, value: `${chess.moves().join(", ")}`},
            )

        
        this.messageRecieve.channel.send({
            embeds: [Embed],
            files: [attachment],
            content: `Your turn ${gameData[player].user} \n\n You have 1 minute to play a move`
        })
        .then(async (msg) => {
            midDuel.add(author.id)
            midDuel.add(opponent.id)
            const filter = m => m.author.id === gameData[player].user.id;
            const collector = msg.channel.createMessageCollector({ filter, time: 60000 });

            collector.on('collect', async (m) => {
                if (chess.moves().includes(m.content)){
                    chess.move(m.content)
                    m.delete()
                    if (chess.game_over()){
                        if (chess.in_checkmate()){
                            const attachment = new MessageAttachment((await drawBoard()).toBuffer(), 'board.png')
                            Embed.spliceFields(0, 1).setColor(gameData[player].color).setDescription(`${chess.history().join(", ")}`)
                            msg.edit({embeds: [Embed], files: [attachment], content: `${gameData[player].user} has won the game!!`})
                            collector.stop()
                        } else if (chess.in_draw()){
                            const attachment = new MessageAttachment((await drawBoard()).toBuffer(), 'board.png')
                            Embed.spliceFields(0, 1).setColor(gameData[player].color).setDescription(`${chess.history().join(", ")}`)
                            msg.edit({embeds: [Embed], files: [attachment], content: `The game has ended in a draw`})
                            collector.stop()
                        }
                        midDuel.delete(author.id)
                        midDuel.delete(opponent.id)
                    } else if (chess.in_check()){
                        player = (player + 1) % 2;
                        const attachment = new MessageAttachment((await drawBoard(gameData[player].color)).toBuffer(), 'board.png')
                        Embed.setFields({name: `Legal Moves`, value: `${chess.moves().join(", ")}`}).setColor(gameData[player].color).setDescription(' ')
                        msg.edit({embeds: [Embed], files: [attachment], content: `Your turn ${gameData[player].user} \n\n You have 1 minute to play a move`})
                        collector.resetTimer()
                    } else {
                        player = (player + 1) % 2;
                        const attachment = new MessageAttachment((await drawBoard()).toBuffer(), 'board.png')
                        Embed.setFields({name: `Legal Moves`, value: `${chess.moves().join(", ")}`}).setColor(gameData[player].color).setDescription(' ')
                        msg.edit({embeds: [Embed], files: [attachment], content: `Your turn ${gameData[player].user} \n\n You have 1 minute to play a move`})
                        collector.resetTimer()
                    }
                } else if (m.content.toLowerCase() == 'resign' || 'give up'){
                    Embed.spliceFields(0, 1).setColor(gameData[player].color).setDescription(`${chess.history().join(", ")}`)
                    msg.edit({embeds: [Embed], content: `${gameData[player].user} has resigned, so ${gameData[(player = (player + 1) % 2)].user} won`})
                    collector.stop()

                    midDuel.delete(author.id)
                    midDuel.delete(opponent.id)
                }
                else {
                    Embed.setDescription(`**${m.content} is an invalid move!** \n Please play a legal move`)
                    msg.edit({embeds: [Embed], content: `Your turn ${gameData[player].user} \n\n You have 1 minute to play a move`})
                }
            });

            collector.on('end',() => {
                msg.edit({content: `Game was stopped for not playing a move in time.`})
                collector.stop()
            });
        })
    }
}

module.exports = gameChess;