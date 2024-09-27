const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = process.env.PORT;
console.log(port);

app.get("/", (req, res) => {
	res.json({ msg: "backend get request" });
});

app.listen(port, () => {
	console.log(`backend started at ${port}`);
});
