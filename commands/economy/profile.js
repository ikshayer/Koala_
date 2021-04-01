const StatusModel = require('../../models/profilestatusScheme')
const itemScheme = require('../../models/itemScheme')
const profileModel = require('../../models/profileScheme')
const law = require('../../models/lawScheme')


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

        const target = message.mentions.users.first()

            if(!target){

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

            if(target){
            
            const targetstatusCheck = await StatusModel.findOne({userID: target.id})
            
            if(!targetstatusCheck){
                const targetstatusMake = await StatusModel.create({
                    userID: target.id,
                    status: ''
                })
                targetstatusMake.save()
            }

            const targetstatus = await StatusModel.findOne({userID: target.id})
            
            const targetLawCheck = await law.findOne({userID: target.id})

            if(!targetLawCheck){
                const targetLawMake = await law.create({
                    userID: target.id,
                    crime: 0,
                });
                targetLawMake.save();
            }

            const targetLaw = await law.findOne({userID: target.id})

            const targetdata = await profileModel.findOne({userID: target.id})

            if(!targetdata) return message.channel.send(`<@${target.id}> doesn't have a profile yet!`);


            const profileEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`${target.username}'s Profile`, `${target.displayAvatarURL({dynamic: true})}`)
            .setDescription(`${targetstatus.status}`)
            .addFields(
                {name: 'Occupation: ', value: '`Coming Soon`', inline: true},
                {name: `Koins`, value: `**Wallet:**  ӄ ${targetdata.Koins}
                **Bank:** ӄ ${targetdata.bank}
                **Total:** ӄ ${targetdata.Koins + targetdata.bank}`, inline: true},
                {name: '\u200B', value: `**Crime Level:** ${targetLaw.crime}`},
                {name: `Inventory: ${targetdata.greenleaves} `, value: '\u200B'}


            )
            .setFooter('Koala is always watching 👀')
            .setTimestamp();
        
        
            message.channel.send(profileEmbed)
            return
            }
        }


        if(cmd === 'status'){

            const text = args.splice(0, 15).join(' ');
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