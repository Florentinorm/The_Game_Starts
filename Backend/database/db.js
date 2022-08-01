const mysql = require('mysql2');

const config = require('../config/config-db.json');


//se crea un objeto con la información de la base de datos del user
const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
});

pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

module.exports = pool.promise(); //exportamos como una promesa
