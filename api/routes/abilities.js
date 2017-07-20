module.exports = function(app){
	var abilitiesController = require('../controllers/abilities')

	app.route('/abilities')
		.get(abilitiesController.getAbilities)

	app.route('/ability/:abilityId')
		.get(abilitiesController.getAbility)
}
