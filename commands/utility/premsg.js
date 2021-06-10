const ms = require('ms')

module.exports={
    name: 'premsg',
    aliases: ['pm'],
    description: 'Use this to send a message after a given time, basically like a scheduled message',
    async execute(message, args, cmd, client, Discord){
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return

        const prefix = process.env.PREFIX;

        const channel = message.mentions.channels.first();
        const newargs = message.content.slice(prefix.length).split(/ +/);
        const time = args[1];
        
        if(!time.endsWith('s') &&
           !time.endsWith('m') &&
           !time.endsWith('h') 
        ){
            return message.channel.send('Please enter the number in either days, hours, minutes, or seconds!')
        }
        

        const text = newargs.splice(3).join(" ");

        if(!channel) return message.channel.send('Please enter a channel!')
        if(!text) return message.channel.send('Please enter a text to send!')

       // message.member.guild.channels.cache.get(channel.id).send(text);

       message.author.send(`The message that you planned will be sent to the designated channel at the scheduled time after ${time}`);

       maincommand = setTimeout(async function(){
        await message.member.guild.channels.cache.get(channel.id).send(text);

       }, ms(time));
    
    }

}