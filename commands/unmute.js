module.exports = {
    name: 'unmute',
    description: 'The Unmute Command',
    execute(message, args){

        const target = message.mentions.users.first();


        if(message.member.permissions.has("MANAGE_MESSAGES")){

            
        
                 if(target){

                     let mainRole = message.guild.roles.cache.find(role => role.name === "Member");
                     let muteRole = message.guild.roles.cache.find(role => role.name === "Muted");
 
                     let memberTarget = message.guild.members.cache.get(target.id);

                     if(memberTarget.roles.cache.has(muteRole.id)){

                     

                     memberTarget.roles.remove(muteRole.id);
                     memberTarget.roles.add(mainRole.id);
                     message.channel.send(`<@${memberTarget.id}> has been unmuted!`);

                     }
                
                     else if(memberTarget.roles.cache.has(mainRole.id)){
                     message.channel.send(`<@${memberTarget.id}> is not muted!`)
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