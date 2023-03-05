import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

export default function Container() {
	// set state variable to About by default
	// this variable will be used to determine which page will render in <Main/>
	const [activePage, setActivePage] = useState("About");

	return (
		<div className="container">
			<Navbar activePage={activePage} setActivePage={setActivePage} />
			<Main activePage={activePage} />
			<Footer />
		</div>
	);
}
