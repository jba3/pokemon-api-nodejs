var express = require('express')
var app = express()
var port = process.env.PORT || 4000
var routes = require('./api/routes/abilities.js')
var bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Add headers
app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://www.pokemon.local:3000')

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true)

	// Pass to next layer of middleware
	next()
})

routes(app)

app.listen(port)

console.log('nodejs api started on port ', port)
