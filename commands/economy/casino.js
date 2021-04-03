module.exports ={
    name: 'casino',
    aliases: [],
    description: 'The entirety of the gamble commands',
    async execute(message, args, cmd, client, Discord, profileData, lawData){

        if(!args[0]) return message.reply('Please do `casino help` for a brief information on this facility!');
        if(args[0] === 'help'){
            const Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('Welcome to the House of Profit and Shame', 'https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
            .addFields(
                {name: '`~casino tokens <amount>`', value: 'You can use this to buy a set amount of credit'},
                {name: '`~casino coinflip`', value: '`You spend **10k** tokens to get a 50/50 opportunity to win double or nothing!'}
            )
        }
    }
}