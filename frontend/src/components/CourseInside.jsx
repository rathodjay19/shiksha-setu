import React, { useState } from "react";
import {
	Tabs,
	Tab,
	Box,
	Card,
	CardContent,
	Typography,
	Avatar,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import NoteIcon from "@mui/icons-material/Note";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";

// Custom Tab Panel component
const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
};

const CourseInside = () => {
	const [value, setValue] = useState(0);
	const navigate = useNavigate(); // Using the navigate function from react-router

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	// Function to navigate to the Lab component when a lab card is clicked
	const handleLabClick = (labId) => {
		navigate(`/course-inside/lab/${labId}`);
	};

	return (
		<Box sx={{ width: "100%" }}>
			{/* Tabs */}
			<Tabs value={value} onChange={handleChange} centered>
				<Tab label="Lab" />
				<Tab label="Lecture Notes" />
				<Tab label="Announcements" />
				<Tab label="Attendance" />
			</Tabs>

			{/* Tab Content */}
			<TabPanel value={value} index={0}>
				{/* Cards for Lab tab */}
				<Card
					sx={{ mb: 2 }}
					onClick={() => handleLabClick(1)}
					style={{ cursor: "pointer" }}
				>
					<CardContent>
						<Avatar>
							<FolderIcon />
						</Avatar>
						<Typography variant="h6">Lab Assignment 1</Typography>
						<Typography variant="body2">Date: Sep 25, 2024</Typography>
						<Typography variant="body2">
							This is the description for Lab Assignment 1.
						</Typography>
					</CardContent>
				</Card>
				<Card
					sx={{ mb: 2 }}
					onClick={() => handleLabClick(2)}
					style={{ cursor: "pointer" }}
				>
					<CardContent>
						<Avatar>
							<FolderIcon />
						</Avatar>
						<Typography variant="h6">Lab Assignment 2</Typography>
						<Typography variant="body2">Date: Sep 27, 2024</Typography>
						<Typography variant="body2">
							This is the description for Lab Assignment 2.
						</Typography>
					</CardContent>
				</Card>
			</TabPanel>

			<TabPanel value={value} index={1}>
				{/* Cards for Lecture Notes tab */}
				<Card sx={{ mb: 2 }}>
					<CardContent>
						<Avatar>
							<NoteIcon />
						</Avatar>
						<Typography variant="h6">Lecture Note 1</Typography>
						<Typography variant="body2">Date: Sep 20, 2024</Typography>
						<Typography variant="body2">
							This is the description for Lecture Note 1.
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ mb: 2 }}>
					<CardContent>
						<Avatar>
							<NoteIcon />
						</Avatar>
						<Typography variant="h6">Lecture Note 2</Typography>
						<Typography variant="body2">Date: Sep 22, 2024</Typography>
						<Typography variant="body2">
							This is the description for Lecture Note 2.
						</Typography>
					</CardContent>
				</Card>
			</TabPanel>

			<TabPanel value={value} index={2}>
				{/* Cards for Announcements tab */}
				<Card sx={{ mb: 2 }}>
					<CardContent>
						<Avatar>
							<AnnouncementIcon />
						</Avatar>
						<Typography variant="h6">Announcement 1</Typography>
						<Typography variant="body2">Date: Sep 24, 2024</Typography>
						<Typography variant="body2">
							This is the first announcement content.
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ mb: 2 }}>
					<CardContent>
						<Avatar>
							<AnnouncementIcon />
						</Avatar>
						<Typography variant="h6">Announcement 2</Typography>
						<Typography variant="body2">Date: Sep 26, 2024</Typography>
						<Typography variant="body2">
							This is the second announcement content.
						</Typography>
					</CardContent>
				</Card>
			</TabPanel>

			<TabPanel value={value} index={3}>
				{/* Cards for Attendance tab */}
				<Card sx={{ mb: 2 }}>
					<CardContent>
						<Avatar>
							<PeopleIcon />
						</Avatar>
						<Typography variant="h6">Attendance Record 1</Typography>
						<Typography variant="body2">Date: Sep 25, 2024</Typography>
						<Typography variant="body2">
							This is the description for Attendance Record 1.
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ mb: 2 }}>
					<CardContent>
						<Avatar>
							<PeopleIcon />
						</Avatar>
						<Typography variant="h6">Attendance Record 2</Typography>
						<Typography variant="body2">Date: Sep 27, 2024</Typography>
						<Typography variant="body2">
							This is the description for Attendance Record 2.
						</Typography>
					</CardContent>
				</Card>
			</TabPanel>
		</Box>
	);
};

export default CourseInside;
