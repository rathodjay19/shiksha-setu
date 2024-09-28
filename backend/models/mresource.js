const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
	{
		coursecode: {
			type: String,
			required: true,
		},
		content: {
			key: {
				type: String,
			},
			value: {
				text: {
					type: String,
				},
				filepath: {
					type: String,
				},
			},
		},
	},
	{ timestamps: true }
);

const resourcemodel = mongoose.model("resource", resourceSchema);

module.exports = { resourcemodel };
