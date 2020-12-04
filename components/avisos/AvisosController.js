const router = require('express').Router()

const Avisos = require('./Avisos')
const Aviso = require('./Avisos')

router.get('/', (req,res)=>{
  res.send("Principal")
})

router.get('/avisos', async (req,res)=>{
  const avisos = await Avisos.selecionarTodos()
  res.render('avisos', {avisos})
})

router.get('/avisos/novo', (req,res)=>{
  res.render('formulario_avisos')
})

router.post('/avisos/novo', async (req, res)=>{
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem

  const msg = await Aviso.salvar({titulo, data, mensagem})
    res.render('formulario_avisos', {msg})
})

module.exports = router
