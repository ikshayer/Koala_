module.exports = {
name: 'ping',
description: 'Literally says E',
execute(message, args){

    if(message.member.permissions.has("MANAGE_MESSAGES")){
        message.channel.send("You can **mute** members :)");
    }
    

/* if(message.member.roles.cache.has('540746438393724929')){
    message.channel.send('E');
    
}
else{
    message.channel.send("You do not have the sufficient permission to do this!");
}

   
*/

}
}