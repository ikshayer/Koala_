const profileModel = require('../../models/profileScheme')

module.exports = {
    name: 'leaderboard',
    aliases: ['lb'],
    description: 'The leaderboard command!',
    async execute(message, args, cmd, client, Discord, profileData, lawData){

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

 
    const total = await profileModel.aggregate()
    .project({
        'userID': true,
        'Koins': -1,
        'bank': -1,
        'total': { '$add': ['$Koins', '$bank']}
    })
    .sort({'total': -1})   

 /*   const lb = await profileModel.find()
    .sort({bank: -1})

    const lbKoins = await profileModel.find()    //Useless Code but may be good for learning later on in my life
    .sort({Koins: -1})

    const topBank = lb.slice(0, 10);
    const topKoins = lbKoins.slice(0, 10)

*/

    const totalBal = total.slice(0, 10);   
    
    let i = 0;
    
    /*
     const Embed = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setAuthor('Leaderboard for Bank')
     .addFields(
         {name: '\u200B', value: topBank.map(item => `${i++ + 1}. **${client.users.cache.get(item.userID).username}** - ӄ ${numberWithCommas(item.bank)} 
              `)}
     )
     .setFooter("Koala is always watching 👀")
     .setTimestamp()

     message.channel.send(Embed)
     return

     */

     const Embed = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setAuthor('Leaderboard')
     .setDescription(totalBal.map(item => `${i++ + 1}. **${client.users.cache.get(item.userID).username}** - ӄ ${numberWithCommas(item.total)} 
       `))

     .setFooter("Koala is always watching 👀")
     .setTimestamp()

     message.channel.send(Embed)
     return

    }
}