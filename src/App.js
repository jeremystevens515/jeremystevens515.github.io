import React, { useState, useEffect } from "react";

import "./index.css";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function App() {
	const [activePage, setActivePage] = useState("About");

	return (
		<div>
			<Navbar activePage={activePage} setActivePage={setActivePage} />
			<Body activePage={activePage} setActivePage={setActivePage} />
			<Footer />
		</div>
	);
}
