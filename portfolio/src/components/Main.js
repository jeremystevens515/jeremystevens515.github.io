import React, { useState, useEffect } from "react";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Interests from "./pages/Interests";

export default function Main({ activePage, setActivePage }) {
	const renderPage = () => {
		if (activePage === "About") {
			return <About setActivePage={setActivePage} />;
		} else if (activePage === "Projects") {
			return <Projects />;
		} else if (activePage === "Resume") {
			return <Resume />;
		} else {
			return <Interests />;
		}
	};

	return renderPage();
}
