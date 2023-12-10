const Usuarios = require ('../models/usuario.model')

async function buscarTodos(){
    const usuarios = await Usuarios.find()
    return usuarios
}

async function busacarPorEmail(email){
    const usuarioEncontrado = Usuarios.findOne(email)
    return usuarioEncontrado
}

async function crearUsuario(nom, email, pwd){
    const nuevoUsuario = new Usuarios({
        nombre: nom,
        email: email,
        password: pwd,
    })
    await nuevoUsuario.save()
    return nuevoUsuario
}
async function eliminarUsuario(email){
    const usuarioBorrado = await Usuarios.findOneAndDelete(email)
    return usuarioBorrado
}

module.exports = {
    buscarTodos,
    busacarPorEmail,
    crearUsuario,
    eliminarUsuario
}