const jwt = require("jsonwebtoken");
const secret = "@#$1234";

function setUser(user) {
	const payload = {
		name: user.name,
		email: user.email,
		_id: user._id, // databse userid
	};

	return jwt.sign(payload, secret);
}

function getUser(token) {
	if (!token) return null;
	try {
		return jwt.verify(token, secret);
	} catch (error) {
		return null;
	}
}

module.exports = {
	setUser,
	getUser,
};
