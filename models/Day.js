const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const dayschema = new Schema({
  dia: String, // String is shorthand for {type: String}



});

const DayModel = mongoose.model('day', dayschema);


module.exports = DayModel;