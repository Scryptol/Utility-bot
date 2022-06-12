const profileModel = require('../models/profileSchema.js');
const mongoCurrency = require('discord-mongo-currency')

module.exports.execute = async(client, member) => {
    member.send(`Welcome to our server! Make sure to check out the rules!`);

    mongoCurrency.createUser(member, member.guild.id);

    let profile = await profileModel.create({
        userID: guildMember.id,
        serverID: guildMember.guild.id,
        pokemon: 0,
        ownsStarter: 0,
    })
}