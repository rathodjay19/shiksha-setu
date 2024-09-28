import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import config from "../config";
import { useNavigate } from "react-router-dom";

const token = "";

function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async () => {
		const headers = {
			"Content-Type": "applsication/json",
			authorization: `Bearer ${token}`,
		};
		try {
			const results = await axios.post(config.BACKEND_API + "/user/signup", {
				email,
				password,
			});
			console.log(results.data);
		} catch (err) {
			console.log("error ->", err);
		}
	};

	return (
		<>
			<h1>Register</h1>
			<TextField
				id="outlined-basic"
				label="Email"
				variant="outlined"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<TextField
				id="outlined-basic"
				label="Password"
				variant="outlined"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<Button variant="contained" onClick={handleSubmit}>
				SignUp
			</Button>
			<Button
				variant="contained"
				onClick={() => {
					navigate("/login");
				}}
			>
				Goto Login
			</Button>
		</>
	);
}

export default Register;
