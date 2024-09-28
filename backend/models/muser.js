const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		profileimageURL: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		registered_courses: {
			type: [String],
		},
		phoneno: {
			type: String,
			validate: {
				validator: function (v) {
					return /\+?[0-9]{10}/.test(v); // Example: regex to validate international mobile numbers
				},
				message: (props) => `${props.value} is not a valid mobile number!`,
			},
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const usermodel = mongoose.model("user", userSchema);

module.exports = {usermodel};
