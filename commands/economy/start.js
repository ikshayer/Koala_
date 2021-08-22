const profileModel = require('../../models/profileScheme')
const lawModel = require('../../models/lawScheme');

module.exports ={
    name: 'start',
    aliases: [],
    description: 'The user creates a profile using this',
    async execute(message, args, cmd, client, Discord, profileData, lawData){
    
     message.channel.send('Illegal unfinished command');
     return

        let filter = m => m.author.id === message.author.id

        const channel = message.channel.id

        if(!message.author.id === '483181020451962880') return message.channel.send('owner cmd')

        const Embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`Sigh, another person? Ugh take one of these and leave`)
        .addFields(
            {name: `Ring of the Witch of Greed`, value: 'No one can control Greed, Higher chances of winning the Casino'},
            {name: `Memory of Hwan`, value: 'Memory of the One who had changed History, Increased Charisma'},
            {name: `Darkness from the Abyss`, value: 'Embrace Darkness and deceive Truth, Higher chances of tricking the Abyss'},
            {name: `Shattered Sword`, value: "Sword of a Hero who couldn't escape divine punishment, Does nothing"},
            {name: `Veil of Tainted Tears`, value: 'Tears of the Men who defied God, Lower Luck'},
            {name: `Juan`, value: "Juan"}

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