module.exports = {
    name: 'kick',
    description: 'The Kick Command!',
    execute(message, args, cmd, client){
        const member = message.mentions.users.first();
        
    if(message.member.permissions.has("KICK_MEMBERS")){    
        
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("The User has been successfully kicked!");

        }
        else {
            message.channel.send("The User could not be kicked!");
        }
    }
    else{
        message.channel.send("You do not have the sufficient permissions!");
    }




    }





}