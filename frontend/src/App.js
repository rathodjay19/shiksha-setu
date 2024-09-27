import "./App.css";
import axios from "axios";
import config from "./config";
import Courses from "./components/Courses";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
//   const handleClick = async () => {
//     try {
//       const headers = {
//         "Content-Type": "applsication/json",
//         authorization: `Bearer ${window.localStorage.getItem("token")}`,
//       };
//       const results = await axios.get(config.BACKEND_API + "/temp", {
//         headers,
//       });

//       console.log(results.data);
//     } catch (err) {
//       console.log("error ->", err);
//     }
//   };

  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
    // <div className="App">
    //   <button onClick={handleClick}>click</button>
    //   <Courses />
    // </div>
  );
}

export default App;
