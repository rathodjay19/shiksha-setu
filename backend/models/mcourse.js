const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
	{
		coursename: {
			type: String,
			required: true,
			unique: true,
		},
		profileimageURL: {
			type: String,
		},
		coursecode: {
			type: String,
			required: true,
			unique: true,
		},
		instructor: {
			type: [String],
			required: true,
		},
		Semester: {
			type: String,
			required: true,
		},
		totalclass: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const coursemodel = mongoose.model("courses", courseSchema);

module.exports = { coursemodel };
