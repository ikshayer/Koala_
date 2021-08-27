
const muteModel = require('../../models/muteScheme')
module.exports ={
    name: "setup",
    description: "To setup vital role information, useful for use in multiple servers",
    async execute(message, args, cmd, client, Discord){

        if(message.member.permissions.has("ADMINISTRATOR")){

        if(!args[0]) return message.channel.send("Please enter valid setup type");

        if(args[0] === "mute"){

            const muteProfile = await muteModel.findOne({guild: message.guild.id})
            if(!muteProfile){
                const muteProfileCreate = await muteModel.create({
                    guild: message.guild.id
                })
                muteProfileCreate.save();
            }

            if(args[1] === "defaultrole"){
                
                const defaultroleID = args[2]

                if(!defaultroleID) return message.channel.send("Please enter the Default Role ID!");
            
                const check = message.guild.roles.cache.find(role => role.id === defaultroleID)
                if(!check) return message.channel.send("There is no role present in the server with this ID")

                await muteModel.findOneAndUpdate({
                    guild: message.guild.id
                },
                {
                    defaultRole: defaultroleID
                });

                message.channel.send("👍 Done!")
                return
            
            }
            if(args[1] === "muterole"){

                const muteroleID = args[2]

                if(!muteroleID) return message.channel.send("Please enter the Mute Role ID!")

                const check = message.guild.roles.cache.find(role => role.id === muteroleID)
                if(!check) return message.channel.send("There is no role present in the server with this ID")

                await muteModel.findOneAndUpdate({
                    guild: message.guild.id
                },
                {
                    muteRole: muteroleID
                });

                message.channel.send("👍 Done!")
                return
            }
        }
        else{
            return message.channel.send("This setup type doesn't exist, do ~help setup to learn more!")
        }
    }
    else{
        return message.channel.send('You do not have administrator permissions!')
    }
   }
}