const express = require('express');
const router = express.Router();
const productoCotroller = require('../controllers/admin.controller');

router.get('/pro', productoCotroller.obtenerProductos);
router.post('/pro/add', productoCotroller.crearProductos);
router.delete('/pro/:id', productoCotroller.eliminarProductos);
router.get('/usu', productoCotroller.obtenerUsuario);
router.get('/usu/:id', productoCotroller.eliminarUsuario);
router.get('/ven', productoCotroller.obtenerVentas);

module.exports = router;