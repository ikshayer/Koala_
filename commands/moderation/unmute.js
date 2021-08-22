const muteModel = require("../../models/muteScheme")
module.exports = {
    name: 'unmute',
    description: 'The Unmute Command',
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
 
                let memberTarget = message.guild.members.cache.get(target.id);

                if(memberTarget.roles.cache.has(muteRoleID)){

                     

                     memberTarget.roles.remove(muteRoleID);
                     memberTarget.roles.add(mainRoleID);
                     message.channel.send(`<@${memberTarget.id}> has been unmuted!`);

                     }
                
                     else if(memberTarget.roles.cache.has(mainRoleID)){
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