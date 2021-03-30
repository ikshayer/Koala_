const mongoose = require('mongoose');
const lawschema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    crime: {type: Number},
})

const lawmodel = mongoose.model('lawModels', lawschema);

module.exports = lawmodel;