var Sequelize = require("sequelize");


var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        //password: "",
        database: "friendFinder_db"
    },

    jawsDB: {
        port: 3306,
        host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'cm0zdmk2ez4igof5',
        password: "yuhl98jsef0k7ul4",
        database: "lghowl35ljxl5vao" 
    }
}

var selectedSource = source.jawsDB;

var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

module.exports = sequelize;