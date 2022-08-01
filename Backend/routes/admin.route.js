const express = require('express');
const router = express.Router();
const productoCotroller = require('../controllers/admin.controller');

router.get('/pro', productoCotroller.obtenerProductos); 
router.get('/pro/:id', productoCotroller.obtenerProductosId); 
router.get('/pro/img/:id', productoCotroller.obtenerImgId); 
router.post('/pro/add', productoCotroller.crearProductos);
router.put('/pro/edi', productoCotroller.editarProductos);
router.put('/pro/img', productoCotroller.addImg);
router.delete('/pro/:id', productoCotroller.eliminarProductos);

router.get('/catPro', productoCotroller.obtenerCategoriaPro); 

router.get('/usu', productoCotroller.obtenerUsuario);
router.get('/usu/:id', productoCotroller.obtenerProductosId);
router.post('/usu/edi', productoCotroller.editarUsuario);
router.delete('/usu/:id', productoCotroller.eliminarUsuario);

router.get('/ven', productoCotroller.obtenerVentas);
router.get('/ven/:id', productoCotroller.obtenerDetalleVenta);

module.exports = router;