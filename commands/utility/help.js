module.exports = {
    name: 'help',
    aliases: ['commands', 'command', 'h'],
    description: 'The Main Help Center',
    execute(message, args, cmd, client, Discord){

        if(!args[0]){

        //The Help Embed Characteristics
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')

        .setAuthor('Help Hub', 'https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
        .setDescription('Bot is still under heavy development, refrain from using the commands a lot (Especially Economy commands).')
    
        .setThumbnail('https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
    
      
        .addFields(
            {name: '**Moderation**', value:'`~help moderation`', inline: true},
            {name: '**Fun**', value:'`~help fun`', inline: true},
            {name: '**Responses**', value:'`~help response`', inline: true},
            {name: '**Music**', value: '`~help music`', inline: true},
            {name: '**Economy**', value: '`~help economy`', inline: true},

        )
         
        .setTimestamp()
        .setFooter('Koala is always watching you');

        //The Help Embed message send
        return message.channel.send(helpEmbed);

        }
        
        if(args[0] === 'moderation'){


            //The Help Moderation Embed Characteristics
        const moderationEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')

        .setAuthor('Moderation Hub', 'https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
      
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
        return message.channel.send(moderationEmbed);

            

        }
        if(args[0] === 'fun'){


            //The Help Fun Embed Characteristics
        const funEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')

        .setAuthor('Fun Hub', 'https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
    
        .setThumbnail('https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
    
      
        .addFields(
            {name: '`~ossas`', value:'Koala says the hardest African name without stuttering!'},
            {name: '`~sans`', value:'You get a GIF of master Sans (He is so epic OMG)!'},
            {name: '`~reminder <time> <text> `', value: "You set up a reminder!"},
            {name: '`~ttt <Optional Player 2>`', value: "You can play TicTacToe with either others or the bot"}

        )
         


        .setTimestamp('')
        .setFooter('Koala is always watching you!');



        //The Help fun Embed message send
        return message.channel.send(funEmbed);
            
            


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
        return message.channel.send(responseEmbed);

            

        }
        if(args[0] === 'classified'){

            //The Help Embed Characteristics
        const secretEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')

        .setAuthor('Classified Weapons Hub', 'https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
    
        .setThumbnail('https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
    
      
        .addFields(
            {name: '`~spam <user> <time in ms>`', value: "Command so notorious that it was sealed away!"},
            
        )
         


        .setTimestamp()
        .setFooter('Hoh, so you found out the secret category of commands!');



        //The Help Secret Embed message send
        return message.channel.send(secretEmbed);
    

        }
        if(args[0] === 'music'){
            const musicEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('Music Hub', 'https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
            .addFields(
                {name: '`~play <video>`', value: '**Play a song in a Music Channel!**'},
                {name: '`~stop`', value: '**Makes the bot leave the Music Channel!**'},
                {name: '`~skip`', value: '**Skips the current song!**'},
                {name: '`~pause`', value: '**Pauses the current song!**'},
                {name: '`~unpause`', value: '**Unpauses the current song!**'},
                {name: '`~loop`', value: '**Loops the current song!**'}
            )
            .setTimestamp()
            .setFooter("Koala is always watching!");

            return message.channel.send(musicEmbed)
        }
        if(args[0] === 'economy'){
            const economyEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('Economy Hub', 'https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/810142018697035806/810389801458597928/koala.png')
            .addFields(
                {name: '`~balance`', value: "**Check your own balance or another user's balance!**"},
                {name: '`~deposit`', value: "**Deposit your money to the bank!**"},
                {name: '`~withdraw`', value: "**Withdraw your money from the bank!**"},
                {name: '`~pay`', value: "**Pay money to another user**"}
            )
            .setTimestamp()
            .setFooter("Koala is always watching!")

            return message.channel.send(economyEmbed);
        }
        

    }

}

