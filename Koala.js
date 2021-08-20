const Discord = require('discord.js');
require('dotenv').config();

const {Wit} = require('node-wit')
const voiceBot = new Wit({accessToken: '57MIABDVVUJXTN7T4ECFZQJKPHSKUSOP'})

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTIONS"]}); 
const mongoose = require('mongoose');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


 ['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
 })


client.on('ready', () => {
    client.user.setPresence({
        status: "dnd",  // You can show online, idle... Do not disturb is dnd


    });
    client.user.setActivity("Furries getting slain | ~help", { type: 'WATCHING' })

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
