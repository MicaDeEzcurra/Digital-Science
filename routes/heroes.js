const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroesController')

//definamos rutas para nuestro proyecto. estas son rutas fijas:
router.get('/', heroesController.index);

//aca van las parametrizadas. estas van a requerir a heroesController
router.get('/detalle/:id', heroesController.detalle);

router.get('/bio/:id/:ok?', heroesController.detalleBio);

module.exports = router;