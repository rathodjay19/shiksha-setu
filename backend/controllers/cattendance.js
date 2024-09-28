const { attendancemodel } = require("../models/mattendance.js");

const addattendance = async (req, res) => {
	try {
		const { studentname, email, coursecode, attendedclass } = req.body;

		await attendancemodel.create({
			studentname,
			email,
			coursecode,
			attendedclass,
		});
		return res
			.status(202)
			.json({ msg: "you have successfully added attendance" });
	} catch (error) {
		console.log(error);

		return res.status(404).json({
			err: "error in attendance.js   /controllers   addattendance",
		});
	}
};

module.exports = { addattendance };
