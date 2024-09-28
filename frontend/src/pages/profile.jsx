import React from "react";
import {
	Avatar,
	Box,
	Typography,
	Card,
	CardContent,
	Grid,
	Container,
	Divider,
	IconButton,
} from "@mui/material"; // Import IconButton here
import ProfileCard from "../components/ProfileCard"; // Ensure this path is correct
import EditIcon from "@mui/icons-material/Edit"; // Ensure this is imported
import { styled } from "@mui/system";
import { useProfile } from "../context/profile";

const TransitionAvatar = styled(Avatar)(({ theme }) => ({
	transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
	"&:hover": {
		transform: "scale(1.05)",
		boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
	},
}));

const Profile = () => {
	const { name, setName, email, setEmail, phoneno, setphoneno } = useProfile();

	return (
		<Container
			maxWidth="lg"
			sx={{
				mt: 5,
				bgcolor: "#f9f9f9",
				borderRadius: "8px",
				p: 3,
				boxShadow: 2,
			}}
		>
			{/* Profile Header */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					mb: 3,
				}}
			>
				<Typography variant="h4" sx={{ fontWeight: "bold" }}>
					User Profile
				</Typography>
			</Box>

			{/* Profile Card */}
			<Card
				elevation={4}
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					alignItems: "center",
					borderRadius: "16px",
					boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
					mb: 5,
				}}
			>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						flex: 1,
					}}
				>
					<TransitionAvatar
						alt="Profile Image"
						src="path_to_your_image" // Replace with the path to your image
						sx={{
							width: { xs: 120, md: 150 },
							height: { xs: 120, md: 150 },
							borderRadius: "50%",
							border: "4px solid #1976d2",
							mb: 2,
						}}
					/>
					<Typography variant="h5" sx={{ fontWeight: "bold" }}>
						{name}
					</Typography>
				</CardContent>
			</Card>

			{/* Divider */}
			<Divider sx={{ my: 3 }} />

			{/* Profile Information Grid */}
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={4}>
					<ProfileCard heading="Age" info= "N/A" />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ProfileCard heading="Contact" info={phoneno?phoneno:"N/A"} />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ProfileCard heading="Email" info={email} />
				</Grid>
			</Grid>
		</Container>

		// <h2>Registered Courses</h2>
		// <Container>
		//   <Grid>

		//   </Grid>
		// </Container>
	);
};

export default Profile;
