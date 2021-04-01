const StatusModel = require('../../models/profilestatusScheme')
const itemScheme = require('../../models/itemScheme')


module.exports = {
    name: 'profile',
    aliases: ['status'],
    description: 'The profile command',

    async execute(message, args, cmd, client, Discord, profileData, lawData){
        
        const statuscheck = await StatusModel.findOne({userID: message.author.id})
        if(!statuscheck){

            const statusmake = await StatusModel.create({
                userID: message.author.id,
                status: ''
            });
            statusmake.save()
        }

        const status = await StatusModel.findOne({userID: message.author.id})

        if(cmd === 'profile'){

        const item = await itemScheme.findOne({userID: message.author.id});

        const profileEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`${message.author.username}'s Profile`, `${message.author.displayAvatarURL({dynamic: true})}`)
        .setDescription(`${status.status}`)
        .addFields(
            {name: 'Occupation: ', value: '`Coming Soon`', inline: true},
            {name: `Koins`, value: `**Wallet:**  ӄ ${profileData.Koins}
            **Bank:** ӄ ${profileData.bank}
            **Total:** ӄ ${profileData.Koins + profileData.bank}`, inline: true},
            {name: '\u200B', value: `**Crime Level:** ${lawData.crime}`},
            {name: `Inventory: ${profileData.greenleaves} `, value: '\u200B'}


        )
        .setFooter('Koala is always watching 👀')
        .setTimestamp();
        
        
        message.channel.send(profileEmbed)
        return
        }


        if(cmd === 'status'){

            const text = args.splice(0).join(' ');
            if(!text) return message.channel.send('```Please provide a status!```');


            await StatusModel.findOneAndUpdate({
                userID: message.author.id
            },
            {
                status: text
            }
            );

            message.channel.send('👍 Your New status has been set!')
            return
        }
    }
}