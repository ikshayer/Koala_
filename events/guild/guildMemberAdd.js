const profileModel = require('../../models/profileScheme');
module.exports = async (client, Discord, member)  => {
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        Geo: 1000,
        bank: 0,


    });
    profile.save();

}