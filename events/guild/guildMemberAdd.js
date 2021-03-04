module.exports = (client, Discord, guildMember)  => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
    guildMember.roles.add(welcomeRole.id);
    guildMember.guild.channels.cache.get('540512338676023297').send(`Welcome to the club, <@${guildMember.user.id}>!`);
}