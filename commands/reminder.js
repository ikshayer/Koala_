const ms = require('ms')
module.exports = {
    name: 'remind',
    description: 'you get reminded of something!',
    async execute(client, message, args, Discord){
        const time = args[0];
        const reminder = args.splice(1).join(" ");

        if(!time) return message.channel.send("Please provide a time to set!")
        
        if(!reminder) return message.channel.send("Please provide a reminder to set!")

        if(!time.endsWith('d') &&
           !time.endsWith('h') &&
           !time.endsWith('m') &&
           !time.endsWith('s'))
            
        return message.channel.send("Please enter the number in either days, hours, minutes, or seconds!")


            const remindertime = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`Your reminder will go off in ${time}!`)

            message.author.send(remindertime);

            const reminderdm = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**It has been ${time}**, here is your Reminder: ***${reminder}!***`)

            maincommand = setTimeout(async function(){
                await message.author.send(reminderdm);

            }, ms(time));
        
    }
}