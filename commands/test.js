module.exports = {
    name: 'test',
    description: 'test',
    execute(message, args){

        const memberCount = Guild.approximateMemberCount
        
        message.channel.send(`The amount of people in this guild is <${memberCount}>`);
    }
    
}