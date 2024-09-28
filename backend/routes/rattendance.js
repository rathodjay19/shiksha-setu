const express = require("express");
const attendanceroute = express.Router();
const { addattendance } = require("../controllers/cattendance");

attendanceroute.get("/", (req, res) => {
	res.send("Attendance route");
});

attendanceroute.post("/add", addattendance);

module.exports = { attendanceroute };
