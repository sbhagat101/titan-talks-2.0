const sql = require("./db.js");

const Post = function (data) {
	this.user_id = data.user_id;
	this.content = data.content;
	this.views = data.views;
	this.likes = data.likes;
	this.shares = data.shares;
	this.create_time = data.create_time;
	this.update_time = data.update_time;
};

Post.createTable = () => {
	sql.query("CREATE TABLE IF NOT EXISTS posts ( \
		post_id INT AUTO_INCREMENT PRIMARY KEY, \
		user_id INT, \
		content varchar(1000), \
		views INT, \
		likes INT, \
		shares INT, \
		create_time BIGINT, \
		update_time BIGINT)", (err, res) => {
		if (err) {
			console.log("error: ", err);
		}  if (res.warningCount == 0){
			console.log("Created posts table");
		}
	});
}

Post.create = (recordValues, result) => {
	sql.query("INSERT INTO posts SET ?", recordValues, (err, res) => {
		if (err) {
			console.log("Error: ", err);
			result(err, null);
		} else {
			console.log("created record: ", { id: res.insertId, ...recordValues });
			result(null, { id: res.insertId, ...recordValues });
		}
	});
};

Post.findById = (id, result) => {
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

Post.getAll = (searchText, result) => {
	let query = "SELECT * FROM posts";

	if (searchText) {
		query += ` WHERE content LIKE '%${searchText}%'`;
	}

	sql.query(query, (err, res) => {
		if (err) {
			console.log("Error: ", err);
			result(null, err);
		} else {
			console.log(res);
			result(null, res);
		}
	});
};

Post.remove = (id, result) => {
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

module.exports = Post;