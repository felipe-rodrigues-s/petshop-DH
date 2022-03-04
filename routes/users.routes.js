const express = require('express');
const route = express.Router();

const usuarioController = require('../controller/usuario.controller');

route.get('/cadastro', usuarioController.cadastro);
route.get('/login',usuarioController.login);
route.get('/contato',usuarioController.contato);
route.get('/sobre',usuarioController.sobre);

module.exports = route;