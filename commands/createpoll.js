module.exports.execute = async(client, message, args) => {
    if(!message.member.permissions.has('ADMINISTRATOR') && !message.member.roles.cache.some(role => role.name === 'Moderator')) return;

    const channel = message.mentions.channels.first();

    let newEmbed = Discord.MessageEmbed()
    .setTitle("Test poll")
    .setDescription("This is a test poll")

    channel.send({embeds: [newEmbed]})
    
}

module.exports.config = {
    name: 'createpoll',
    description: 'Creates a poll in a channel.',
    cooldown: 0,
    category: 'Admin'
}