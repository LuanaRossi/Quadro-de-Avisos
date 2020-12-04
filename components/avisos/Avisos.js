const db = require('../../knexfile.js')

/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato:
 * {titulo: <string>, data: <date>, mensagem: <string>}
 * @returns {object} Mensagem de sucesso ou de erro
 */

function salvar(aviso){
  return db.insert(aviso).into('avisos')
      .then( _ =>{
        return{tipo:"Sucesso!", corpo:"Aviso cadastrado com sucesso!"}
      })
      .catch(err =>{
        return{tipo:"Erro:", corpo:"Erro:"+erro}
      })
}//Fim de salvar

/**
 * Seleciona todos os avisos cadastrados
 * @returns {object} Objeto com todos os avisos cadastrados ou
 * uma mensagem de erro
 */



function selecionarTodos(){
  return db.select('*').from('avisos')
    .then(avisos =>{ return avisos })
    .catch(erro =>{
      return {tipo: "erro", corpo: "Erro: " + erro}
    })
}//Fim do selecionar todos

module.exports = {salvar, selecionarTodos}
