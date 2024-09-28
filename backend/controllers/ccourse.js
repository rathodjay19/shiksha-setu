const { coursemodel } = require("../models/mcourse");
const { attendancemodel } = require("../models/mattendance");

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
		res.status(404).json({
			error: `${err} \n error in course.js   /controllers   addnewcourse`,
		});
	}
};

let allcourse = [];

const getcourse = async (req, res) => {
	const token = "parthivva227@gmail.com";

	try {
		// Fetch the list of attendance records for the given email
		const courselist = await attendancemodel.find({ email: token });

		// Use Promise.all to wait for all the asynchronous operations to complete
		allcourse = await Promise.all(
			courselist.map(async (course) => {
				try {
					// Fetch the full course details for each coursecode
					const single_course = await coursemodel.find({
						coursecode: course.coursecode,
					});
					return single_course[0];
				} catch (err) {
					console.error(`Error fetching course details: ${err}`);
					return null; // Return null or handle the error accordingly
				}
			})
		);

		// Filter out any null values in case of errors
		const filteredCourses = allcourse.filter((course) => course !== null);

		console.log("filteredCourses", filteredCourses);
		// Return the list of all course details
		return res.status(202).json(filteredCourses);
	} catch (err) {
		return res.status(500).json({
			error: `${err} \n error in course.js   /controllers   getcourse`,
		});
	}
};

module.exports = { addnewcourse, getcourse };
