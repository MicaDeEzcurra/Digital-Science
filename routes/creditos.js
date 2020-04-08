const express = require('express');
const router = express.Router();
const creditosController = require('../controllers/creditosController')

//definamos rutas para nuestro proyecto. estas son rutas fijas:
router.get('/', creditosController.index);

module.exports = router;