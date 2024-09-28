const { LabAssignment } = require("../models/mlab.js");

// Create a new lab assignment
const createLabAssignment = async (req, res) => {
	const { title, description, dueDate, fileUrl, uploadedBy, courseId } =
		req.body;
	if (
		!title ||
		!description ||
		!dueDate ||
		!fileUrl ||
		!uploadedBy ||
		!courseId
	) {
		return res.status(400).json({ message: "Please fill all fields" });
	}

	const newLabAssignment = new LabAssignment({
		title,
		description,
		dueDate,
		fileUrl,
		uploadedBy,
		courseId,
	});

	try {
		const savedLabAssignment = await newLabAssignment.save();
		res.status(201).json(savedLabAssignment);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Get all lab assignments for a course
const getLabAssignments = async (req, res) => {
	try {
		const { courseId } = req.params;
		const assignments = await LabAssignment.find({ courseId });

		if (!assignments) {
			return res.status(404).json({ message: "Lab assignments not found" });
        }
        

		res.status(200).json(assignments);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Submit a lab assignment
const submitLabAssignment = async (req, res) => {
	try {
		const { assignmentId } = req.params;
		const { studentemail, submissionFileUrl } = req.body;
		const assignment = await LabAssignment.findById(assignmentId);
		assignment.submissions.push({
			studentemail,
			submissionFileUrl,
			submittedAt: new Date(),
		});
		await assignment.save();
		res.status(200).json(assignment);
	} catch (error) {
		res.status(500).json({ message: "Error submitting lab assignment", error });
	}
};

module.exports = {
	createLabAssignment,
	getLabAssignments,
	submitLabAssignment,
};
