var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('./public'));

consign()
.include('rotas')
.into(app);


module.exports = app;