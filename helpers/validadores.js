function validarCrearProducto(body){
    if (body.modelo === undefined
        || body.modelo.trim() === ""
        || body.matricula === undefined
        || body.matricula.trim() === "") {
        return{
            valido: false,
            mensaje: 'falta nombre o marca'
        }
    }else{
        return{
            valido: true,
            mensaje: null
        }
    }
}


module.exports = {
    validarCrearProducto,
    
}