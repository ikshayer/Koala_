const mongoose = require('mongoose');
const profileschema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    serverID: { type: String, require: true},
    Koins: { type: Number, default: 1000},
    bank: { type: Number},
    greenleaves: { type: Number}

})

const model = mongoose.model('ProfileModels', profileschema);

module.exports = model;