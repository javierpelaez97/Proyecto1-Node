const mongoose = require('mongoose')

const Schema = mongoose.Schema

const usuarioSchema = Schema({
    nombre:{
        type:String,
        required:true,
    },
    email: {
        type:String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
    }
})

const Usuarios = mongoose.model('usuarios', usuarioSchema)

module.exports = Usuarios
