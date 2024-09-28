const courseroute = require("express").Router();
const { addnewcourse } = require("../controllers/ccourse");

courseroute.post("/add", addnewcourse);

module.exports = { courseroute };
