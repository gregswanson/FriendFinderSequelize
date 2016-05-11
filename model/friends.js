

var Sequelize = require("sequelize"); 
var sequelize = require("../config/connection.js"); 

var Friends = sequelize.define("friends", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
	},
	photo: {
		type: Sequelize.STRING,
	},
	score1: {
		type: Sequelize.INTEGER,
	},
	score2: {
		type: Sequelize.INTEGER,
	},
	score3: {
		type: Sequelize.INTEGER,
	},
	score4: {
		type: Sequelize.INTEGER,
	},
	score5: {
		type: Sequelize.INTEGER,
	},
	score6: {
		type: Sequelize.INTEGER,
	},
	score7: {
		type: Sequelize.INTEGER,
	},
	score8: {
		type: Sequelize.INTEGER,
	},
	score9: {
		type: Sequelize.INTEGER,
	},
	score10: {
		type: Sequelize.INTEGER,
	}
});

// Syncs with DB
Friends.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Friends;
