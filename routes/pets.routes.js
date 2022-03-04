const express = require('express');
const router = express.Router();
const petsController = require('../controller/pets.controller');

router.post('/cadastrapet', petsController.cadastraPets)
router.get('/pets',petsController.listaPets)

module.exports = router;