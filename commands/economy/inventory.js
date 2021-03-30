const Discord = require('discord.js')
const dayData = require('../../models/dayScheme')
const itemData = require('../../models/itemScheme')
const mongoose = require('mongoose');
const profileModel = require('../../models/profileScheme')


module.exports = {
    name: 'inventory',
    aliases: ['inv'],
    cooldowns: 0,
    description: 'you buy stuff',
    async execute(message, args, cmd, client, Discord, profileData, lawData){

        const target = message.mentions.users.first();
        

        if(!target){

        const inventoryEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`The Inventory of ${message.author.username} is: `, `${message.author.displayAvatarURL({dynamic: true})}`)
        .addFields({ name: `Green Leaves: ${profileData.greenleaves}`, value: '**Onions: 0**'})
        .setTimestamp()
        .setFooter('Koala is always watching 👀')

        return message.channel.send(inventoryEmbed)
        }
        
        

        if(target){

            const targetData = await profileModel.findOne({ userID: target.id})

            if(!targetData) return message.channel.send(`<@${target.id}> does not have a profile yet!`);

            
            const inventoryEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`The Inventory of ${target.username} is: `, `${target.displayAvatarURL({dynamic: true})}`)
            .addFields({ name: `Green Leaves: ${targetData.greenleaves}`, value: '**Onions: 0**'})
            .setTimestamp()
            .setFooter('Koala is always watching 👀')

            return message.channel.send(inventoryEmbed);

        }

    }
}