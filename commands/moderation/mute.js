const ms = require('ms');
const muteModel = require('../../models/muteScheme')
module.exports = {
    name: 'mute',
    description: 'The Mute Command',
    async execute(message, args, cmd, client){

        const target = message.mentions.users.first();
        
        if(message.member.permissions.has("MANAGE_MESSAGES")){

            const muteProfile = await muteModel.findOne(
                {
                guild: message.guild.id
                })

            if(!muteProfile) return message.channel.send("Please set up the Mute and Default roles, do ~help setup to learn more!")
                

            if(target){

            let mainRoleID = muteProfile.defaultRole
            let muteRoleID = muteProfile.muteRole

            if(!mainRoleID) return message.channel.send("Please setup a default role, do ~help setup to learn more!")
            if(!muteRoleID) return message.channel.send("Please setup a mute role, do ~help setup to learn more!")

            let memberTarget = message.guild.members.cache.get(target.id); 
            if(memberTarget.roles.cache.has(mainRoleID)){

                if(!args[1]){

                memberTarget.roles.remove(mainRoleID)
                memberTarget.roles.add(muteRoleID)
                message.channel.send(`<@${memberTarget.id}> has been muted!`);
                return
                }
            
                memberTarget.roles.remove(mainRoleID)
                memberTarget.roles.add(muteRoleID)    
                message.channel.send(`<@${memberTarget.id}> has been muted for ${ms(ms(args[1]))}`)

                setTimeout(function(){
                memberTarget.roles.remove(muteRoleID)
                memberTarget.roles.add(mainRoleID)
                }, ms(args[1]));
                     
                }  
                else if(memberTarget.roles.cache.has(muteRoleID)){
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
