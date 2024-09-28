import "./App.css";
import axios from "axios";
import config from "./config";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/profile";
import Courses from "./components/Courses";
import Navbar from "./components/Navbar";
import CourseInside from "./components/CourseInside";
import About from "./pages/About";
import Lab from "./components/Lab";

function App() {
	const location = useLocation(); // Get the current URL path

	return (
		<>
			{/* Conditionally render Navbar based on the current route */}
			{location.pathname !== "/login" && location.pathname !== "/register" && (
				<Navbar />
			)}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/register" exact element={<Register />} />
				<Route path="/profile" exact element={<Profile />} />
				<Route path="/courses" exact element={<Courses />} />
				<Route path="/courses/course-inside" exact element={<CourseInside />} />
				<Route
					path="/courses/course-inside/lab/:labId"
					exact
					element={<Lab />}
				/>
				<Route path="/about-us" exact element={<About />} />
			</Routes>
		</>
	);
}

export default App;
