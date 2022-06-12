module.exports.execute = async(client, message, args) => {
    const random = Math.floor(Math.random() * 100);

    if(message.author.tag == "Scryptol#0999") {
        message.channel.send(`@Scryptol#0999 is 100% epic!`);
    } else {
        message.channel.send(`@${message.author.tag} is ${random}% epic!`);
    }
}

module.exports.config = {
    name: 'epicrate',
    description: 'Gives you an epic rating',
    cooldown: 0,
    category: 'Fun'
}