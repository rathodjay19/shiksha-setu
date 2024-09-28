import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import config from "../config";

const coursesContext = createContext();
const token = "your_token_here";

export const CoursesProvider = ({ children }) => {
	axios.defaults.withCredentials = true;

	const [courses, setCourses] = useState([]);

	const getcourses = async () => {
		try {
			const headers = {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			};

			const results = await axios.get(
				config.BACKEND_API + "/course/getcourse",
				{
					headers,
				}
			);
			// console.log(results.data);

			setCourses((prev) => results.data);
		} catch (err) {
			console.log("error ->", err);
		}
	};

	useEffect(() => {
		// check for is login
		getcourses();
	}, []);

	return (
		<coursesContext.Provider
			value={{
				courses,
				setCourses,
			}}
		>
			{children}
		</coursesContext.Provider>
	);
};

export const useCourses = () => {
	const context = useContext(coursesContext);
	if (!context) {
		throw new Error("useProduct must be used within a CoursesProvider");
	}
	return context;
};
