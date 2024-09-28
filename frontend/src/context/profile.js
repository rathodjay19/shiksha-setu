import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import config from "../config";

const profileContext = createContext();
const token = "your_token_here";

export const ProfileProvider = ({ children }) => {
	axios.defaults.withCredentials = true;

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneno, setphoneno] = useState("");

	const getProfile = async () => {
		try {
			const headers = {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			};

			const results = await axios.get(config.BACKEND_API + "/user/profile", {
				headers,
			});
			console.log(results);

			setName((prev) => results.data.name);
			setEmail((prev) => results.data.email);
		} catch (err) {
			console.log("error ->", err);
		}
	};

	useEffect(() => {
		// check for is login
		getProfile();
	}, []);

	return (
		<profileContext.Provider
			value={{
				name,
				setName,
				email,
				setEmail,
				phoneno,
				setphoneno,
			}}
		>
			{children}
		</profileContext.Provider>
	);
};

export const useProfile = () => {
	const context = useContext(profileContext);
	if (!context) {
		throw new Error("useProduct must be used within a ProfileProvider");
	}
	return context;
};
