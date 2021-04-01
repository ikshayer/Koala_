const lawModel = require('../models/lawScheme')
module.exports = async (client) =>{

    setInterval(async () =>{

        

        await lawModel.updateMany(
        {crime: {$gt: 0}},
        { $inc: {
             crime: -1
        }});
        
    console.log('The Crime levels decreased')

    }, 21600000);
    

}