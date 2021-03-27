const fs = require('fs');

module.exports = (client, Discord) =>{

    const categories = fs.readdirSync('./commands');

    for (const category of categories) {
    const command_files = fs.readdirSync(`./commands/${category}`).filter(file => file.endsWith('.js'));
    

    for(const file of command_files){
    const command = require(`../commands/${category}/${file}`);
    if(command.name){
        client.commands.set(command.name, command);
    }
    else {
        continue;
    }
    }
}
}