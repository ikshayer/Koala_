const mongoose = require('mongoose');
const profileModel = require('../../models/profileScheme')

module.exports = {
    name: 'pay',
    aliases: [],
    cooldowns: 0,
    description: 'you pay other person',
    async execute(message, args, cmd, client, Discord, profileData){

        let target = message.mentions.users.first();
        let amount = args[1];
        const targetProf = await profileModel.findOne({ userID: target.id});
        let All = profileData.Koins;

        if(!target) return message.channel.send('That user does not exist');
        if(!amount) return message.channel.send('Please provide an amount to pay!')
        if(!targetProf) return message.channel.send(`<@${target.id}> does not have a profile yet!`)

        if(amount === 'all'){
            const userProfileall = await profileModel.findOneAndUpdate({
                userID: message.author.id
    
            },
            { $inc: {
                Koins: -All
                    },
    
            });
    
            const targetProfileall = await profileModel.findOneAndUpdate({
                userID: target.id
            },
            {
                $inc: {
                    Koins: All
                },
            });

            return message.channel.send(`You have successfully transferred all of your Koins to <@${target.id}>!`)


        }
        
        if(isNaN(amount)) return message.channel.send('Please provide a number!')
        if(amount <= 0) return message.channel.send('Please enter an amount more than **0**!')
        if (amount % 1 != 0) return message.channel.send("The amount must be a whole number!");
        if (amount > profileData.Koins) return message.channel.send(`You don't have that amount of Koins to pay others!`);

        const userProfile = await profileModel.findOneAndUpdate({
            userID: message.author.id

        },
        { $inc: {
            Koins: -amount
                },

        });

        const targetProfile = await profileModel.findOneAndUpdate({
            userID: target.id
        },
        {
            $inc: {
                Koins: amount
            },
        });

        return message.channel.send(`You have successfully transferred **${amount}** Koins to <@${target.id}>`)

        


    }
}