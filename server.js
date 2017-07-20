var express = require('express')
var app = express()
var port = process.env.PORT || 4000
var routes = require('./api/routes/abilities.js')
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app)

app.listen(port)

console.log('nodejs api started on port ', port)
