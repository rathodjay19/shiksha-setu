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
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";

const ClassroomCard = ({ courseName, instructor, avatarLetter }) => {
	return (
		<Card
			sx={{
				width: "100%",
				borderRadius: "10px",
				boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
				overflow: "hidden",
				transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
				"&:hover": {
					transform: "scale(1.05)",
					boxShadow:
						"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
				},
			}}
		>
			<Box
				sx={{
					backgroundColor: "#f5f5f5",
					padding: "16px",
					color: "#333",
					textAlign: "center",
					animation: "fadeIn 0.5s ease-in-out",
				}}
			>
				<Typography variant="h6">{courseName}</Typography>
			</Box>
			<Divider sx={{ margin: "24px 0" }} />
			<CardContent
				sx={{
					padding: "20px 16px",
					textAlign: "center",
					animation: "fadeIn 0.8s ease-in-out",
				}}
			>
				<Typography variant="body2" sx={{ fontSize: "14px", color: "#757575" }}>
					3 Total Enrolled
				</Typography>
				<Typography variant="body2" sx={{ fontSize: "14px", color: "#757575" }}>
					April 1, 2021 Last Updated
				</Typography>
				<Box>
					<Tooltip title="Contacts" arrow placement="top">
						<IconButton aria-label="contacts" color="info">
							<ContactsIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="View Folder" arrow placement="top">
						<IconButton aria-label="folder" color="info">
							<FolderOpenOutlinedIcon />
						</IconButton>
					</Tooltip>
				</Box>
				<Box
					sx={{
						borderTop: "1px solid #E0E0E0",
						marginTop: "16px",
						paddingTop: "16px",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography variant="body2" sx={{ marginRight: "auto" }}>
						A course by {instructor}
					</Typography>
					<Avatar
						sx={{
							backgroundColor: "#A1887F",
							color: "white",
							width: 55,
							height: 55,
							border: "3px solid white",
							transition:
								"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
							"&:hover": {
								transform: "scale(1.2)",
								boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
							},
						}}
					>
						{avatarLetter}
					</Avatar>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ClassroomCard;
