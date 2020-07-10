const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const categoriaSchema = new Schema({
  nombre: String, // eg. Autobus, Hora entrada, Personal, Trabajo
  tipo: String, //Diaria, Unica, Fija
  created_at: {
    type: Date,
    default: Date.now
  },

});

const CategoriaModel = mongoose.model('categoria', categoriaSchema);


module.exports = CategoriaModel;