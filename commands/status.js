module.exports = {
    name: 'status',
    description: 'You can set up status, POG',
    execute(client, message, args){
    
        if(!args[0]){
            message.channel.send("Please state a status to give");
        }
        if(args[0]){
         client.user.setPresence({
         activity: {
            name: args[0],
            type: 0,
         }

         });
        }
    }
}