const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTIONS"]}); 
const mongoose = require('mongoose');

const MONGODB_SRV = 'mongodb+srv://Onion:rjcock123@koala.r4i6b.mongodb.net/KoalaDB?retryWrites=true&w=majority';


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

 ['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
 })


client.on('ready', () => {
    client.user.setPresence({
        status: "dnd",  // You can show online, idle... Do not disturb is dnd


    });
    client.user.setActivity("Women Are FAKE | ~help", { type: 'WATCHING' })

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
client.on('message', message =>{
    if(message.content.toLowerCase() === "thx koala" || message.content.toLowerCase() === 'thanks koala' || message.content.toLowerCase() === "thank you koala"){
        message.channel.send("B-baka! :flushed:");
    }
})

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,

}).then (() =>{
    console.log('Connected to the Database!');

}).catch((err) =>{
    console.log(err)

});

client.login(process.env.DISCORD_TOKEN);




// client.login(process.env.DJS_TOKEN)
