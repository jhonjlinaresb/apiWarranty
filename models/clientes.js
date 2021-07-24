const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    estado:{ 
        type: Boolean,
        required: [true, 'Required field']
    },
    fechaInicio:{
        type: Date,
        required: [true, 'Required field']
    },
    fechaFin:{
        type: Date,
        required: [true, 'Required field']
    },
    numero:{
        type: Number,
        unique: true,
        required: [true, 'Required field']
    },
    direccion:{
        type: String,
        required: [true, 'Required field']
    },
    nombre:{
        type: String,
        required: [true, 'Required field']
    }
})

const ClientModel = mongoose.model('clientes', ClientSchema);
module.exports = ClientModel;