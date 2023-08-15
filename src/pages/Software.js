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
		// anime({
		// 	targets: ".project",
		// 	duration: 1250,
		// 	translateX: [-1000, 0],
		// 	filter: ["blur(10px)", "blur(0px)"],
		// 	opacity: [0, 1],
		// 	delay: anime.stagger(100, { easing: "easeOutSine" }),
		// 	loop: false,
		// })

		anime.timeline({
			//timeline
		}).add({
			targets: ".project",
			delay: 1000,
		}).add({
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
		<div className="software my-6">
			<h2 className="text-6xl">Projects</h2>
			<div className="">
				<div className="projects text-white font-medium">
					<a className="project" href="https://jeremystevens515.github.io/ssi">
						<div className="text-lg">React.js</div>
						<div className="text-xs">Business Landing Page</div>
					</a>

					<a className="project" href="https://github.com/jeremystevens515/lunchroom-inventory-app" >
						<div className="text-lg">MERN</div>
						<div className="text-xs">Inventory Management</div>
					</a>

					<a className="project" href="https://github.com/jeremystevens515/" >
						<div className="text-lg">MERN</div>
						<div className="text-xs">Ecommerce</div>
						<div className="text-xs">&#40;in progress&#41;</div>

					</a>

					<a className="project" href="https://github.com/jeremystevens515/" >
						<div className="text-lg">.NET</div>
						<div className="text-xs">Social Media</div>
						<div className="text-xs">&#40;in progress&#41;</div>
					</a>

				</div>
			</div >

			<Link to="/" className="btn btn-ghost">Back &lt;</Link>
		</div >
	);
}
