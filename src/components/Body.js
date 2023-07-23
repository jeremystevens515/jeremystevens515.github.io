// import React, { useState, useEffect } from "react";

import About from "../pages/About";
import Projects from "../pages/Software";
// import Games from "../pages/Games";
// import _3DArt from "../pages/_3DArt";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Body() {
	return (
		<Routes>
			<Route path="/" element={<About />} />
			<Route path="/software" element={<Projects />} />
			{/* <Route path="/games" element={<Games />} />
			<Route path="/3dart" element={<_3DArt />} /> */}
		</Routes>
	);
}
