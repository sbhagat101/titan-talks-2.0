const mysql = require("mysql");

module.exports = mysql.createConnection({
	host: "192.168.1.254",
	user: "root",
	password: "password",
	database: "titantalksdatabase",
	port: "3306"
});