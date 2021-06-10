const stock = require('../../counter/stock')
const law = require('../../counter/law');
const guildMemberAdd = require('../guild/guildMemberAdd');
module.exports = async (client) => {

    console.log("Koala is online!"); 
    stock();
    law(client);
    
}