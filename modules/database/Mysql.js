const mysql = require('mysql2');

module.exports = mysql.createPool({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE
});
