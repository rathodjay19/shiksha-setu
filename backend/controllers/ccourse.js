const { coursemodel } = require("../models/mcourse");

const addnewcourse = async (req, res) => {
	const {
		coursename,
		profileimageURL,
		coursecode,
		instructor,
		Semester,
		totalclass,
	} = req.body;

	if (!coursecode || !coursename || !instructor || !Semester || !totalclass)
		return res.status(404).json({ error: "fill out all field" });
	try {
		await coursemodel.create({
			coursecode,
			coursename,
			profileimageURL,
			instructor,
			Semester,
			totalclass,
		});
		return res
			.status(202)
			.json({ msg: "you have successfully created a course" });
	} catch (err) {
		res
			.status(404)
			.json({
				error: `${err} \n error in course.js   /controllers   addnewcourse`,
			});
	}
};

module.exports = { addnewcourse };
