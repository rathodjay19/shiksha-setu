import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
	Grid,
	Avatar,
	Button,
	TextField,
	Typography,
	IconButton,
	InputAdornment,
	CircularProgress,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import axios from "axios";
import config from "../config";

export default function Login() {
	axios.defaults.withCredentials = true;

	const [loading, setLoading] = useState(false);
	const [justVerify, setJustVerify] = useState(false);
	const [validPassword, setValidPassword] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [emailUsername, setEmailUsername] = useState("");
	const [name, setName] = useState("");
	const [phoneNo, setPhoneNo] = useState("");
	const [password, setPassword] = useState("");
	const [selectedImage, setSelectedImage] = useState(null);

	// Handle image selection
	const handleImageChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setSelectedImage(e.target.files[0]);
			// Upload the image (implement your own upload logic here)
			uploadImage(e.target.files[0]);
		}
	};

	// Programmatically open file manager
	const openFileManager = () => {
		document.getElementById("upload-image").click();
	};

	// Simulate image upload process
	const uploadImage = (imageFile) => {
		console.log("Uploading image:", imageFile);
		// Add your upload logic here (e.g., upload to a server)
		// You can use fetch/axios to send the image to the backend server.
	};

	const navigate = useNavigate();

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handlePasswordofLogin = (e) => {
		const input = e.target.value;
		setPassword(input);
		if (input.length < 8) {
			setValidPassword(false);
			return;
		} else {
			setValidPassword(true);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setJustVerify(true);
		if (
			emailUsername === "" ||
			password === "" ||
			!validPassword ||
			emailUsername.length >= 255 ||
			password.length > 255
		) {
			return;
		}
		setLoading(true);

		try {
			const results = await axios.post(
				(config.BACKEND_API || "http://localhost:8000") + "/user/signup",
				{
					email: emailUsername,
					password,
					name,
					phoneno: phoneNo,
					
				}
			);

			// console.log(results.data);
			toast.success("SignUp successful!");
			navigate("/");
		} catch (err) {
			toast.error("Error Occurred !!");
			console.log("error -> ", err);
		}
		setLoading(false);
	};

	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			sx={{
				minHeight: "100vh",
				paddingX: { xs: 2, sm: 4 },
				paddingY: { xs: 4, sm: 6 },
				backgroundSize: "cover",
			}}
		>
			<Grid
				item
				xs={12}
				sm={8}
				md={6}
				lg={4}
				sx={{
					padding: { xs: 2, sm: 4 },
					borderRadius: "16px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
					backdropFilter: "blur(12px)",
					backgroundColor: "transparent",
				}}
			>
				<Avatar sx={{ backgroundColor: "#134611", mb: 2 }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5" fontWeight="bold" mb={2}>
					Sign Up
				</Typography>
				<form onSubmit={handleSubmit} style={{ width: "100%" }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								color="success"
								value={emailUsername}
								onChange={(e) => setEmailUsername(e.target.value)}
								id="Email"
								label="Email"
								placeholder="Email"
								variant="outlined"
								fullWidth
								required
								size="small"
								autoComplete="on"
								error={
									justVerify &&
									(emailUsername === "" || emailUsername.length >= 255)
								}
								helperText={
									justVerify &&
									(emailUsername === "" ? "This field cannot be empty." : "")
								}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<PersonIcon sx={{ color: "#134611" }} />
										</InputAdornment>
									),
								}}
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: 25,
										fontWeight: "bold",
									},
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								color="success"
								value={password}
								onChange={handlePasswordofLogin}
								id="password"
								label="Password"
								placeholder="password"
								variant="outlined"
								name="password"
								type={showPassword ? "text" : "password"}
								fullWidth
								required
								size="small"
								autoComplete="on"
								error={
									justVerify &&
									(!validPassword || password === "" || password.length >= 255)
								}
								helperText={
									justVerify &&
									(password === ""
										? "This field cannot be empty."
										: !validPassword
										? "The password must contain at least 8 characters."
										: "")
								}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<VpnKeyRoundedIcon sx={{ color: "#134611" }} />
										</InputAdornment>
									),
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{showPassword ? (
													<Visibility sx={{ color: "#134611" }} />
												) : (
													<VisibilityOff sx={{ color: "#134611" }} />
												)}
											</IconButton>
										</InputAdornment>
									),
								}}
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: 25,
										fontWeight: "bold",
									},
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								color="success"
								value={name}
								onChange={(e) => setName(e.target.value)}
								id="name"
								label="Name"
								placeholder="name"
								variant="outlined"
								fullWidth
								required
								size="small"
								autoComplete="on"
								error={justVerify && (name === "" || name.length >= 255)}
								helperText={
									justVerify &&
									(name === "" ? "This field cannot be empty." : "")
								}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<PersonIcon sx={{ color: "#134611" }} />
										</InputAdornment>
									),
								}}
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: 25,
										fontWeight: "bold",
									},
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								color="success"
								value={phoneNo}
								onChange={(e) => setPhoneNo(e.target.value)}
								id="phoneNo"
								label="Phone No"
								placeholder="Phone No"
								variant="outlined"
								fullWidth
								size="small"
								autoComplete="on"
								error={justVerify && (phoneNo === "" || phoneNo.length >= 255)}
								helperText={
									justVerify &&
									(phoneNo === "" ? "This field cannot be empty." : "")
								}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<PersonIcon sx={{ color: "#134611" }} />
										</InputAdornment>
									),
								}}
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: 25,
										fontWeight: "bold",
									},
								}}
							/>
						</Grid>
						{/* Upload Image Section */}
						<Grid item xs={6}>
							<input
								id="upload-image"
								type="file"
								style={{ display: "none" }}
								onChange={handleImageChange}
							/>
							<Button
								variant="contained"
								color="info"
								// fullWidth
								sx={{ borderRadius: 2 }}
								onClick={openFileManager}
							>
								Upload Image
							</Button>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="success"
						sx={{
							mt: 3,
							mb: 2,
							borderRadius: 25,
						}}
					>
						{loading ? (
							<CircularProgress size={24} color="inherit" />
						) : (
							"Sign Up"
						)}
					</Button>
				</form>
			</Grid>
		</Grid>
	);
}
