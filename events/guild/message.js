module.exports = (Discord, client, message)=>  {
const prefix = '~';

if(!message.content.startsWith(prefix) || message.author.bot) return;

let args = message.content.slice(prefix.length).split(/ +/);
let cmd = args.shift().toLowerCase();

const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

if(command) command.execute(client, message, args, Discord);

}