module.exports.execute = async(client, message, args) => {
    if(!message.member.permissions.has('ADMINISTRATOR') && !message.member.roles.cache.some(role => role.name === 'Moderator')) return;

    const member = message.mentions.users.first();
    if(member) {
        const target = message.guild.members.cache.get(member.id);

        target.kick();
        message.channel.send("User has been kicked!");
    } else {
        message.channel.send("Please specify a user to kick!");
    }
}

module.exports.config = {
    name: 'kick',
    description: 'Moderator Only. Kicks a user from the server.',
    cooldown: 0,
    category: 'Admin'
}