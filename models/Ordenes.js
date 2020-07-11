const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const OrdenSchema = new Schema({
  Nombre: String,
  Descripcion: String,
  Operarios: Number,
  Producto: String,
  Orden: String,
  Encargado: String,
  Incio: String,
  Fin: String,
  FinEstimado: String,
  Unidades: String,
  UnidadesActuales: String,
  Estado: String,

})

const Orden = mongoose.model('ordens', OrdenSchema);

module.exports = Orden;