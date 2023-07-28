import React from "react";
import { useState, useEffect } from "react";

import lunchroom from "../images/lunchroom-inventory.jpg";
import ecommerce from "../images/ecommerce.jpg";
import socialMedia from "../images/social-media.jpg";

import anime from "animejs";
import { Link } from "react-router-dom";

export default function Software() {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoaded(true);
	}, []);

	if (loaded) {
		anime({
			targets: ".project",
			duration: 1250,
			translateX: [-1000, 0],
			filter: ["blur(10px)", "blur(0px)"],
			opacity: [0, 1],
			delay: anime.stagger(100, { easing: "easeOutSine" }),
			loop: false,
		})
	}

	return (
		<div className="software">
			<h2 className="text-6xl">Projects</h2>
			<div className="">
				<div className="projects">
					<div className="project">
						<a href="https://jeremystevens515.github.io/ssi">React.js</a>
					</div>
					<div className="project">
						<a href="https://github.com/jeremystevens515/lunchroom-inventory-app">MERN</a>
					</div>
					<div className="project">
						<a href="https://github.com/jeremystevens515/" >MERN</a>
					</div>
					<div className="project">
						<a href="https://github.com/jeremystevens515/" >.NET</a>
					</div>
				</div>
			</div>

			<Link to="/" className="btn btn-ghost">Back &lt;</Link>
		</div>
	);
}
