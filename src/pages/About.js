import React from "react";
import { useEffect, useState } from "react";
import anime from "animejs";
import { Link } from "react-router-dom";

// import AboutCard from "../components/AboutCard";
// import TechnologiesCard from "../components/TechnologiesCard";
// import FutureLearningCard from "../components/LearningCard";

export default function About() {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoaded(true);
	}, []);

	if (loaded) {
		// animate welcome and color mask for name upon page loading
		const timeline = anime.timeline({
			easing: "easeInOutQuad",
		});

		timeline
			.add({
				targets: ".welcome-section",
				translateY: [-500, 0],
				filter: ["blur(10px)", "blur(0px)"],
			})
			.add({
				targets: "#name",
				backgroundPosition: "100% 0%",
				delay: 250,
				duration: 1000,

			});

		//animate mid section elements when they intersect with the viewport
		let Observer = new IntersectionObserver((entries) => { //callback function to execute when the element intersects with the viewport
			entries.forEach((entry) => {
				if (entry.isIntersecting) { //if the element is intersecting with the viewport
					entry.target.classList.add("show");
					// entry.target.classList.remove("hide");
				}
			});
		}, { threshold: 0.5 });

		let elements = document.querySelectorAll(".hide");
		elements.forEach((element) => {
			Observer.observe(element);
		});


	}
	return (
		<div id="container">

			< section className="welcome-section" >
				<p className="text-4xl text-white tracking-wide p-4">Welcome.</p>
				<p className="text-6xl text-white tracking-wide">I'm <span id="name">Jeremy</span></p>
			</section >

			<section className="hide mid-section">
				<p className="text-4xl text-white">I'm a software developer</p>
				<p className="text-4xl text-white">certified in full-stack web development</p>
				<p className="text-4xl text-white">and C++</p>
			</section>

			<section className="hide button-section">
				<p className="text-4xl text-white text-center">I love to learn</p>
				<p className="text-4xl text-white text-center">and understand how everything works</p>
				<div className="p-4 text-center">
					<Link className="btn btn-ghost">&lt; More about me</Link>
					<Link to="/software" className="btn btn-ghost">Projects &gt;</Link>
				</div>
			</section>
		</div >

	);
}
