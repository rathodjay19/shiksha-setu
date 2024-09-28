import React from "react";
import {
	Card,
	CardContent,
	Typography,
	Avatar,
	Box,
	Divider,
	IconButton,
	Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useNavigate } from "react-router-dom";

// Custom styles
const useStyles = makeStyles({
	card: {
		width: "100%",
		borderRadius: "8px", // Reduced for a subtle rounded look
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
		overflow: "hidden",
		borderRadius: "10px",
	},
	header: {
		backgroundColor: "#black", // Light background
		padding: "16px",
		color: "#000", // Darker text color
		textAlign: "center", // Centered title
	},
	avatar: {
		backgroundColor: "#A1887F",
		color: "white",
		width: 55,
		height: 55,
		border: "3px solid white", // To make the avatar stand out
		transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Transition on hover
		"&:hover": {
			transform: "scale(1.2)", // Slightly enlarge the avatar on hover
			boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)", // Add shadow on hover
		},
	},
	content: {
		padding: "20px 16px",
		textAlign: "center", // Center content
		animation: `$fadeIn 0.8s ease-in-out`,
	},
	divider: {
		margin: "24px 0", // Added more space below the divider
	},
	enrollButton: {
		backgroundColor: "#d9534f", // Red color for the button
		color: "white",
		padding: "12px 24px",
		borderRadius: "4px",
		textTransform: "none", // Ensure text isn't all caps
		fontWeight: "600", // Make the text bold
		fontSize: "16px",
		"&:hover": {
			backgroundColor: "#c9302c", // Darker red on hover
			transform: "translateY(-3px)", // Slight elevation on hover
			boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Add shadow
		},
		transition: "all 0.3s ease-in-out",
	},
	courseDescription: {
		fontSize: "14px",
		color: "#757575",
		marginBottom: "16px",
		animation: `$fadeIn 2s ease-in-out`,
	},
	details: {
		fontSize: "14px",
		color: "#757575",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: "8px",
	},
	footer: {
		borderTop: "1px solid #E0E0E0",
		marginTop: "16px",
		paddingTop: "16px",
		display: "flex",
		justifyContent: "space-between", // Space between the name and avatar
		alignItems: "center",
	},
	instructorText: {
		marginRight: "auto", // Align the instructor text to the left
	},
	"@keyframes fadeIn": {
		"0%": {
			opacity: 0,
		},
		"100%": {
			opacity: 1,
		},
	},
});

const ClassroomCard = ({ courseName, instructor, avatarLetter }) => {
	const classes = useStyles();
	const navigate = useNavigate();

	return (
		<Card
			className={classes.card}
			sx={{
				transition: "all 0.2s ease-in-out", // Smooth transition for all properties
				"&:hover": {
					transform: "scale(1.05)",
					boxShadow:
						"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px", // Custom box shadow on hover
				},
			}}
		>
			{/* Header Section with course name */}
			<Box
				className={classes.header}
				onClick={() => {
					navigate("/courses/course-inside");
				}}
			>
				<Typography
					variant="h6"
					sx={{ textDecoration: "underline", "&:hover": { color: "blue" } }}
				>
					{courseName}
				</Typography>
			</Box>
			<Divider className={classes.divider} />
			<br></br>
			{/* Content Section */}
			<CardContent className={classes.content}>
				{/* Removed Intermediate */}
				<Typography variant="body2" className={classes.details}>
					3 Total Enrolled
				</Typography>

				<Typography variant="body2" className={classes.details}>
					April 1, 2021 Last Updated
				</Typography>

				{/* Icon Box */}
				<Box className={classes.iconBox}>
					<Tooltip title="Contacts" arrow placement="top">
						<IconButton aria-label="fingerprint" color="info">
							<ContactsIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="View Folder" arrow placement="top">
						<IconButton aria-label="fingerprint" color="info">
							<FolderOpenOutlinedIcon />
						</IconButton>
					</Tooltip>
				</Box>

				{/* Footer */}
				<Box className={classes.footer}>
					<Typography variant="body2" className={classes.instructorText}>
						A course by {instructor}
					</Typography>
					{/* Avatar moved to the right */}
					<Avatar className={classes.avatar}>{avatarLetter}</Avatar>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ClassroomCard;
