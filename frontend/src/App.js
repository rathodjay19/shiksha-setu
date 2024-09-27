import "./App.css";
import axios from "axios";
import config from "./config";
import Courses from "./components/Courses"
function App() {
	const handleClick = async () => {
		try {
			const headers = {
				"Content-Type": "applsication/json",
				authorization: `Bearer ${window.localStorage.getItem("token")}`,
			};
			const results = await axios.get(config.BACKEND_API + "/temp", {
				headers,
			});

			console.log(results.data);
		} catch (err) {
			console.log("error ->", err);
		}
	};

	return (
		<div className="App">
      <button onClick={handleClick}>click</button>
      
       <Courses/>
		</div>
	);
}

export default App;
