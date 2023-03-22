import React, { useState, useEffect } from "react";

import About from "../pages/About";
import Projects from "../pages/Projects";
import Interests from "../pages/Interests";

export default function Body({ activePage, setActivePage }) {
	const renderPage = () => {
		if (activePage === "About") {
			return <About setActivePage={setActivePage} />;
		} else if (activePage === "Projects") {
			return <Projects />;
		} else {
			return <Interests />;
		}
	};

	return renderPage();
}
