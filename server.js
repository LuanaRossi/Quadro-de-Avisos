//Importar as dependencias
const express = require('express')
const bodyParser = require('body-parser')

//Importando as rotas do aviso
const routerAvisos = require('./components/avisos/AvisosController')

//Inicializando o express
const app = express()

//Configurar a view engine e configurar a pasta public
app.set('view engine','ejs')
app.use(express.static('public'))

app.locals.moment = require('moment')

//Configurar body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.use(routerAvisos)

//escutar a porta
app.listen(3000)
