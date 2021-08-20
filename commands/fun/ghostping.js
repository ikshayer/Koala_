const ms = require('ms');
module.exports = {
    name: 'ghostping',
    aliases: ['gp'],
    description: "Ping someone and delete it so they don't know who pinged them!",
    async execute(message, args, cmd, client){

        message.delete()

        const target = message.mentions.users.first();

        if(!message.author.id == 483181020451962880) return message.channel.send("You Sussy Baka. This is a Master command, only the Owner can use it!");
        if(!target) return message.channel.send("Please mention a user whom you wish to ghost ping!");
        if(!args[1]) return message.channel.send("Please enter a duration");

        message.author.send(`The GhostPinging for <@${target.id}> has begun!`)

        spamInterval = setInterval(() => {
        message.channel.send(`<@${target.id}>`).then(m => {m.delete();
        });

        }, 2000);
        
        setTimeout(function(){
            clearInterval(spamInterval);
         }, ms(args[1]));  
        
    }
}    