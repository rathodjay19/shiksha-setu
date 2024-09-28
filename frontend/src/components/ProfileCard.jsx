import React from "react";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(3),
	borderRadius: 2,
	backgroundColor: "#f5f5f5",
	transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
	},
}));

const ProfileCard = ({ heading, info }) => {
	return (
		<StyledPaper elevation={3}>
			<Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
				{heading}
			</Typography>
			<Typography variant="body1" color="text.secondary">
				{info}
			</Typography>
		</StyledPaper>
	);
};

export default ProfileCard;
