const Announcementmodel = require("../models/mannouncements.js");

// Create an announcement
const createAnnouncement = async (req, res) => {
	try {
		const { description, Postedat, courseId, announcementBy } = req.body;
		const announcement = new Announcementmodel({
			description,
			Postedat,
			courseId,
			announcementBy,
		});
		await announcement.save();
		res.status(201).json(announcement);
	} catch (error) {
		res.status(500).json({ message: "Error creating announcement", error });
	}
};

// Get all announcements for a course
const getAnnouncements = async (req, res) => {

	try {
		const { courseId } = req.params;
		const announcements = await Announcementmodel.find({ courseId });
		if (!announcements) {
			return res.status(404).json({ message: "Announcement not found" });
		}
		res.status(200).json(announcements);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = { createAnnouncement, getAnnouncements };
