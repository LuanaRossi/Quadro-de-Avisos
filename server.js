//Importar as dependencias
const express = require('express')
const bodyParser = require('body-parser')

//Inicializando o express
const app = express()

//Configurar a view engine e configurar a pasta public
app.set('view engine','ejs')
app.use(express.static('public'))

//Configurar body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser,json())

//escutar a porta
app.listen(3000)
