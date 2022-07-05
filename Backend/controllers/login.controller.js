const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const secret = require("../config/secret");
const nodemailer = require("nodemailer");
const transporter = require("../config/mailer");

//Método de registro
exports.signup = async (req, res, next) => {
  const errors = validationResult(req);

  //verificamos si los errores están vacios
  if (!errors.isEmpty()) return;

  //obtenemos los datos através del request
  const name = req.body.name;
  const apellidopaterno = req.body.apellidopaterno;
  const apellidomaterno = req.body.apellidomaterno;
  const email = req.body.email;
  const password = req.body.password;

  //Cifrado de password
  try {
    //guardamos en una constante el password encriptado
    const hashedPassword = await bcrypt.hash(password, 12);

    //se crea un objeto con la información del user
    const userDetails = {
      name: name,
      email: email,
      apellidopaterno: apellidopaterno,
      apellidomaterno: apellidomaterno,
      password: hashedPassword,
      id_rol: 1,
      resetToken: 1,
    };

    //guardaremos el objeto, utilizando la función save creada en user.js
    const result = await User.save(userDetails);

    res.status(201).json({ message: "Usuario Registrado!" });
  } catch (err) {
    //detectamos cualquier error
    //si no hay un código
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err); //pasamos el método err, creado en controllers
  }
};

exports.iniciarSesion = async (req, res, next) => {
  try {
    // obtener los datos del body
    const { email, password, ...rest } = req.body;
    // Se verifica la estructura de la petición
    if (Object.keys(rest).length > 0) {
      return res
        .status(400)
        .json({ message: "La estructura no es correcta", code: 1 });
    }
    // Verificar que los datos "username" y "password" existan
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos", code: 1 });
    }
    const lstUsers = await User.find(email);
    if (lstUsers[0].length <= 0) {
      console.log("entro");
      return res
        .status(404)
        .json({ message: "El usuario y/o contraseña es incorrecto", code: 1 });
    }
    const storedUser = lstUsers[0][0];
    const idUsuario = storedUser.id_rol;
    const isEqual = await bcrypt.compare(password, storedUser.password);

    //valida el password
    if (!isEqual) {
      return res
        .status(404)
        .json({ message: "El usuario y/o contraseña es incorrecto", code: 1 });
    }

    const token = jwt.sign(
      {
        email: storedUser.email,
        userId: storedUser.id,
      },
      secret.secret.jwtSecret,
      { expiresIn: "1h" }
    );
    return res
      .status(200)
      .json({
        message: "Autentificación correcta",
        token: token,
        idUsuario: idUsuario,
        userId: storedUser.id,
        code: 0,
      });
  } catch (error) {
    return res.status(500).json({ message: `${error.message}` });
  }
};
