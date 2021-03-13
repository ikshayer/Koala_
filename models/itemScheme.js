const mongoose = require('mongoose');
const itemschema = new mongoose.Schema({
    title: {type: String},
    GreenLeavesPrice: {type: Number},
})

const Itemmodel = mongoose.model('ItemModels', itemschema);

module.exports = Itemmodel;