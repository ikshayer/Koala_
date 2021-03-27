module.exports = {
    name: 'say',
    aliases: [],
    cooldown: 0,
    description: 'The Say command!',
    execute(message, args, cmd, client){
        const prefix = process.env.PREFIX;

        const channel = message.mentions.channels.first();
        const newargs = message.content.slice(prefix.length).split(/ +/);
        const text = newargs.splice(2).join(" ");

        if(!channel) return message.channel.send('Please enter a channel!')
        if(!text) return message.channel.send('Please enter a text to send!')

        message.member.guild.channels.cache.get(channel.id).send(text);

    }
}