const profileModel = require(`../models/profileScheme`)
const mongoose = require("mongoose");
module.exports = {
    name: 'balance',
    aliases: ['bal', 'bl'],
    cooldown: 0,
    description: 'The Balance command!',
    async execute(message, args, cmd, client, Discord, profileData){

        const target = message.mentions.users.first();

        if(!target){
        const total = profileData.Koins + profileData.bank;

        const balanceEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`The Balance of ${message.author.username} is:`, `${message.author.displayAvatarURL({dynamic: true})}`)
        .addFields(
            { name: `Wallet: ${profileData.Koins}`, value: `**Bank: ${profileData.bank}**`, inline: true },
            { name: `Total: **${total}** `, value: '-=-=-=-=-=-', inline: true}
            
            

        )
        .setTimestamp()
        .setFooter('Koala is always watching 👀')

        message.channel.send(balanceEmbed);
    }

        

        if(target){

        let targetData = await profileModel.findOne({ userID: target.id });
        let coins = targetData.Koins;
        let bank = targetData.bank;
        let targetTotal = coins + bank;

        const Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`The Balance of ${target.username} is:`, `${target.displayAvatarURL({dynamic: true})}`)
        .addFields(
            { name: `Wallet: ${coins}`, value: `**Bank: ${bank}**`, inline: true  },
            { name: `Total: **${targetTotal}**`, value:  '-=-=-=-=-=-', inline: true },
            
            

        )
        .setTimestamp()
        .setFooter('Koala is always watching 👀')

         return  message.channel.send(Embed);
        }

        

    }
}