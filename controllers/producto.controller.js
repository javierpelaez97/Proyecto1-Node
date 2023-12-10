const Coche = require('../models/producto.model')

async function buscarTodos(){
    const coches = await Coche.find()
    return coches
}

async function buscarPorMatricula(mat){
    const cocheEncontrado = await Coche.findOne(mat)
    return cocheEncontrado
}

async function crearCoche(mod, mat, col, yea){
    const nuevoCoche = new Coche({
        modelo: mod,
        matricula: mat,
        color: col,
        año: yea,
    })
    await nuevoCoche.save()
    return nuevoCoche
}

async function eliminarCoche(mat){
    const cocheBorrado = await Coche.findOneAndDelete(mat)
    return cocheBorrado
}

async function modificarCoche(id, mod, mat, col, yea){
    const cocheModificar = await Coche.findOneAndUpdate(id,{
        modelo: mod,
        matricula: mat,
        color: col,
        año: yea
    })
    return cocheModificar
}

module.exports = {
    buscarTodos,
    buscarPorMatricula,
    crearCoche,
    eliminarCoche,
    modificarCoche
}