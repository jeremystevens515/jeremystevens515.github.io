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
		let observer = new IntersectionObserver((entries) => { //callback function to execute when the element intersects with the viewport
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log(entry.target);
					entry.target.classList.add("show");
				} else {
					entry.target.classList.remove("show");
				}
			});
		}, { threshold: 0.25 });


		let hiddenEls = document.querySelectorAll(".hide"); //select all elements with the class "hide"
		console.log(hiddenEls);
		hiddenEls.forEach((el) => { observer.observe(el); }); //for each element with the class "hide", observe it

		anime({
			targets: "#name",
			backgroundPosition: "100% 0%",
			duration: 2000,
			easing: "easeInOutQuad",
			delay: 500,
		})
	}

	return (
		<div id="container">
			< section className="hide" >
				<p className="hide text-6xl text-white">Hi,</p>
				<p className="hide text-6xl text-white">I'm <span id="name">Jeremy</span></p>
			</section >
			<section className="hide">
				<p className="hide text-4xl text-white">I'm a software developer</p>
				<p className="hide text-4xl text-white">with certifications in full-stack web development</p>
				<p className="hide text-4xl text-white">and C++</p>
			</section>
			<section className="hide">
				<p className="hide text-4xl text-white">I love to learn</p>
				<p className="hide text-4xl text-white">and understand how everything works</p>
				<div className="hide p-4">
					<Link className="btn btn-ghost">&lt; More about me</Link>
					<Link to="/software" className="btn btn-ghost">Projects &gt;</Link>
				</div>
			</section>
		</div >

	);
}
