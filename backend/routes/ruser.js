const userroute = require("express").Router();
const { postsignin, postsignup } = require("../controllers/cuser");

userroute.post("/signin", postsignin);

userroute.post("/signup", postsignup);

module.exports = {
	userroute,
};
