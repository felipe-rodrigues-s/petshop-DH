const express = require('express');
const router = express.Router();
const users = require('../model/user.json')
const fs = require('fs')
const logDB = require('../middleware/logdb.middleware')
 
const usuarioController = require('../controller/usuario.controller');
const {check, validationResult, body} = require('express-validator');
// const validator = require('../middleware/auth.middleware');


router.post('/login',logDB, usuarioController.logado)
router.post('/cadastro',logDB,[
  check('nome')
  .isLength({min:3})
  .withMessage("Nome do usuario deve conter no minimo 3 caracteres"),
  check('email')
  .isEmail()
  .withMessage('Email deve ser valido EX:"exemplo@email.com"'),
  check('senha')
  .isStrongPassword({
     minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1
  })
  .withMessage("Senha dever ter no minimo 8 caracteres, um simbolo, pelo menos uma letra maiuscula e uma minuscular, e um número"),
  body("email")
  .custom((email)=>{
    let user = JSON.parse(fs.readFileSync("../model/user.json"))
    return user.email != email
  }).withMessage("E-mail ja cadastrado")
] ,usuarioController.cadastro)

module.exports = router;