const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const notaschema = new Schema({
  nombre: String, // String is shorthand for {type: String}
  texto: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  url: String,
  categoria: String,
  dia: String,
});

const NoteModel = mongoose.model('notas', notaschema);


module.exports = NoteModel;