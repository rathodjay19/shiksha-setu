// import React, { useState } from "react";
import ClassroomCard from "./ClassroomCard";
import { Grid, Box } from "@mui/material";
import { useCourses } from "../context/courses";
import { useEffect } from "react";

const Courses = () => {
	const { courses } = useCourses();

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
								coursecode={course.coursecode}
							/>
						</Grid>
					))}
			</Grid>
		</Box>
	);
};

export default Courses;
