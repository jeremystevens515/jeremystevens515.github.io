import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
	// set state variable to About by default
	// this variable will be used to determine which page will render in <Main/>
	const [active, setActive] = useState("About");

	return (
		<div>
			<Navbar active={active} setActive={setActive} />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
