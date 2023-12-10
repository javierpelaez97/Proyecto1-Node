const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const usuarioRouter = require ('./routes/usuario.routes')
const productoRouter = require ('./routes/producto.routes')


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://javierpelaezgimenez:fsWHSX14NPHAqu25@cluster0.s0vqlbh.mongodb.net/',{    
    useNewUrlParser: true,                                                                                         
    useUnifiedTopology: true,  
})

.then(()=> console.log('connected!'))                                                                     
.catch(err=> console.log('err'));     


app.use('/productos',productoRouter)     

app.use('/usuarios',usuarioRouter)      

app.listen(3000)