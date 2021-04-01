const profileModel = require('../../models/profileScheme')
const testModel = require('../../models/testScheme')

module.exports = {
    name: 'leaderboard',
    aliases: ['lb'],
    description: 'The leaderboard command!',
    async execute(message, args, cmd, client, Discord, profileData, lawData){

    const lb = await profileModel.find()
    .sort({bank: -1})

    const topBank = lb.slice(0, 10);
    
    
    let i = 0;
    
    
     const Embed = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setAuthor('Leaderboard for Bank')
     .addFields(
         {name: '\u200B', value: topBank.map(item => `${i++ + 1}. <@${item.userID}> - ${item.bank} 
          -=-=-=-=-`)}
     )
     .setFooter("Koala is always watching 👀")
     .setTimestamp()

     message.channel.send(Embed)
     return

    }
}