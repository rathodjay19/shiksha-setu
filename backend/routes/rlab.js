const express = require("express");
const {
	createLabAssignment,
	getLabAssignments,
	submitLabAssignment,
} = require("../controllers/clab.js");
const labroute = express.Router();

// Create a lab assignment
labroute.post("/create", createLabAssignment);

// Get all lab assignments for a specific course
labroute.get("/:courseId", getLabAssignments);

// Submit lab assignment
labroute.post("/:assignmentId/submit", submitLabAssignment);

module.exports = {labroute};
