const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { userroute } = require("./routes/ruser");
const { courseroute } = require("./routes/rcourse");
const { resourceroute } = require("./routes/rresource");
const { attendanceroute } = require("./routes/rattendance");
const { announcementroute } = require("./routes/rannouncement");
const { labroute } = require("./routes/rlab");

const { connectToMongoDB } = require("./connect");
const Announcement = require("./models/mannouncements");
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToMongoDB(process.env.MONGO_URL);
app.use(
	cors({
		origin: process.env.FRONTEND_URL || "http://localhost:3000",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "authorization"],
		credentials: true,
	})
);

app.use("/user", userroute);
app.use("/course", courseroute);
app.use("/resource", resourceroute);
app.use("/attendance", attendanceroute);
app.use("/announcement", announcementroute);
app.use("/lab", labroute);

cloudinary.config({
	cloud_name: "dlit6nkqi", // Replace with your Cloudinary credentials
	api_key: "642326824847918",
	api_secret: "yRTtUU11g7vzk6zev96JSCa0M3o",
});

// Multer configuration (for handling file uploads)
const storage = multer.diskStorage({});
const upload = multer({ storage });
const { LabAssignment } = require("./models/mlab");

// API endpoint for uploading files
app.post("/upload", upload.single("file"), async (req, res) => {
	try {
		const result = await cloudinary.uploader.upload(req.file.path, {
			resource_type: "auto", // 'auto' allows Cloudinary to automatically detect the file type (image, video, or raw file)
			folder: "LabSubmission", // Optional: Specify a folder in Cloudinary
		});

		await LabAssignment.findByIdAndUpdate(req.body.lab_id, {
			$push: {
				submissions: {
					studentemail: req.body.studentemail,
					submissionFileUrl: result.secure_url,
					submittedAt: new Date(),
				},
			},
		});

		res.status(200).json({ msg: "successfully submitted" });
	} catch (error) {
		console.error("Error uploading file:", error);
		res.status(500).json({ error: "File upload failed" });
	}
});

app.listen(port, () => {
	console.log("server started");
});
