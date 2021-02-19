const ms = require('ms');
module.exports = {
    name: 'spam',
    description: "We can use this to spam a user's dm!",
    async execute(message, args){

        if(message.member.permissions.has("ADMINISTRATOR")){

         const target = message.mentions.users.first();
         const memberTarget = message.guild.members.cache.get(target.id);

         if(args[1] <= 30000 ){

         message.channel.send("The User is currently being spammed!");

             spamInterval = setInterval(() => {
             memberTarget.send("E!");
 
             }, 1000);

         setTimeout(function(){
            clearInterval(spamInterval);
            message.channel.send('The User has been spared!')
         }, ms(args[1]));    

         }
         else{
             message.channel.send("Please enter a value below or equal to 30000 (millisecond)!");
         }

         }
         else{
         message.channel.send("You do not have the sufficient permission!");
         }
    }
}