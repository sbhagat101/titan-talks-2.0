const mysql = require("mysql");

module.exports = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "titantalksdatabase",
	port: "3306"
});