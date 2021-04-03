const profileModel = require('../../models/profileScheme')
const lawModel = require('../../models/lawScheme')

module.exports ={
    name: 'rob',
    aliases: [],
    description: 'The rob command!',
    async execute(message, args, cmd, client, Discord, profileData, lawData){


        if(lawData.crime >= 10) return message.channel.send('Sinners must grieve from their sins, only then shall the Abyss acknowledge their deeds')

        const target = message.mentions.users.first();

        if(!target) return message.channel.send("Please mention a user to rob!");

        const randomNumber = Math.floor(Math.random() * 1000) + 1;

        console.log(randomNumber);

            const checktargetData = await profileModel.findOne({userID: target.id})

            if(!checktargetData) return message.channel.send(`<@${target.id}> does not have a profile yet!`)

            if(checktargetData.Koins <= 1000) return message.channel.send(`Bro chill, <@${target.id}> has less than 1000 ӄoin in their wallet!`)

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

                await lawModel.findOneAndUpdate(
                    {
                    userID: message.author.id,
                }, 
                {
                    $inc: {
                        crime: 5,
                    },
        
                });

                const TargetData = await profileModel.findOne({userID: target.id});
                const userData = await profileModel.findOne({userID: message.author.id});
                const law = await lawModel.findOne({userID: message.author.id});

                const Embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`The Abyss is engulfed in utter rage, your Crime level is now ${law.crime}!`, 'https://cdn.discordapp.com/attachments/810142018697035806/819852539011792916/koala.png')
                .setDescription(`**You stole ${amount} ӄoins!**`)
                .setFooter('Be sure to deposit the ӄoins to your Bank to keep it safe!')
                
                
                message.channel.send(Embed)
                return


            }



            if(randomNumber > 320 && randomNumber <= 660){

                await lawModel.findOneAndUpdate(
                    {
                    userID: message.author.id,
                }, 
                {
                    $inc: {
                        crime: 5,
                    },
        
                });

                const law = await lawModel.findOne({userID: message.author.id})

                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`No one fools the Abyss, your Crime Level is now ${law.crime}`, 'https://cdn.discordapp.com/attachments/810142018697035806/819852539011792916/koala.png')
                .setDescription(`You tried to rob <@${target.id}> but their Aura was too strong`)
                .setFooter('Be sure to deposit the ӄoins to your Bank!')

                message.channel.send(embed)
                return
            }




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

                await lawModel.findOneAndUpdate(
                    {
                    userID: message.author.id,
                }, 
                {
                    $inc: {
                        crime: 3,
                    },
        
                });

                const TargetData = await profileModel.findOne({userID: target.id});
                const userData = await profileModel.findOne({userID: message.author.id});
                const law = await lawModel.findOne({userID: message.author.id});

                const Embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`The Abyss' divine eyes see all, your Crime level is now ${law.crime}!`, 'https://cdn.discordapp.com/attachments/810142018697035806/819852539011792916/koala.png')
                .setDescription(`**You stole ${amount} ӄoins!**`)
                .setFooter('Be sure to deposit the ӄoins to your Bank!')
                
                
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

                await lawModel.findOneAndUpdate(
                    {
                    userID: message.author.id,
                }, 
                {
                    $inc: {
                        crime: 1,
                    },
        
                });

                const TargetData = await profileModel.findOne({userID: target.id});
                const userData = await profileModel.findOne({userID: message.author.id});
                const law = await lawModel.findOne({userID: message.author.id})

                const Embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`The Abyss' eye blinked, your Crime level is now ${law.crime}!`, 'https://cdn.discordapp.com/attachments/810142018697035806/819852539011792916/koala.png')
                .setDescription(`**You stole ${amount} ӄoins!**`)
                .setFooter('Be sure to deposit the ӄoins to your Bank to keep it safe!')
                
                
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
                .setAuthor(`You have fooled God, your Crime Level is ${lawData.crime}!`, 'https://cdn.discordapp.com/attachments/810142018697035806/819852539011792916/koala.png')
                .setDescription(`**You stole ${amount} ӄoins!**`)
                .setFooter('Be sure to deposit the ӄoins to your Bank to keep it safe!')
                
                
                message.channel.send(Embed);
                return

            }

           
    }
}