//primero: importar dependencias
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
//segundo: instanciar express
const app = express()
const authRoutes = require('./routes/auth.routes')


//tercero: configurar puerto
//configuraciones
app.set('port', process.env.PORT || 3000)

//cuarto: configurar los middlewares
//middlewares
app.use(morgan('dev'))
app.use(cors())

//desimotercero: se crean las rutas
//rutas
app.use('/auth', authRoutes)

//inicio del servidor hacer la prueba de que el servidor esta corriendo
app.listen(app.get('port'), ()=>{
    console.log('Server Runing')
})




