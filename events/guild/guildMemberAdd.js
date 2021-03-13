const profileModel = require('../../models/profileScheme');
module.exports = async (client, Discord, member)  => {

    let welcomeRole = member.guild.roles.cache.find(role => role.name === 'Member');
    member.roles.add(welcomeRole.id);
    member.guild.channels.cache.get('540512338676023297').send(`Welcome to the club, <@${member.user.id}>!`);

    const profile = await profileModel.findOne({ userID: member.id });

    if(!profile){

    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        Koins: 1000,
        bank: 0,


    });
    profile.save();
}




}