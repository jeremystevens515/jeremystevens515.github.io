import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Software";
// import Games from "../pages/Games";
// import _3DArt from "../pages/_3DArt";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Body() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/software" element={<Projects />} />
		</Routes>
	);
}
