const pool = require('../config/db');

exports.obtenerProductos = async (req, res, next) => {
    try {
        const result = await pool.execute(`SELECT id_producto, nomProducto, desProducto, cantidad,
         precio, id_usuario, id_Estatus, id_catProducto, imgProducto FROM productos 
         WHERE id_producto = ?`,[id_producto]);
        res.status(200).json(result);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.obtenerProductosId = async (req, res, next) => {
    id_producto = req.params.id;
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
exports.editarProductos = async (req, res, next) => {
    console.log(req.body);
    id_producto = req.body.id_producto;
    nomProducto = req.body.nomProducto;
    desProducto = req.body.desProducto;
    cantidad = req.body.cantidad;
    precio = req.body.precio;
    id_usuario = req.body.id_usuario;
    id_Estatus = req.body.id_Estatus;
    id_catProducto = req.body.id_catProducto;
    imgProducto = req.body.imgProducto;
    try {
        const result = await pool.execute(`UPDATE productos SET nomProducto = ?, desProducto = ? ,
        cantidad = ?, precio = ? , id_usuario = ? , id_Estatus = ? , id_catProducto = ? , imgProducto = ? 
        WHERE id_producto = ?`,
         [nomProducto, desProducto, cantidad, precio, id_usuario, id_Estatus, 
            id_catProducto, imgProducto, id_producto]);
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

exports.obtenerUsuario = async (req, res, next) => {
    id_usuario = req.params.id;
    try {
        const result = await pool.execute(`SELECT id_usuario, nombre, apellido_paterno,
         apellido_materno, password,correo, usuario, id_rol, id_Estatus FROM usuario WHERE id_usuario = ?`,[id_usuario]);
        res.status(200).json(result);

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.editarUsuario = async (req, res, next) => {
    console.log(req.body);
    id_usuario = req.body.id_usuario;
    nombre = req.body.nombre;
    apellido_paterno = req.body.apellido_paterno;
    apellido_materno = req.body.apellido_materno;
    password = req.body.password;
    correo = req.body.correo;
    usuario = req.body.usuario;
    id_rol = req.body.id_rol;
    id_Estatus = req.body.id_Estatus;
    try {
        const result = await pool.execute(`UPDATE usuario SET nombre = ? , apellido_paterno = ? , 
        apellido_materno = ? , password = ? , correo = ? , usuario = ? , id_rol = ? , id_Estatus = ? 
        WHERE id_usuario = ?`,
         [nombre, apellido_paterno, apellido_materno, password, correo, usuario, 
            id_rol, id_Estatus, id_usuario]);
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