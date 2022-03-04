const express = require('express');
const router = express.Router();

const servicoController = require('../controller/servico.controller.js');
const validaCadastro = require('../middleware/valida.middleware');

const multer = require('multer');
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'./img.servico')
  },
  filename:(req,file,cb)=>{
    cd(null, `${file.originalname}-${Date.now()}`)
  }
});

const upload = multer({storage});

router.get('/',servicoController.index)
router.get('/cadastroget',servicoController.criarServicoGet)
router.get('/servico',servicoController.listaServicos)
router.get('/servicoid/:id',servicoController.testeparams)
router.get('/cadastro',servicoController.cadastroServico)
router.post('/cadastroservico',validaCadastro,servicoController.criarServico)

module.exports = router