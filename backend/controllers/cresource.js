const {resourcemodel} = require("../models/mresource");

const addnewresource = async (req, res) => {
	const { course_id, content } = req.body;
	try {
		resourcemodel.create({
			course_id,
			content,
		});
		return res
			.status(202)
			.json({ msg: "you have successfully added a content" });
	} catch (err) {
		return res.status(404).json({
			err: "error in resource.js   /controllers   addnewresource",
		});
	}
};

module.exports = { addnewresource };
