const {check, validationResult, body} = require('express-validator');

const usuarioController = {
  logado: (req,res)=>{
    res.redirect('/servico/cadastro')
  },
  cadastro:(req,res)=>{
    let listaErrors = validationResult(req)
    if(listaErrors.isEmpty()) {
      return res.send('usuario cadastrado')
    }else{
      console.log(listaErrors)
      return res.render('login', {errors: listaErrors.errors}) 
    }
  }
};

module.exports = usuarioController