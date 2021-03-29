const profileModel = require('../../models/profileScheme')

module.exports ={
    name: 'rob',
    aliases: [],
    description: 'The rob command!',
    async execute(message, args, cmd, client, Discord, profileData){
        const randomNumber = Math.floor(Math.random() * 1000) + 1;

        console.log(randomNumber);

        const target = message.mentions.users.first();

        if(!target) return message.channel.send("Please mention a user to rob!");

        

            const checktargetData = await profileModel.findOne({userID: target.id})

            if(!checktargetData) return message.channel.send(`<@${target.id}> does not have a profile yet!`)

            if(checktargetData.Koins == 0) return message.channel.send(`It seems <@${target.id}> has no Koins in their wallet!`)

            if(randomNumber > 660){

                const amount = Math.round((10 /100) * checktargetData.Koins);

                await profileModel.findOneAndUpdate({
                    userID: target.id
                },
                { $inc: 
                    { Koins: -amount }
                })

                await profileModel.findOneAndUpdate({
                    userID: message.author.id
                },
                { $inc: 
                    { Koins: amount }
                })

                const TargetData = await profileModel.findOne({userID: target.id});
                const userData = await profileModel.findOne({userID: message.author.id});

                const Embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('You felt a slight breeze!', 'https://cdn.discordapp.com/attachments/810142018697035806/819852539011792916/koala.png')
                .setDescription(`**You stole ${amount} Koins!**`)
                .setFooter('Be sure to deposit the Koins to your Bank to keep it safe!')
                
                
                message.channel.send(Embed)
                return


            }



            if(randomNumber > 320 && randomNumber <= 660) return message.channel.send(`You tried to rob ${target.username}'s but their Aura was too menacing!`);




            if(randomNumber > 120 && randomNumber <= 320 ){

                const amount = Math.round((20 /100) * checktargetData.Koins);

                await profileModel.findOneAndUpdate({
                    userID: target.id
                },
                { $inc: 
                    { Koins: -amount }
                 })

                await profileModel.findOneAndUpdate({
                    userID: message.author.id
                },
                { $inc: 
                       { Koins: amount }
                })

                const TargetData = await profileModel.findOne({userID: target.id});
                const userData = await profileModel.findOne({userID: message.author.id});

                const Embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('The wind has blew your way!', 'https://cdn.discordapp.com/attachments/810142018697035806/819852539011792916/koala.png')
                .setDescription(`**You stole ${amount} Koins!**`)
                .setFooter('Be sure to deposit the Koins to your Bank!')
                
                
                message.channel.send(Embed)
                return
            }





            if(randomNumber > 20 && randomNumber <= 120){

                const amount = Math.round((50 /100) * checktargetData.Koins);

                await profileModel.findOneAndUpdate({
                    userID: target.id
                },
                { $inc: 
                    { Koins: -amount }
                });

                await profileModel.findOneAndUpdate({
                    userID: message.author.id
                },
                { $inc: 
                    { Koins: amount }
                });

                const TargetData = await profileModel.findOne({userID: target.id});
                const userData = await profileModel.findOne({userID: message.author.id});

                const Embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('The wind has listened!', 'https://cdn.discordapp.com/attachments/810142018697035806/819852539011792916/koala.png')
                .setDescription(`**You stole ${amount} Koins!**`)
                .setFooter('Be sure to deposit the Koins to your Bank to keep it safe!')
                
                
                message.channel.send(Embed);
                return

            }



            

            if(randomNumber <= 20){

                const amount = checktargetData.Koins

                await profileModel.findOneAndUpdate({
                    userID: target.id
                },
                { $inc: 
                    { Koins: -amount }
                 })

                await profileModel.findOneAndUpdate({
                    userID: message.author.id
                },
                { $inc: 
                    { Koins: amount }
                 })
 
                const TargetData = await profileModel.findOne({userID: target.id});
                const userData = await profileModel.findOne({userID: message.author.id});

                const Embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('The wind has chosen you!', 'https://cdn.discordapp.com/attachments/810142018697035806/819852539011792916/koala.png')
                .setDescription(`**You stole ${amount} Koins!**`)
                .setFooter('Be sure to deposit the Koins to your Bank to keep it safe!')
                
                
                message.channel.send(Embed);
                return

            }

            
    }
}