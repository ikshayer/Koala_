module.exports = {
    name: 'status',
    description: 'You can set up status, POG',
    execute(client, message, args){

        const content = message.content.replace('~status', '');
    
    if(!content){
    message.channel.send("Please state a status to give");
    }
    
    if(content){

         client.user.setPresence({
         activity: {
            name: content,
            type: 0,
         }
        });
    }


         
    }
}
