const profileModel = require(`../../models/profileScheme`)
const mongoose = require("mongoose");
module.exports = {
    name: 'balance',
    aliases: ['bal', 'bl'],
    cooldown: 0,
    description: 'The Balance command!',
    async execute(message, args, cmd, client, Discord, profileData, lawData){

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        const target = message.mentions.users.first();    //getting the tagged user we want to check the balance of
 
        if(!target){                                                      //if the tagged user is not mentioned then the command user's bal is shown
        const total = profileData.Koins + profileData.bank;

        const balanceEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`The Balance of ${message.author.username} is:`, `${message.author.displayAvatarURL({dynamic: true})}`)
        .addFields(
            { name: `Wallet: ӄ ${numberWithCommas(profileData.Koins)}`, value: `**Bank: ӄ ${numberWithCommas(profileData.bank)}**`, inline: true },
            { name: `Total: ӄ **${numberWithCommas(total)}** `, value: '-=-=-=-=-=-', inline: true}
            
            

        )
        .setTimestamp()
        .setFooter('Koala is always watching 👀')

        message.channel.send(balanceEmbed);
    }

        
        if(target){                  //if the tagged user is mentioned the tagged user's bal is shown

        let targetData = await profileModel.findOne({ userID: target.id });
        

        if(!targetData) {return message.channel.send(`<@${target.id}> does not have a profile yet!`)          //we are getting the tagged user's profile
        }
        else if(targetData){
        let coins = targetData.Koins;
        let bank = targetData.bank;
        let targetTotal = coins + bank;


        const Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`The Balance of ${target.username} is:`, `${target.displayAvatarURL({dynamic: true})}`)
        .addFields(
            { name: `Wallet: ӄ ${numberWithCommas(coins)}`, value: `**Bank: ӄ ${numberWithCommas(bank)}**`, inline: true  },
            { name: `Total: ӄ **${numberWithCommas(targetTotal)}**`, value:  '-=-=-=-=-=-', inline: true },
            
            

        )
        .setTimestamp()
        .setFooter('Koala is always watching 👀')

         return  message.channel.send(Embed);
        }
        }

        

    }
}