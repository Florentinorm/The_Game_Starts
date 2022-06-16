const express = require('express');
const router = express.Router();
const productoCotroller = require('../controllers/login.controller');

router.get('/', productoCotroller.obtenerUsuario);

module.exports = router;