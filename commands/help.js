module.exports = {
    aliases: ['commands', 'command', 'h'],
    name: 'help',
    description: 'The Main Help Center',
    execute(client, message, args, Discord){

        if(!args[0]){

        //The Help Embed Characteristics
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')

        .setAuthor('Help Hub', 'https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
    
        .setThumbnail('https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
    
      
        .addFields(
            {name: '**Moderation**', value:'`~help moderation`', inline: true},
            {name: '**Fun**', value:'`~help fun`', inline: true},
            {name: '**Responses**', value:'`~help response`', inline: true},

        
            
            

        )
         


        .setTimestamp()
        .setFooter('Koala is always watching you');



        //The Help Embed message send
        message.channel.send(helpEmbed);

        }
        
        if(args[0] === 'moderation'){


            //The Help Moderation Embed Characteristics
        const moderationEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')

        .setAuthor('Moderation Hub', 'https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
    
        .setThumbnail('https://cdn.discordapp.com/attachments/810142018697035806/810778087339327488/hammer.png')
    
      
        .addFields(
            {name: '`~clear <value>`', value:'Use this to clear a set of messages!'},
            {name: '`~kick <user>`', value: 'Use this to kick a specific member!'},
            {name: '`~ban <user>`', value: 'Use this to ban a specific member!'},
            {name: '`~mute <user>`', value: 'Use this to mute a specific member!'},
            {name: '`~unmute <user>`', value: 'Use this to unmute a previously muted member!'}
            

        )
         


        .setTimestamp()
        .setFooter('Koala is always watching you!');



        //The Help Embed message send
        message.channel.send(moderationEmbed);

            

        }
        if(args[0] === 'fun'){


            //The Help Fun Embed Characteristics
        const funEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')

        .setAuthor('Fun Hub', 'https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
    
        .setThumbnail()
    
      
        .addFields(
            {name: '`~ossas`', value:'Koala says the hardest African name without stuttering!'},
            {name: '`~sans`', value:'You get a GIF of master Sans (He is so epic OMG)!'},
            {name: '`~role kawaii`', value:'You get the Kawaii role for yourself!'},


        )
         


        .setTimestamp()
        .setFooter('Koala is always watching you!');



        //The Help fun Embed message send
        message.channel.send(funEmbed);
            
            


        }
        if(args[0] === 'response'){

            //The Help Embed Characteristics
        const responseEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')

        .setAuthor('Response Hub', 'https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
    
        .setThumbnail('https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
    
      
        .addFields(
            {name: '`Takla is retarded`', value: "Koala can't argue with facts!"},
            {name: '`Koala is bad`', value:'Koala may or may not get slightly upset!'},
            {name: '`Hello`', value:'Koala sends an appropriate response!'},

        )
         


        .setTimestamp()
        .setFooter('Koala is always watching you!');



        //The Help Response Embed message send
        message.channel.send(responseEmbed);

            

        }
        if(args[0] === 'secret'){

            //The Help Embed Characteristics
        const secretEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')

        .setAuthor('Secret Hub', 'https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
    
        .setThumbnail('https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
    
      
        .addFields(
            {name: '`!spam <user> <time in ms>`', value: "Command so notorious that it was sealed away!"},
            
        )
         


        .setTimestamp()
        .setFooter('Hoh, so you found out the secret category of commands!');



        //The Help Secret Embed message send
        message.channel.send(secretEmbed);
    

        }
        

    }
    



}

