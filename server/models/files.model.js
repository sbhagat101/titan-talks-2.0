const sql = require("./db.js");

const File = function (data) {
	this.user_id = data.user_id;
	this.post_id = data.post_id;
	this.file_path = data.file_path;
	this.mimetype = data.mimetype;
	this.sort_order = data.sort_order || 0;
	this.create_time = data.create_time;
};

File.createTable = () => {
	sql.query("CREATE TABLE IF NOT EXISTS files ( \
		file_id INT AUTO_INCREMENT PRIMARY KEY, \
		user_id INT, \
		post_id INT, \
		file_path varchar(128), \
		mimetype varchar(128), \
		sort_order INT, \
		create_time BIGINT)", (err, res) => {
		if (err) {
			console.log("error: ", err);
		} else if (res.warningCount == 0){
			console.log("Created files table");
		}
	});
}

File.create = (recordValues, result) => {
	sql.query("INSERT INTO files SET ?", recordValues, (err, res) => {
		if (err) {
			console.log("Error: ", err);
			result(err, null);
		} else {
			console.log("created record: ", { id: res.insertId, ...recordValues });
			result(null, { id: res.insertId, ...recordValues });
		}
	});
};

File.findById = (id, result) => {
	sql.query(`SELECT * FROM posts WHERE post_id = ${id}`, (err, res) => {
		if (err) {
			console.log("Error: ", err);
			result(err, null);
		} else if (res.length) {
			result(null, res[0]);
		} else {
			result({ kind: 404 }, null);
		}
	});
};

File.remove = (id, result) => {
	sql.query("DELETE FROM posts WHERE post_id = ?", id, (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(null, err);
		} else if (res.affectedRows == 0) {
			result({ kind: 404 }, null);
		} else {
			console.log("Deleted record: ", id);
			result(null, res);
		}
	});
};

module.exports = File;