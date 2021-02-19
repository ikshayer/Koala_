module.exports = {
    name: 'ban',
    description: 'The Ban Command!',
    execute(message, args){
        const member = message.mentions.users.first();
        if(message.member.permissions.has("BAN_MEMBERS")){
            
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("The User has been successfully banned!");

        }
        else {
            message.channel.send("The User could not be banned!");
        }


    }
    else{
        message.channel.send("You do not have the sufficient permissions!");
    }

    }


}