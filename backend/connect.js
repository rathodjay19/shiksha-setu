const mongoose = require("mongoose");

// mongoose.set("strictQuery", true);
async function connectToMongoDB(url) {

	return mongoose
		.connect(url)
		.then(() => {
			console.log("MongoDB");
		})
		.catch((error) => {
			console.log("mongodb error");
		});
}

module.exports = {
	connectToMongoDB,
};
