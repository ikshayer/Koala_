require('dotenv').config();
const TicTacToe = require('discord-tictactoe')
const profileModel = require('../../models/profileScheme');
const lawModel = require('../../models/lawScheme');
const muteModel = require('../../models/muteScheme');
const { Message } = require('discord.js');
const cooldowns = new Map();
module.exports = async (Discord, client, message)=>  {
const prefix = process.env.PREFIX;
const game = new TicTacToe({language: 'en'})

if(message.channel.type == 'dm') return

const insults = ["ded server", "dead server"]

for(var i = 0; i < insults.length; i++){

    let filter = m => m.author.id === message.author.id

     if(message.content.toLowerCase().includes(insults[i])){
     return message.channel.send('THE FUCK YOU SAY ABOUT THIS SERVER U DUMB BITCH, I FRICK UR MOM LAST NIGHT OQWDHOQWDUIUQWD').then(() => {
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 15000,
            errors: ['time']

        })
        .then(message => {
            message = message.first()
            if (message.content.toLowerCase().includes("fucking") || message.content.toLowerCase().includes("fuck")) {
              message.channel.send(`You can't fuck someone with your tiny 2 inch noodle, pleb`);
            } else if (message.content.toLowerCase().includes('no')) {
              message.channel.send(`All bite and no bark, I am dropping a ballistic missile at your home this very instance`);
            } else {
              message.channel.send(`No you bitch`)
            }
          })
          .catch(collected => {
              message.channel.send('Hmm, seems like the pussy got away');
            return;
        });

        })
     }
}

/*
const sentence = (/\w{1,}/g.exec(message.content));
console.log(sentence.index);

if(/w+o+f+/i.test(sentence)) return message.delete();
*/

    if(/w+\s*(o\s*)+f+/i.test(message.content)){
        let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
        let MessageTarget = message.guild.members.cache.get(message.author.id); 

        MessageTarget.roles.add(muteRole.id)    
        MessageTarget.send(`GIT DUNKED ONNN, also ur muted for 5 min`)

        message.delete();

        setTimeout(function(){
        MessageTarget.roles.remove(muteRole.id)
        
        }, 300000);

      return
    }
    
    if(/c+\s*.{0,3}\s*s+\s*.{0,3}\s*m/i.test(message.content)){
        let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
        let MessageTarget = message.guild.members.cache.get(message.author.id); 

        MessageTarget.roles.add(muteRole.id)    
        MessageTarget.send(`shut the fuck up`)

        message.delete();

        setTimeout(function(){
        MessageTarget.roles.remove(muteRole.id)
        
        }, 300000);

      return
    };
    if(/c+.{0,3}h+.{0,3}a+.{0,3}(i|1)+.{0,3}n+.{0,3}\s*(s|5)+.{0,3}a+.{0,3}w+.{0,3}\s*m+.{0,3}a+.{0,3}n/i.test(message.content)){
        let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
        let MessageTarget = message.guild.members.cache.get(message.author.id); 

        MessageTarget.roles.add(muteRole.id)    
        MessageTarget.send(`GIT DUNKED ONNN, also ur muted for 5 min`)

        message.delete();

        setTimeout(function(){
        MessageTarget.roles.remove(muteRole.id)
        
        }, 300000);

      return
    };
    if(/w+\s*(0\s*)+f+/i.test(message.content)) return message.delete();
    if(/w+\s*(o\s*)*(0\s*)+(o\s*)*f+/i.test(message.content)) return message.delete();
    if(/w+\s*(0\s*)*(o\s*)+(0\s*)*f+/i.test(message.content)) return message.delete();
    if(/w+.o+.f+./i.test(message.content)) return message.delete();
    if(/a+\s*w+\s*0+\s*f+/i.test(message.content)) return message.delete();
    if(/a+\s*w+\s*o+\s*f+/i.test(message.content)) return message.delete();
    if(/a+\s*w+\s*(0\s*)*(o\s*)+(0\s*)*f+/i.test(message.content)) return message.delete();
    if(/a+\s*w+\s*(o\s*)*(0\s*)+(o\s*)*f+/i.test(message.content)) return message.delete();
    if(/a+\s*w+\s*0+/i.test(message.content)) return message.delete();
    if(/a+\s*w+\s*o+/i.test(message.content)) return message.delete();
    if(/a+\s*w+\s*(o\s*)*(0\s*)+(o\s*)*/i.test(message.content)) return message.delete();
    if(/a+\s*w+\s*(0\s*)*(o\s*)+(0\s*)*/i.test(message.content)) return message.delete();

    if(/k+\s*a+\s*s+\s*h+\s*i+\s*r+\s*a/i.test(message.content)){
        let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

        let MessageTarget = message.guild.members.cache.get(message.author.id); 
        
        MessageTarget.roles.add(muteRole.id)    
        MessageTarget.send(`GIT DUNKED ONNN, also ur muted for 5 min`)

        message.delete();

        setTimeout(function(){
        MessageTarget.roles.remove(muteRole.id)
        
        }, 300000);

        return
    }


if(message.content.toLowerCase() === "shitty bot"){
    return message.channel.send('fuck you bitchass');
}
if(message.content.toLowerCase().startsWith('~ttt')){
    return game.handleMessage(message);
}

if(message.content.toLowerCase() === "koala is bad"){                             //"koala is bad" reply
        return message.author.send('I will fucking kill you :)');
    }

if(message.content.toLowerCase() === "hello"){
    return message.channel.send('shut up loser');
    }

if(message.content.toLowerCase() === "takla is retarded"){ 
    return message.reply('VERY TRUE');
    }

if(message.content.toLowerCase() === "koala, what is hot?"){ 
    return message.channel.send('Onion');
    }    

if(message.content.toLowerCase() === "thx koala" || message.content.toLowerCase() === 'thanks koala' || message.content.toLowerCase() === "thank you koala"){
    return message.channel.send("B-baka! :flushed:");
    }    

if(!message.content.startsWith(prefix) || message.author.bot) return;

let profileData = await profileModel.findOne({userID: message.author.id});

let lawData = await lawModel.findOne({userID: message.author.id});

let args = message.content.toLowerCase().slice(prefix.length).split(/ +/);
let cmd = args.shift().toLowerCase();

const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

if(!command) return message.reply("This command doesn't exist, please do `~help` for the list of available commands!")

if(!cooldowns.has(command.name)){
    cooldowns.set(command.name, new Discord.Collection());
}

const current_time = Date.now();
const time_stamps = cooldowns.get(command.name);
const cooldown_amount = (command.cooldown) * 1000;

if(time_stamps.has(message.author.id)){
    const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;


     if(current_time < expiration_time){
     const time_left = (expiration_time - current_time) / 1000;
     const secondtime = Math.floor(time_left);

     if(secondtime > 60){
         const minutetime = Math.floor(secondtime / 60);

         if(minutetime > 60){
            const hourtime = Math.floor(minutetime / 60)
            const min = Math.floor(((minutetime / 60) - hourtime) * 60);
            let secondconv = Math.floor(((((minutetime / 60) - hourtime) * 60) - min) * 60)
            return message.reply(`You have ${hourtime} hours ${min} minutes and ${secondconv} seconds left before you can do **~${command.name}** again!`);
         }

         let secondconv = Math.floor(((secondtime / 60) - minutetime) * 60);
         return message.reply(`You have ${minutetime} minutes and ${secondconv} seconds left before you can do **~${command.name}** again!`);

     }
     return message.reply(`You have ${time_left.toFixed(0)} seconds left before you can do **~${command.name}** again!`);
 
}
}

time_stamps.set(message.author.id, current_time);
setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);


try{
command.execute(message, args, cmd, client, Discord, profileData, lawData);
}
catch (err){
    message.reply("There was an error in executing the code");
    console.log(err);
}
}