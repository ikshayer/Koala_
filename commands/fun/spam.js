const ms = require('ms');
module.exports = {
    name: 'spam',
    description: "We can use this to spam a user's dm!",
    async execute(message, args, cmd, client){

        ownerID = '483181020451962880'

        if(message.author.id == ownerID){

         if(!args[1]) return message.channel.send('Please mention a duration')

         const target = message.mentions.users.first();
         const memberTarget = message.guild.members.cache.get(target.id);

         

         message.channel.send("The User is currently being spammed!");

             spamInterval = setInterval(() => {
             memberTarget.send("https://tenor.com/view/rick-astley-rick-roll-dancing-dance-moves-gif-14097983");
 
             }, 1000);

         setTimeout(function(){
            clearInterval(spamInterval);
            message.channel.send('The User has been spared!')
         }, ms(args[1]));    

         }
         else{
         message.channel.send("This is a master command, only the owner can use it!");
         }
    }
}