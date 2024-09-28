const { usermodel } = require("../models/muser");
const bcrypt = require("bcryptjs");

const postsignin = async (req, res) => {
	const { email, password } = req.body;

	const user = await usermodel.findOne({ email: email });

	if (!user) {
		return res.status(404).json({ error: "user not found" });
	}

	const isPasswordMatch = await bcrypt.compare(password, user.password);
	if (!isPasswordMatch) {
		return res.status(404).json({ error: "wrong password" });
	}
	return res.status(202).json({ msg: "you loged in in home page" });
};

const postsignup = async (req, res) => {
	const {
		name,
		email,
		password,
		profileimageURL,
		registered_courses,
		phoneno,
	} = req.body;

	if (!name || !email || !password) {
		return res.status(404).json({ error: "enter all fields" });
	}

	const user = await usermodel.findOne({ email: email });
	if (user) {
		return res
			.status(404)
			.json({ error: "user alreaedy exit with this email ID." });
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	try {
		await usermodel.create({
			name,
			email,
			password: hashedPassword,
			profileimageURL,
			registered_courses,
			phoneno,
		});
	} catch (error) {
		if (error.name === "ValidationError") {
			return res.status(400).json({ error: "enter valid mobile number" });
		}
	}
	return res.status(202).json({ msg: "you registered and in home page" });
	// return res.render("home.ejs");
};

const getprofile = async (req, res) => {
	const token = "parthivva227@gmail.com";

	const user = await usermodel.findOne({ email: token });

	if (!user) {
		return res.status(404).json({ error: "user not found" });
	}
	return res.status(202).json(user);
};
module.exports = { postsignin, postsignup, getprofile };
