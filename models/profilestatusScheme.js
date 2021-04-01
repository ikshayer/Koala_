const mongoose = require('mongoose');
const profilestatusschema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    status: {type: String},
})

const Statusmodel = mongoose.model('ProfileStatusModels', profilestatusschema);

module.exports = Statusmodel;