import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import config from "../config";

const coursesContext = createContext();
const token = "your_token_here";

export const CoursesProvider = ({ children }) => {
	axios.defaults.withCredentials = true;

	const [coursename, setcoursename] = useState("");
	const [profileimageURL, setprofileimageURL] = useState("");
	const [coursecode, setcoursecode] = useState("");
	const [instructor, setinstructor] = useState("");
	const [Semester, setSemester] = useState("");
	const [totalclass, settotalclass] = useState("");

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
			console.log(results);

			setcoursename((prev) => results.data.coursename);
			setprofileimageURL((prev) => results.data.profileimageURL);
			setcoursecode((prev) => results.data.coursecode);
			setinstructor((prev) => results.data.instructor);
			setSemester((prev) => results.data.Semester);
			settotalclass((prev) => results.data.totalclass);
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
				coursename,
				profileimageURL,
				coursecode,
				instructor,
				Semester,
				totalclass,
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
