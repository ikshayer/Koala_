const mongoose = require('mongoose');
const testschema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    Koins: { type: Number},
    bank: { type: Number},
})

const testmodel = mongoose.model('testModels', testschema);

module.exports = testmodel;