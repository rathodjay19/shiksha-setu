const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { userroute } = require("./routes/ruser");
const { courseroute } = require("./routes/rcourse");
const { resourceroute } = require("./routes/rresource");
const { attendanceroute } = require("./routes/rattendance");

const { connectToMongoDB } = require("./connect");
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToMongoDB(process.env.MONGO_URL);
// app.use(
// 	cors({
// 		origin: process.env.FRONTEND_URL || "http://localhost:3000",
// 		methods: ["GET", "POST", "PUT", "DELETE"],
// 		allowedHeaders: ["Content-Type", "authorization"],
// 		credentials: true,
// 	})
// );

app.use("/user", userroute);
app.use("/course", courseroute);
app.use("/resource", resourceroute);
app.use("/attendance", attendanceroute);

app.listen(port, () => {
	console.log("server started");
});
