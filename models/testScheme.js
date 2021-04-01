const mongoose = require('mongoose');
const testschema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    Koins: ({ Wallet: Number, Bank: Number}),
})

const testmodel = mongoose.model('testModels', testschema);

module.exports = testmodel;