const express = require("express");
const {
	createAnnouncement,
	getAnnouncements,
} = require("../controllers/cannouncement");
const announcementroute = express.Router();

// Create an announcement
announcementroute.post("/create", createAnnouncement);

// Get all announcements for a specific course
announcementroute.get("/:courseId", getAnnouncements);

module.exports = { announcementroute };