const express = require('express');
const router = express.Router();

const usuarioController = require('../controller/usuario.controller');
// const validator = require('../middleware/auth.middleware');


router.post('/login',usuarioController.logado)
router.post('/cadastro' ,usuarioController.cadastro)

module.exports = router;