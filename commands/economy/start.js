const profileModel = require('../../models/profileScheme')
const lawModel = require('../../models/lawScheme');

module.exports ={
    name: 'start',
    aliases: [],
    description: 'The user creates a profile using this',
    async execute(message, args, cmd, client, Discord, profileData, lawData){

        if(!message.author.id === '483181020451962880') return message.channel.send('owner cmd')
        if(profileData) return message.reply('You already have a profile')

        const Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`???: Wake up Chosen one, You have been selected not by the Abyss but by the God that transcends all.
        I need you as a vessel to achieve Immortality, but you are not worthy yet. Soon you shall be then we shall meet.
        Meanwhile select an occupation to squirm with the very little time you have left in this world`)
        .addFields(
            {name: `1️.`, value: 'Robber'},
            {name: `2.`, value: 'Politician'},
            {name: '3.', value: 'Hobo'},
            {name: '4.', value: 'Abyss Priest'},
            {name: '5.', value: 'Business Man'}

        )

        let profile = await profileModel.create({
            userID: message.author.id,
            Occupation: '',
            serverID: message.guild.id,
            Koins: 1000,
            bank: 0,
            greenleaves: 0
    
    
        });
        profile.save();
        
        let lawData1 = await lawModel.create({
            userID: message.author.id,
            crime: 0
        });
        lawData1.save()


    
    }
}