const profileModel = require('../models/profileScheme')
module.exports = {
    name: 'beg',
    aliases: [],
    cooldown: 120,
    description: 'The Beg command!',
    async execute(message, args, cmd, client, Discord, profileData){
        const randomNumber = Math.floor(Math.random() * 500) + 1;
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
        .setDescription(`You begged and received ${randomNumber} Koins like a pathetic loser`)

        return message.channel.send(`You begged and received **${randomNumber} Koins** like a pathetic loser`);

    }
}