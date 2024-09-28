import React, { useState } from "react";
import {
	Card,
	CardContent,
	Typography,
	Avatar,
	Divider,
	Box,
	Button,
	TextField,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
	border: "1px solid #e0e0e0",
	borderRadius: "10px",
	padding: "20px",
	marginBottom: "20px",
	boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
});

const LabComponent = () => {
	const [selectedFile, setSelectedFile] = useState(null);

	// Function to handle file selection
	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	// Function to handle form submission (currently a placeholder)
	const handleSubmit = () => {
		if (selectedFile) {
			console.log("File to be submitted:", selectedFile);
		} else {
			console.log("No file selected");
		}
	};

	return (
		<Box sx={{ maxWidth: "1300px", margin: "0 auto", mt: 5 }}>
			{/* Two-column layout */}
			<Box display="flex" justifyContent="space-between">
				{/* Left side: Lab details, PDF, and class comments */}
				<Box sx={{ width: "60%" }}>
					<StyledCard>
						{/* Top section: Icon, Lab name, Owner, and Published time */}
						<Box display="flex" alignItems="center" mb={2}>
							<Avatar>
								<FolderIcon />
							</Avatar>
							<Box ml={2}>
								<Typography variant="h5">
									Lab07 - Wireshark TCP and UDP (G5/G6)
								</Typography>
								<Typography variant="body2">
									Sanjay Srivastava • Published on Sep 24, 2024
								</Typography>
							</Box>
						</Box>

						<Divider />

						{/* PDF Link Section */}
						<Box mt={2} mb={2}>
							<Typography variant="body1">PDF File:</Typography>
							<Button
								variant="contained"
								href="#"
								target="_blank"
								sx={{ mt: 1 }}
							>
								Lab07-Wireshark TCP UDP.pdf
							</Button>
						</Box>

						<Divider />

						{/* Class comments section */}
						<Box mt={2}>
							<Typography variant="h6">Class comments</Typography>
							<TextField
								fullWidth
								label="Add a class comment"
								variant="outlined"
								multiline
								rows={2}
								sx={{ mt: 2, mb: 2 }}
							/>
							<Button variant="contained" color="primary">
								Post Comment
							</Button>
						</Box>
					</StyledCard>
				</Box>

				{/* Right side: Submit Assignment section and Private comments */}
				<Box sx={{ width: "25%" }}>
					<StyledCard>
						<Typography variant="h6">Your Work</Typography>
						<Divider sx={{ mt: 1, mb: 2 }} />

						{/* File Upload */}
						<input
							style={{ display: "none" }}
							id="upload-file"
							type="file"
							onChange={handleFileChange}
						/>
						<label htmlFor="upload-file">
							<Button
								variant="outlined"
								component="span"
								fullWidth
								sx={{ mb: 2 }}
							>
								+ Add or Create
							</Button>
						</label>

						{/* Display selected file name */}
						{selectedFile && (
							<Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
								Selected file: {selectedFile.name}
							</Typography>
						)}

						{/* Submit Assignment */}
						<Button
							variant="contained"
							color="primary"
							fullWidth
							onClick={handleSubmit} // Simulate form submission
						>
							Mark as Done
						</Button>

						{/* Divider and private comments section */}
						<Divider sx={{ mt: 2, mb: 2 }} />
						<Typography variant="h6">Private comments</Typography>
						<TextField
							fullWidth
							label="Add comment to Sanjay Srivastava"
							variant="outlined"
							multiline
							rows={2}
							sx={{ mt: 2, mb: 2 }}
						/>
						<Button variant="contained" color="primary">
							Post
						</Button>
					</StyledCard>
				</Box>
			</Box>
		</Box>
	);
};

export default LabComponent;
