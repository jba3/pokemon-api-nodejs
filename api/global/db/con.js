var mysql = require('mysql')
var env = require('dotenv').config().parsed


function checkDefined(theVar){
	if (theVar === undefined){
		throw '\n\nFATAL ERROR! Environment variable ' + theVar + ' not defined!\n\nDo you have a .env file with the correct settings?\n\n'
	}
}


exports.init = function(){
	var db_host = env.DB_HOST
	var db_name = env.DB_NAME
	var db_user = env.DB_USER
	var db_pass = env.DB_PASS

	checkDefined('db_host', 'DB_HOST')
	checkDefined('db_name', 'DB_NAME')
	checkDefined('db_user', 'DB_USER')
	checkDefined('db_pass', 'DB_PASS')

	return mysql.createConnection({
		host: db_host,
		database: db_name,
		user: db_user,
		password: db_pass
	})
}
