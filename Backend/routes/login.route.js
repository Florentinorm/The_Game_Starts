const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../controllers/login.controller');


//Validación de un usuario
router.post(
  '/signup',
  [
    //se usa el validator body de express, quitar espacios -> trim() , no esté vacio .not().isEmpty()
    body('name').trim().not().isEmpty(),
    body('email')
      //verificamos que sea un correo electrónico
      .isEmail()
      .withMessage('Please enter a valid email.')
      //verificamos si ya existe un correo ingresado
      .custom(async (email) => {
        const user = await User.find(email);
        //si usuario es mayor a 0
        if (user[0].length > 0) {
          return Promise.reject('Email address already exist!');
        }
      })
      //normalizamos el  email, lo convierte a minúsculas
      .normalizeEmail(),
      //se valida el password con una longitud mínima de 7
    body('password').trim().isLength({ min: 7 }),
  ],
  authController.signup
);

router.post('/login', authController.iniciarSesion);

module.exports = router;
