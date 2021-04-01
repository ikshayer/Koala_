const stock = require('../../counter/stock')
const law = require('../../counter/law')
module.exports = async (client) => {

    console.log("Koala is online!"); 
    stock();
    law(client);
    
}