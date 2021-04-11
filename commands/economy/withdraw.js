const profileModel = require('../../models/profileScheme')
module.exports = {
    name: 'withdraw',
    aliases: ['wd'],
    cooldown: 0,
    description: 'The Withdraw command!',
    async execute(message, args, cmd, client, Discord, profileData, lawData){

        if(!profileData) return message.channel.send('You do not have a profile, please do `~start` to create a profile!');
        
        let amount = args[0]

        if(!amount) return message.channel.send('Please provide an amount to withdraw!')

        if(amount === 'all'){
            const response1 = await profileModel.findOneAndUpdate(
                {
                userID: message.author.id
                },
                {
                    $inc: {
                        Koins: profileData.bank,
                        bank: -profileData.bank,
                    },
                });
                
                return message.channel.send('All of your money has been withdrawn from the Bank!')

        }
        if(isNaN(amount)) return message.channel.send('Please provide a number!')
        if(amount <= 0) return message.channel.send('Please enter an amount more than 0')
        if (amount % 1 != 0) return message.channel.send("Withdraw amount must be a whole number");
        if (amount > profileData.bank) return message.channel.send(`You don't have that amount of Koins to withdraw`);

        const response = await profileModel.findOneAndUpdate(
            {
            userID: message.author.id
            },
            {
                $inc: {
                    Koins: amount,
                    bank: -amount,
                },
            });

            const WithEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${amount} Koins has been withdrawn from the Bank!`)

            return message.channel.send(`**${amount} Koins** has been withdrawn from the Bank!`);

    }
}