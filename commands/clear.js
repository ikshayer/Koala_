module.exports = {
    name: 'clear',
    description: 'message clear',
    async execute(client, message, args){

        if(message.member.permissions.has("MANAGE_MESSAGES")){
            
        
        if(!args[0]) return message.reply("Please enter the amount of messages that you wish to clear!")
        if(isNaN(args[0])) return message.reply("Please enter a valid number!")

        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages!")
        if(args[0] < 1) return message.reply("You must delete at least one message!")

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);


        })

        }
        else{
            message.reply("You do not have the sufficient permission to run that command!");
        }
    }




}