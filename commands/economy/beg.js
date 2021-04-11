const profileModel = require('../../models/profileScheme')
module.exports = {
    name: 'beg',
    aliases: [],
    cooldown: 120,
    description: 'The Beg command!',
    async execute(message, args, cmd, client, Discord, profileData, lawData){

        if(!profileData) return message.channel.send('You do not have a profile, please do `~start` to create a profile!');
        
        const randomNumber = Math.floor(Math.random() * 200) + 1;
        const response = await profileModel.findOneAndUpdate(
            {
            userID: message.author.id,
        }, 
        {
            $inc: {
                Koins: randomNumber,
            },

        });
        const begEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`You begged and received ${randomNumber} ӄoins like a pathetic loser`)

        return message.channel.send(`You begged and received **${randomNumber} ӄoins** like a pathetic loser`);

    }
}