var express = require('express');
const errorController = require('./controllers/error');
const con = require('./config/db');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
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