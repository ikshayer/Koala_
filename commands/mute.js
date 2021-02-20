
const ms = require('ms');
module.exports = {
    name: 'mute',
    description: 'The Mute Command',
    execute(client, message, args){

        const target = message.mentions.users.first();
        
           
         
        
        if(message.member.permissions.has("MANAGE_MESSAGES")){

           

        
                if(target){

                 let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                 let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                 let memberTarget = message.guild.members.cache.get(target.id); 

                     if(memberTarget.roles.cache.has(mainRole.id)){

            

                         if(!args[1]){

                         memberTarget.roles.remove(mainRole.id)
                         memberTarget.roles.add(muteRole.id)
                         message.channel.send(`<@${memberTarget.id}> has been muted!`);
                         return
                         }
            
            

                     memberTarget.roles.remove(mainRole.id)
                     memberTarget.roles.add(muteRole.id)    
                     message.channel.send(`<@${memberTarget.id}> has been muted for ${ms(ms(args[1]))}`)

                     setTimeout(function(){
                     memberTarget.roles.remove(muteRole.id)
                     memberTarget.roles.add(mainRole.id)
                     }, ms(args[1]));
                     
                 }  
                 else if(memberTarget.roles.cache.has(muteRole.id)){
                 message.channel.send(`<@${memberTarget.id}> is already muted!`);
                 }
                 
                 }

                 else{
                 message.channel.send("Please enter a valid user!")

                 }
            

         }
         else{
            message.channel.send("You do not have the sufficient permissions!")
         }
 
     }

}
