const express = require('express');
const router = express.Router();
const productoCotroller = require('../controllers/admin.controller');

router.get('/', productoCotroller.obtenerProductos);

module.exports = router;