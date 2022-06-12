module.exports.execute = async(client, message, args) => {
    if(!message.member.permissions.has('ADMINISTRATOR') && !message.member.roles.cache.some(role => role.name === 'Moderator')) return;

    if(!isNaN(args[0]) && !isNaN(parseFloat(args[0]))) {
        if(args[0] < 100) {
            message.channel.bulkDelete(args[0]);
        } else {
            message.channel.send('Cannot clear more than 100 messages!');
        }
    } else {
        message.reply('Please type a real number!');
    }
}

module.exports.config = {
    name: 'clear',
    description: 'Moderator Only. Deletes an amount of messages in a channel',
    cooldown: 0,
    category: 'Admin'
}