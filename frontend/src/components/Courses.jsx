// import React, { useState } from "react";
import ClassroomCard from "./ClassroomCard";
import { Grid, Box } from "@mui/material";
import { useCourses } from "../context/courses";
import { useEffect } from "react";

const Courses = () => {
	const { courses } = useCourses();

	// // Array of courses with their details
	// const [courses, setCourses] = useState([
	// 	{
	// 		id: "1",
	// 		courseName: "IT305-LAB-2024",
	// 		instructor: "Sanjay Srivastava",
	// 		avatarLetter: "S",
	// 	},
	// 	{
	// 		id: "2",
	// 		courseName: "CS101-INTRO-2024",
	// 		instructor: "Jane Doe",
	// 		avatarLetter: "J",
	// 	},
	// 	{
	// 		id: "3",
	// 		courseName: "CS102-ADV-2024",
	// 		instructor: "John Smith",
	// 		avatarLetter: "J",
	// 	},
	// 	{
	// 		id: "4",
	// 		courseName: "EE201-CIRCUITS-2024",
	// 		instructor: "Anita Gupta",
	// 		avatarLetter: "A",
	// 	},
	// 	{
	// 		id: "5",
	// 		courseName: "ME101-MECH-2024",
	// 		instructor: "Mike Johnson",
	// 		avatarLetter: "M",
	// 	},
	// 	{
	// 		id: "6",
	// 		courseName: "MA202-MATHS-2024",
	// 		instructor: "Emily Davis",
	// 		avatarLetter: "E",
	// 	},
	// 	{
	// 		id: "7",
	// 		courseName: "PH201-PHYSICS-2024",
	// 		instructor: "Robert Brown",
	// 		avatarLetter: "R",
	// 	},
	// 	{
	// 		id: "8",
	// 		courseName: "CS103-DATA-2024",
	// 		instructor: "Linda Taylor",
	// 		avatarLetter: "L",
	// 	},
	// 	{
	// 		id: "9",
	// 		courseName: "CH101-CHEM-2024",
	// 		instructor: "Sophia Wilson",
	// 		avatarLetter: "S",
	// 	},

	// ]);

	useEffect(() => {
		console.log("courses", courses);
	}, [courses]);

	return (
		<Box sx={{ padding: { xs: 2, sm: 3, md: 4 }, bgcolor: "lightblue" }}>
			<Grid container spacing={3} justifyContent="center">
				{courses &&
					courses.length > 0 &&
					courses.map((course, index) => (
						<Grid
							key={index}
							item
							xs={12} // Full width on extra small screens
							sm={6} // Two cards per row on small screens
							md={4} // Three cards per row on medium screens
							lg={3} // Four cards per row on large screens
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<ClassroomCard
								courseName={course.coursename}
								instructor={course.instructor}
								avatarLetter={course.profileimageURL}
							/>
						</Grid>
					))}
			</Grid>
		</Box>
	);
};

export default Courses;
