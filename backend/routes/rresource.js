const resourceroute = require("express").Router();
const { addnewresource } = require("../controllers/cresource.js");

resourceroute.post("/add", addnewresource);

module.exports = { resourceroute };
