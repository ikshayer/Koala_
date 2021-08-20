
module.exports = {
    name: 'ghostping',
    aliases: ['gp'],
    description: "Ping someone and delete it so they don't know who pinged them!",
    async execute(message, args, cmd, client){

        message.delete()

        const target = message.mentions.users.first();

        if(!message.author.id == [483181020451962880, 505287258891354122]) return message.channel.send("You Sussy Baka. This is a Master command, only the Owner can use it!");
        if(!target) return message.channel.send("Please mention a user whom you wish to ghost ping!");
        if(!args[1]) return message.channel.send("Please enter a duration");
        if(isNaN(args[1])) return message.channel.send("Please enter a number");
        if(args[1] < 0) return message.channel.send("Please enter a positive number");
        if(args[1] > 20) return message.channel.send("Please enter a duration below 20 seconds");

        message.author.send(`The GhostPinging for <@${target.id}> has begun!`)

        spamInterval = setInterval(() => {
        message.channel.send(`<@${target.id}>`).then(m => {m.delete();
        });

        }, 2000);
        
        setTimeout(function(){
            clearInterval(spamInterval);
         }, 1000*args[1]);  
        
    }
}    