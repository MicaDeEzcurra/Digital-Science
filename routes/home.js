const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

//definamos rutas para nuestro proyecto. estas son rutas fijas:
router.get('/', homeController.index);

module.exports = router;