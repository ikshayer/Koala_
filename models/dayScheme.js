const mongoose = require('mongoose');
const dayschema = new mongoose.Schema({
    title: {type: String},
    Sunday: {type: Boolean},
    Monday: {type: Boolean},
    Tuesday: {type: Boolean},
    Wednesday: {type: Boolean},
    Thursday: {type: Boolean},
    Friday: {type: Boolean}, 
    Saturday: {type: Boolean}

})

const Daymodel = mongoose.model('DayModels', dayschema);

module.exports = Daymodel;