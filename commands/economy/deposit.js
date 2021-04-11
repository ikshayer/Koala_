const profileModel = require('../../models/profileScheme')
module.exports = {
    name: 'deposit',
    aliases: ['dep'],
    cooldown: 0,
    description: 'The deposit command!',
    async execute(message, args, cmd, client, Discord, profileData, lawData){

        if(!profileData) return message.channel.send('You do not have a profile, please do `~start` to create a profile!');

        
        let amount = args[0]

        if(!amount) return message.channel.send('Please provide an amount to deposit!')
        if(amount === 'all'){
            const response1 = await profileModel.findOneAndUpdate(
                {
                userID: message.author.id
                },
                {
                    $inc: {
                        Koins: -profileData.Koins,
                        bank: profileData.Koins,
                    },
                });
                
                return message.channel.send('All of your ӄoins have been deposited to the Bank!')

        }
        if(isNaN(amount)) return message.channel.send('Please provide a number!')
        
        if(amount <= 0) return message.channel.send('Please enter an amount more than 0')
        if (amount % 1 != 0) return message.channel.send("Deposit amount must be a whole number");
        if (amount > profileData.Koins) return message.channel.send(`You don't have that amount of ӄoins to deposit`);

        const response = await profileModel.findOneAndUpdate(
            {
            userID: message.author.id
            },
            {
                $inc: {
                    Koins: -amount,
                    bank: amount,
                },
            });

            const WithEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${amount} ӄoins has been deposited to the Bank!`)

            return message.channel.send(`**${amount} ӄoins** has been deposited to the Bank!`);

    }
}