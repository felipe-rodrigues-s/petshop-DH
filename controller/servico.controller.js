const modelServico = require('../model/servico.json');

const servicoController = {
  index:(req, res) => {
    res.render('servicos',{listaServicos:modelServico});
  },
  listaServicos:(req, res) => {
    res.send(modelServicos);
  },
  criarServico:(req,res)=>{
    let servico = req.body;
    modelServico.push(servico);
    res.redirect('/');
  },
  criarServicoGet:(req,res)=>{
    console.log(req.query)
    let servico = req.query
    modelServico.push(servico)
    res.redirect('/')
  },
  cadastroServico:(req,res)=>{
    res.render('cadastro');
  },
  testeparams:(req,res)=>{
    let  servicoId = req.params.id;
    let servico = modelServico.find(s =>{return s.id == servicoId})
    res.render('servicoId', {servicoId: servico, titulo:"Servico"})
  }
}
module.exports = servicoController