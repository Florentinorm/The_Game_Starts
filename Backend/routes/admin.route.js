const express = require('express');
const router = express.Router();
const productoCotroller = require('../controllers/admin.controller');

router.get('/pro', productoCotroller.obtenerProductos); 
router.get('/pro/:id', productoCotroller.obtenerProductos); 
router.post('/pro/add', productoCotroller.crearProductos);
router.put('/pro/edi', productoCotroller.editarProductos);
router.delete('/pro/:id', productoCotroller.eliminarProductos);
router.get('/usu', productoCotroller.obtenerUsuario);
router.get('/usu/:id', productoCotroller.obtenerUsuario);
router.get('/usu/edi', productoCotroller.editarUsuario);
router.get('/usu/:id', productoCotroller.eliminarUsuario);
router.get('/ven', productoCotroller.obtenerVentas);

module.exports = router;