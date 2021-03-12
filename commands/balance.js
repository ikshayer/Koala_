const mongoose = require("mongoose");
module.exports = {
    name: 'balance',
    aliases: ['bal', 'bl'],
    cooldown: 0,
    description: 'The Balance command!',
    execute(message, args, cmd, client, Discord, profileData){

        const balanceEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`The Balance of ${message.author.username} is:`, `${message.author.displayAvatarURL({dynamic: true})}`)
        .addFields(
            { name: `Wallet: ${profileData.Koins}`, value: `**Bank: ${profileData.bank}**`  },
            

        )
        .setTimestamp()
        .setFooter('Koala is always watching 👀')

        message.channel.send(balanceEmbed);

    }
}