const express = require('express')  

const router = express.Router()   

const {buscarTodos, buscarPorEmail, crearUsuario, eliminarUsuario } = require('../controllers/usuario.controller')



router.get("/", async (req, res) => {      
    try{
        const usuarios = await buscarTodos()   
        res.json(usuarios)
    }  catch(error){
        res.status(500).json({ msg: 'error interno' })
        }
})



router.get("/:email", async (req, res) => {
    
    try{
        const usuarioEncontrado = await buscarPorEmail(req.params)   
    if(usuarioEncontrado){
        res.json(usuarioEncontrado)
    }
    else{
        res.json({msg: "error: usuario no encontado"})    
    } 
    }catch(error){
        res.status(500).json({ msg: 'error interno' })
    }
     
})



router.post("/", async (req,res)=>{
    try{
        await crearUsuario(
            req.body.nombre.trim(),
            req.body.email.trim(),
            req.body.password
        )
    
        res.json({msg: 'Usuario creado correctamente'})
    }catch(error){
        res.status(500).json({ msg: 'Contraseña con menos de 8 carácteres' })
    }
        
    
})

router.delete(":/email", async (req,res)=>{
    
    const usuarioBorrado = await eliminarUsuario(req.params)
    if(usuarioBorrado){
        res.json({msg:'Usuario Borrado'})
    }else{
        res.json({msg:'Error producto no encontrado'})
    }
})

module.exports = router