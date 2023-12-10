const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const cocheSchema = new Schema({
    modelo:{
        type:String,
        required: true,
    },
    matricula:{
        type: String,
        required: true,
    },
    color:{
        type:String,
        required:false,
    },
    año:{
        type: Number,
        required:true,
    }
})

const Coches = mongoose.model('coches', cocheSchema)

module.exports = Coches