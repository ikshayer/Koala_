const stock = require('../../counter/stock')
module.exports = async (client) => {

    console.log("Koala is online!")  
    stock()
    
}