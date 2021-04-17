const profileModel = require('../../models/profileScheme')
const lawModel = require('../../models/lawScheme');

module.exports ={
    name: 'start',
    aliases: [],
    description: 'The user creates a profile using this',
    async execute(message, args, cmd, client, Discord, profileData, lawData){
    

        let filter = m => m.author.id === message.author.id

        const channel = message.channel.id

        if(!message.author.id === '483181020451962880') return message.channel.send('owner cmd')

        const Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`???: Wake up Chosen one, Thou have been selected not by the Abyss but by the God that transcends all.
            Thou are the vessel I seek, but Thou are yet not worthy. When the time arrives I shall come, my vessel.
                 I shall see you ponder as thee select an occupation to squirm with the very little time thou have left in this world`)
        .setThumbnail('https://cdn.discordapp.com/attachments/810142018697035806/831559902426169354/Kai_of_the_Abyss2-export.png')
        .addFields(
            {name: `1️.`, value: 'Robber'},
            {name: `2.`, value: 'Politician'},
            {name: '3.', value: 'Hobo'},
            {name: '4.', value: 'Cultist'},

        )

        const messageEmbed = await message.channel.send(Embed)

        try {
            messageEmbed.react('1️⃣')
            messageEmbed.react('2️⃣')
            messageEmbed.react('3️⃣')
            messageEmbed.react('4️⃣')
          } catch (err) {
            channel.send("Error sending emojis!");
            throw err;
          }
      
          const collector = messageEmbed.createReactionCollector(
            (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id),
            {
             time: 20000
            }
          );
      
          collector.on("collect", async (reaction, user) => {
            if (user.bot) return;

            switch (reaction.emoji.name) {
              case "1️⃣":

              const rootEmbed = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setDescription('Are you sure you wanna be a Robber?')

                const response = await message.channel.send(rootEmbed)
                try {
                    response.react('👍')
                    response.react('👎')
                  } catch (err) {
                    channel.send("Error sending emojis!");
                    throw err;
                  }
              
                  const collector1 = response.createReactionCollector(
                    (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id),
                    {max: 3,
                    time: 20000   
                    }
                  );
              
                  collector1.on("collect", (reaction, user) => {
                    if (user.bot) return;
                    switch (reaction.emoji.name) {
                    case "👍":
                        message.channel.send('You are now a Robber!')
                    break;
                    case "👎":
                        message.channel.send('Select again')
                    break;    
                    }
                })

                break;  
                
              case "2️⃣":

                const rootEmbed1 = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription('Are you sure you wanna be a Politician?')

                const response1 = await message.channel.send(rootEmbed1)
                try {
                    response1.react('👍')
                    response1.react('👎')
                  } catch (err) {
                    channel.send("Error sending emojis!");
                    throw err;
                  }
              
                  const collector2 = response1.createReactionCollector(
                    (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id),
                    {max: 3,
                    time: 20000   
                    }
                  );
              
                  collector2.on("collect", (reaction, user) => {
                    if (user.bot) return;
                    switch (reaction.emoji.name) {
                    case "👍":
                        message.channel.send('You are now a Politician!')
                    break;
                    case "👎":
                        message.channel.send('Select again')
                    break;    
                    }
                })
                
                break;  
              case "3️⃣":

                const response2 = await message.channel.send('Are you sure you wanna be a Hobo?')
                try {
                    response2.react('👍')
                    response2.react('👎')
                  } catch (err) {
                    channel.send("Error sending emojis!");
                    throw err;
                  }
              
                  const collector3 = response2.createReactionCollector(
                    (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id),
                    {max: 3,
                    time: 20000   
                    }
                  );
              
                  collector3.on("collect", (reaction, user) => {
                    if (user.bot) return;
                    switch (reaction.emoji.name) {
                    case "👍":
                        message.channel.send('You are now a Hobo!')
                    break;
                    case "👎":
                        message.channel.send('Select again')
                    break;    
                    }
                })
                
                break;  
              case "4️⃣":

                const response3 = await message.channel.send('Are you sure you wanna be a Cultist?')
                try {
                    response3.react('👍')
                    response3.react('👎')
                  } catch (err) {
                    channel.send("Error sending emojis!");
                    throw err;
                  }
              
                  const collector4 = response3.createReactionCollector(
                    (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id),
                    {max: 3,
                    time: 20000   
                    }
                  );
              
                  collector4.on("collect", (reaction, user) => {
                    if (user.bot) return;
                    switch (reaction.emoji.name) {
                    case "👍":
                        message.channel.send('You are now a Hobo!')
                    break;
                    case "👎":
                        message.channel.send('Select again')
                    break;    
                    }
                })
                
                break;      
            }
          });


    }
}