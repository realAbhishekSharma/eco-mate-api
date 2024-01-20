const {Sequelize} = require("sequelize")
// password need for database
const sqlConnection = new Sequelize({
    host: 'localhost',
    username : "root",
    password : "password",
    database : "eco_mate",
    dialect: 'mysql',
    timezone : "+05:45"

})

try {
    sqlConnection.authenticate().then(r => {});
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}




module.exports = sqlConnection