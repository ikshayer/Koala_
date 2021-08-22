const mongoose = require('mongoose');
const muteschema = new mongoose.Schema({
    guild: {type: String},
    defaultRole: {type: String},
    muteRole: {type: String}
})

const Mutemodel = mongoose.model('MuteModels', muteschema);

module.exports = Mutemodel;