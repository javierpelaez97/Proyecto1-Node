
const express = require('express')
const router = express.Router()

const{buscarTodos, buscarPorMatricula, eliminarCoche, modificarCoche, crearCoche}= require('../controllers/producto.controller')

const {validarCrearProducto} = require('../helpers/validadores')

 router.get("/",async(req,res)=>{
    try{
        const coches = await buscarTodos()
        res.json(coches)
    }catch(error){
        res.status(500).json({msg: 'error interno'})
    }
})

router.get("/:matricula", async (req,res) =>{
    try{
        const cocheEncontrado = await buscarPorMatricula(req.params)
        if(cocheEncontrado){
            res.json(cocheEncontrado)
        }else{
            res.status(404).json({ msg: 'error: producto no encontado' }) 
        }
    }catch(error){
        res.status(500).json({ msg: 'error interno' })
    }
})


router.post("/",async(req,res)=>{
    await crearCoche(
        req.body.modelo,
        req.body.matricula,
        req.body.color,
        req.body.año,
    )
    res.json({ msg: 'coche creado correctamente' })
})

router.delete("/:matricula", async (req, res) => {
    const cocheBorrado = await eliminarCoche(req.params)
    
    if (cocheBorrado) {
        res.json({ msg: 'coche borrado!' })
    }
    else {
        res.json({ msg: 'error: coche no encontrado' })
    }
})

router.put("/:matricula", async (req, res) => {
    let encontrado = null
    let msg = []
    // tengo que comprobar que todos los atributos que se pueden tocar, vienen al completo
    const resultadoValidacion = validarCrearProducto(req.body)
    if(!resultadoValidacion.valido){
        res.status(400).json({ msg: resultadoValidacion.mensaje })
    } else {
        
        encontrado = await modificarCoche(
            req.params.id, 
            req.body.modelo.trim(), 
            req.body.color.trim(),
            req.body.matricula.trim(),
            req.body.año
            )

        res.json(encontrado === null ? { msg: 'error: coche no encontrado' } : { dato: encontrado, mensajes: msg })
    }

})

router.patch("/:matricula", async (req, res) => {
    let encontrado = null
    let msg = []

    
    encontrado = await modificarCoche(
        req.params.id,
        req.body.modelo.trim(),
        req.body.matricula.trim(),
        req.body.color.trim(),
        req.body.año)

    res.json(encontrado === null ? { msg: 'error: coche no encontrado' } : { dato: encontrado, mensajes: msg })

})

module.exports = router;