const Discord = require('discord.js');
const token = 'ODA5NDM2Nzk4Mjk5Mjc1MzU1.YCVEww.n_EBBzYeWKZxEEH7tNiylbZOfGA'
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTIONS"]}); 


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

 ['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
 })

 client.on('message', message=>{
    if(message.content.toLowerCase() === "koala is bad"){                             //"koala is bad" reply
        message.author.send('I will fucking kill you :)');
    }
})

client.on('message', message=>{
    if(message.content.toLowerCase() === "shitty bot"){
        message.channel.send('fuck you bitchass');
    }
})


client.on('message', message=>{                                               //Hello reply
    if(message.content.toLowerCase() === "hello"){
        message.channel.send('shut up loser', {tts: true});
    }
})

client.on('message', message=>{                                              //Takla is retarded reply
    if(message.content.toLowerCase() === "takla is retarded"){ 
        message.reply('VERY TRUE');
    }
})
 
client.on('message', message=>{                                              //Onion Is Hot reply
    if(message.content.toLowerCase() === "koala, what is hot?"){ 
        message.channel.send('Onion');
    }
})

client.login(token);




// client.login(process.env.DJS_TOKEN)
