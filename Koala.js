const fs = require('fs');
const Discord = require('discord.js');
const token = 'ODA5NDM2Nzk4Mjk5Mjc1MzU1.YCVEww.n_EBBzYeWKZxEEH7tNiylbZOfGA'
const client = new Discord.Client(); 
const prefix = '~';



// ['command_handler', 'event_handler'].forEach(handler =>{
//    require(`./handlers/${handler}`)(client, Discord)
// })


client.commands = new Discord.Collection();
let memberCounter = require('./counter/member-counter');

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require (`./commands/${file}`);
    client.commands.set(command.name, command);
}



client.on('ready', () => {
    console.log('Koala is online!');
    memberCounter(client);
    client.user.setPresence({
        status: "dnd",  // You can show online, idle... Do not disturb is dnd


    });
    client.user.setActivity("with your Mom", { type: 'PLAYING' })
})

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
    guildMember.roles.add(welcomeRole.id);
    guildMember.guild.channels.cache.get('540512338676023297').send(`Welcome to the club, <@${guildMember.user.id}>!`);

});

client.on('message', message=>{                                                        //Basically the Prefix Setup
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.slice(prefix.length).split(/ +/);

    let command = args.shift().toLowerCase();

    if(command === 'test'){
        client.commands.get('test').execute(message, args);
    }
    
    if(command === 'leave'){
        client.commands.get('leave').execute(message, args);
    }

    if(command === 'play'){
        client.commands.get('play').execute(message, args);
    }

    if(command === 'spam'){
        client.commands.get('spam').execute(message, args);
    }

    if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }

    if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }

    if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }

    if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }

    if(command === 'role'){
        client.commands.get('role').execute(message, args);
    }

    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }

    if(command === 'ossas'){
        client.commands.get('ossas').execute(message, args);
    }

    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }

    if(command === 'sans'){
        client.commands.get('sans').execute(message, args);
    }

    if(command === 'ping'){           
        client.commands.get('ping').execute(message, args);                       //~ping command
    }


});

client.on('message', message =>{
    if(message.author.id == ''){
        message.delete(),
        message.channel.send("Takla tried to speak but sadly failed!");
    }
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
        message.channel.send('shut up loser');
    }
})

client.on('message', message=>{                                              //Takla is retarded reply
    if(message.content.toLowerCase() === "takla is retarded"){ 
        message.reply('VERY TRUE');
    }
})
 
client.on('message', message=>{                                              //Onion Is Hot reply
    if(message.content.toLowerCase() === "Koala, what is hot?"){ 
        message.channel.send('Onion');
    }
})










client.login(token);




// client.login(process.env.DJS_TOKEN);
