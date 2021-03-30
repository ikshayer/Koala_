require('dotenv').config();
const profileModel = require('../../models/profileScheme');
const lawModel = require('../../models/lawScheme');
const cooldowns = new Map();
module.exports = async (Discord, client, message)=>  {
const prefix = process.env.PREFIX;


if(message.channel.type == 'dm') return

if(message.content.toLowerCase() === "shitty bot"){
    return message.channel.send('fuck you bitchass');
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

let fakeprofileData;
try{
    fakeprofileData = await profileModel.findOne({ userID: message.author.id});
    if(!fakeprofileData){
        let profile = await profileModel.create({
            userID: message.author.id,
            serverID: message.guild.id,
            Koins: 1000,
            bank: 0,
            greenleaves: 0
    
    
        });
        profile.save();

        

        
    
    }

} catch(err){
    console.log(err);
}

let profileData = await profileModel.findOne({userID: message.author.id});

let fakeLawData;
try{
    fakeLawData = await lawModel.findOne({userID: message.author.id})
    if(!fakeLawData){
        let lawData1 = await lawModel.create({
            userID: message.author.id,
            crime: 0
        })
        lawData1.save()
    }

} catch(err){
    console.log(err);
}

let lawData = await lawModel.findOne({userID: message.author.id});

let args = message.content.toLowerCase().slice(prefix.length).split(/ +/);
let cmd = args.shift().toLowerCase();

const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

if(!command) return 

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
     return message.reply(`You have ${time_left.toFixed(1)} seconds left before you can do **~${command.name}** again!`);
 
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