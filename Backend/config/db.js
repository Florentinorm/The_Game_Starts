var mysql = require('mysql2');
var pool  = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecommerce'
});
// connect to database

pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

module.exports = pool.promise();