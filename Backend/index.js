var express = require('express');
const errorController = require('./controllers/error');
const con = require('./config/db');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader(
     'Access-Control-Allow-Methods',
     'GET, POST, PUT, DELETE, OPTIONS'
   );
   res.setHeader(
     'Access-Control-Allow-Headers',
     'Content-Type, Accept, X-Custom-Header, Authorization'
   );
   if (req.method === 'OPTIONS') {
     return res.status(200).end();
   }
   next();
 });
 
app.use(bodyParser.urlencoded({
    extended: true
}));
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

app.use('/api/admin', require('./routes/admin.route'));
// app.use('/api/cliente', require('./routes/cliente.route'));
// app.use('/api/login', require('./routes/login.route'));

app.use(errorController.get404);

app.use(errorController.get500);

// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;