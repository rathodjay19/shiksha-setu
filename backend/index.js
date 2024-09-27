const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT;

// Middleware
app.use(
	cors({
		origin: process.env.FRONTEND_URL || "http://localhost:3000",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "authorization"],
		credentials: true,
	})
);

app.get("/", (req, res) => {
	res.json({ msg: "backend get request" });
});

app.get("/temp", (req, res) => {
	res.status(200).json({ msg: "connected !" });
});

app.listen(port, () => {
	console.log(`backend started at ${port}`);
});
