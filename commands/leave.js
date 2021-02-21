module.exports = {


    name: 'leave',
    description: 'The Command for the Bot to leave the Voice Channel',
    async execute(client, message, args){

        const voiceChannel = message.member.voice.channel;

        
        
        if(!voiceChannel) return message.channel.send("You must be in a voice channel to perform this command!");

        await voiceChannel.leave();
        await message.channel.send("Leaving Channel... :smiling_face_with_tear:");
        }

        
           
}
    
        
        


