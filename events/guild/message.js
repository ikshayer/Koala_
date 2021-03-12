require('dotenv').config();
const profileModel = require('../../models/profileScheme');
const cooldowns = new Map();
module.exports = async (Discord, client, message)=>  {
const prefix = process.env.PREFIX;


if(message.channel.type == 'dm') return

if(!message.content.startsWith(prefix) || message.author.bot) return;

let profileData;
try{
    profileData = await profileModel.findOne({ userID: message.author.id});
    if(!profileData){
        let profile = await profileModel.create({
            userID: message.author.id,
            serverID: message.guild.id,
            Koins: 1000,
            bank: 0,
    
    
        });
        profile.save();

        message.channel.send('Oh hey! Seems like this is your first command, let me quickly scribble you on my notebook!')

        return

    
    }

} catch(err){
    console.log(err);
}

let args = message.content.slice(prefix.length).split(/ +/);
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
command.execute(message, args, cmd, client, Discord, profileData);
}
catch (err){
    message.reply("There was an error in executing the code");
    console.log(err);
}
}