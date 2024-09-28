const courseroute = require("express").Router();
const { addnewcourse, getcourse } = require("../controllers/ccourse");

courseroute.post("/add", addnewcourse);

courseroute.get("/getcourse", getcourse);

module.exports = { courseroute };
