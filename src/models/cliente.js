const mongoose = require('mongoose');
const { Schema } = mongoose;

const clienteSchema = new Schema({
    ID : { type: Number, required: true },
    Nombre : { type: String, required: true },
    Correo_electronico : { type: String, required: true },
    Numero_de_telefono : { type: String, required: true },
    Direccion : { type: String, required: true },
    Creado_en : { type: Date, default:Date.now, required: true }
});

const cliente = mongoose.model('cliente', clienteSchema);

module.exports = cliente;