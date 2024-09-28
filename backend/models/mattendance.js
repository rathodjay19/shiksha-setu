const mongoose = require("mongoose");

const attendancemodelSchema = new mongoose.Schema(
	{
		studentname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		coursecode: {
			type: String,
			required: true,
		},
		attendedclass: {
			type: Number,
			required: true,
		},
	},
	{ timeStamps: true }
);

const attendancemodel = mongoose.model(
	"attendance",
	attendancemodelSchema
);

module.exports = {attendancemodel};
