import React from "react";
import { useEffect, useState } from "react";
import anime from "animejs";
import { Link } from "react-router-dom";

// import AboutCard from "../components/AboutCard";
// import TechnologiesCard from "../components/TechnologiesCard";
// import FutureLearningCard from "../components/LearningCard";

export default function Home() {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoaded(true);
	}, []);

	if (loaded) {
		// animate welcome and color mask for name upon page loading
		const timeline = anime.timeline({
			easing: "easeInOutQuad",
			delay: 1000,
		});

		timeline
			.add({
				targets: ".welcome-section",
				translateY: ['-100%', 0],
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
				<p className="text-5xl text-white tracking-wide p-4 text-center">Hello!</p>
				<p className="text-6xl text-white tracking-wide text-center">I'm <span id="name">Jeremy.</span></p>
			</section >

			<section className="hide mid-section">
				<p className="text-2xl text-white text-center md:text-4xl">I'm a software developer</p>
				<p className="text-2xl text-white text-center md:text-4xl">certified in full-stack web technologies and C++, including: </p>
				<div className="text-2xl text-white text-center md:text-3xl lg:w-1/2">
					<div className="p-2">
						JavaScript, HTML, CSS, React, Bootstrap, TailwindCSS, DaisyUI
					</div>
					<div className="p-2">
						Node, Express, MongoDB, Mongoose, GraphQL, SQL, Sequelize
					</div>
					<div className="p-2">
						GitHub, Insomnia.
					</div>
				</div>
				<div className="p-4 text-center">
					<Link to="/about" className="btn btn-ghost">&lt; More about me</Link>
					<Link to="/software" className="btn btn-ghost">Projects &gt;</Link>
				</div>
			</section>
		</div >

	);
}
