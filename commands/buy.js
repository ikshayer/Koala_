const mongoose = require('mongoose');
const profileModel = require('../models/profileScheme')

module.exports = {
    name: 'buy',
    aliases: ['check'],
    cooldowns: 0,
    description: 'you buy stuff',
    execute(message, args, cmd, client, Discord, profileData){

     const max = Math.ceil(120);
     const min = Math.ceil(90);
     const GREENLEAVESPRICE = Math.floor(Math.random() * (max - min)) + min

     if(cmd === 'buy') return

     if(cmd === 'check'){

     const CheckEmbed = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setDescription(`The Price of Green Leaves today is ${GREENLEAVESPRICE}`)

     return message.channel.send(CheckEmbed);


     }

    }
}

