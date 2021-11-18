const PostModel = require("../models/posts.model.js");
const FileModel = require("../models/files.model.js");

exports.create = (req, res) => {
	if (!req.body) {
		res.status(400).send({
			message: "Content can not be empty!"
		});
	}

	// File Upload
	const multer = require('multer');
	var storage = multer.diskStorage({
		destination: function (req, file, callback) {
			const fs = require('fs');
			fs.mkdirSync('./uploads', { recursive: true })
			callback(null, './uploads');
		},
		filename: function (req, file, callback) {
			callback(null, `${Date.now()}.${file.originalname.split('.').pop()}`);
		}
	});
	const upload = multer({ storage: storage }).single('uri');

	upload(req, res, function (err) {
		if (err) {
			return res.end("Error uploading file.");
		}
		else {
			jsonData = JSON.parse(req.body.postdata);
			// Insert into Posts table
			const record = new PostModel({
				user_id: jsonData.user_id,
				content: jsonData.content,
				views: jsonData.views || 0,
				likes: jsonData.likes || 0,
				shares: jsonData.shares || 0,
				create_time: Date.now(),
			});

			PostModel.create(record, (err, data) => {
				if (err) {
					res.status(500).send({ message: err.message });
				} else {
					// Insert into Files table
					if (req.file) {
						const fileRecord = new FileModel({
							user_id: data.user_id,
							post_id: data.id,
							file_path: req.file.path,
							mimetype: req.file.mimetype,
							sort_order: 0,
							create_time: Date.now(),
						});

						FileModel.create(fileRecord, (err, data) => {
							if (err) {
								res.status(500).send({ message: err.message });
							}
						});
					}

					res.send(data);
				}
			});
		}
	});
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
	const content = req.query.content;

	PostModel.getAll(content, (err, data) => {
		if (err) {
			res.status(500).send({
				message:
					err.message || "Internal Server Error"
			});
		} else {
			res.send(data);
		}
	});
};

exports.findOne = (req, res) => {
	PostModel.findById(req.params.id, (err, data) => {
		if (err) {
			if (err.kind == 404) {
				res.status(404).send({
					message: "Record Not Found"
				});
			} else {
				res.status(500).send({
					message: "Internal Server Error"
				});
			}
		} else {
			res.send(data);
		}
	});
};

exports.delete = (req, res) => {
	PostModel.remove(req.params.id, (err, data) => {
		if (err) {
			if (err.kind == 404) {
				res.status(404).send({
					message: "Record Not Found"
				});
			} else {
				res.status(500).send({
					message: "Internal Server Error"
				});
			}
		} else {
			res.send(data);
		}
	});
};