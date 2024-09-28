const userroute = require("express").Router();
const { postsignin, postsignup, getprofile } = require("../controllers/cuser");

userroute.post("/signin", postsignin);

userroute.post("/signup", postsignup);

userroute.get("/profile", getprofile);

module.exports = {
	userroute,
};
