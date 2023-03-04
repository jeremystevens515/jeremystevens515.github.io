import React, { useState, useEffect } from "react";
import About from "./main/About";
import Projects from "./main/Projects";
import Resume from "./main/Resume";
import Interest from "./main/Interests";

export default function Main() {
	const [active, setActive] = useState("about");

	return (
		<div>
			<p>Content about me</p>
		</div>
	);
}
