const pool = require('../config/db');
exports.obtenerProductos = async (req, res, next) => {
    try {
        const result = await pool.execute(`SELECT id_producto, nomProducto, desProducto, cantidad,
         precio, id_usuario, id_Estatus, id_catProducto, imgProducto FROM productos`);
        res.status(200).json(result);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.crearProductos = async (req, res, next) => {
    console.log(req.body);
    nomProducto = req.body.nomProducto;
    desProducto = req.body.desProducto;
    cantidad = req.body.cantidad;
    precio = req.body.precio;
    id_usuario = req.body.id_usuario;
    id_Estatus = req.body.id_Estatus;
    id_catProducto = req.body.id_catProducto;
    imgProducto = req.body.imgProducto;
    try {
        const result = await pool.execute(`INSERT INTO productos(id_producto, nomProducto,
            desProducto, cantidad, precio, id_usuario, id_Estatus, id_catProducto, imgProducto)
         VALUES ( "", ?, ?, ?, ?, ?, ?, ?, ?)`,
         [nomProducto, desProducto, cantidad, precio, id_usuario, id_Estatus, id_catProducto, imgProducto]);
        res.status(200).json(result);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.eliminarProductos = async (req, res, next) => {
    id_producto = req.params.id;
    try {
        const result = await pool.execute(`DELETE FROM productos WHERE id_producto = ?`,[id_producto]);
        res.status(200).json(result);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.obtenerUsuario = async (req, res, next) => {
    try {
        const result = await pool.execute(`SELECT id_usuario, nombre, apellido_paterno,
         apellido_materno, password,correo, usuario, id_rol, id_Estatus FROM usuario`);
        res.status(200).json(result);

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.eliminarUsuario = async (req, res, next) => {
    id_usuario = req.params.id;
    try {
        const result = await pool.execute(`DELETE FROM usuario WHERE id_usuario = ?`,[id_usuario]);
        res.status(200).json(result);

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.obtenerVentas = async (req, res, next) => {
    try {
        const result = await pool.execute(`SELECT id_venta, nomVenta, desVenta, canVenta, id_producto,
         id_usuario, totalVenta FROM ventas`);
        res.status(200).json(result);

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}