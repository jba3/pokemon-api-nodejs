var mysqlConn = require('../../api/global/db/con')


exports.getAbilities = function(req, res){
	var db = mysqlConn.init()

	db.connect(function(err) {
		if (err) throw err;

		db.query("select * from abilities limit 25", function (err, result) {
			if (err) throw err;

			res.json(result)
		})
	})
}

exports.getAbility = function(req, res){
	var db = mysqlConn.init()

	db.connect(function(err) {
		if (err) throw err;

		var sql = "select * from abilities where id=" + req.params.abilityId

		db.query(sql, function (err, result) {
			if (err) throw err;

			res.json(result)
		})
	})
}
