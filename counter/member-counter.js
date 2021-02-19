module.exports = async (client) =>{

const guild = client.guilds.cache.get('540174761490382869');
setInterval(() =>{
    const memberCount = guild.memberCount;
    const channel = guild.channels.cache.get('811293251549266011');
    channel.setName(`Member Counter: ${memberCount.toLocaleString()}`);
}, 5000);

}