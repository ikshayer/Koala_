const mongoose = require('mongoose');
const profileschema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    serverID: { type: String, require: true},
    Geo: { type: Number, default: 1000},
    bank: { type: Number},

})

const model = mongoose.model('ProfileModels', profileschema);

module.exports = model;