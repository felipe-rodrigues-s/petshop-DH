const servicos = require('../model/servico.json')
const indexController = {
  index:(req, res) => {
    res.render('index', {listaServicos:servicos})
  },
  login: (req,res)=>{
    res.render('login');
  }, 
  contato: (req,res)=>{
    res.render('contato');
  }, 
  sobre: (req,res)=>{
    res.render('usuario/sobre');
  },
}
module.exports = indexController