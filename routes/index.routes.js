const express = require('express');
const router = express.Router();
const indexController  = require('../controller/index.controller')

/* GET home page. */
router.get('/', indexController.index);
router.get('/login',indexController.login);
router.get('/contato',indexController.contato);
router.get('/sobre',indexController.sobre);

module.exports = router;
