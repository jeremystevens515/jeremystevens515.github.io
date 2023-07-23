import React from "react";

import AboutCard from "../components/AboutCard";
import TechnologiesCard from "../components/TechnologiesCard";
import FutureLearningCard from "../components/LearningCard";

export default function About() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.remove("hide");
				entry.target.classList.add("show");
			}
		});
	});

	const hiddenEls = document.querySelectorAll("section");
	hiddenEls.forEach((el) => { observer.observe(el); });

	return (
		<div id="container">
			<section className="hide">
				<p className="text-6xl text-white">Hi,</p>
				<p className="text-6xl text-white">I'm Jeremy</p>
			</section>
			<section className="hide">
				<p className="text-4xl text-white">I'm a software developer</p>
				<p className="text-4xl text-white">with certifications in full-stack web development</p>
				<p className="text-4xl text-white">and C++</p>
			</section>
			<section className="hide">
				<p className="text-4xl text-white">I love to learn</p>
				<p className="text-4xl text-white">and understand how everything works</p>
				<div>
					<button className="btn">More about me</button>
					<button className="btn">Projects</button>
				</div>
			</section>

		</div>
	);
}

// grid grid-cols-1 lg:grid-rows-min lg:grid-cols-2 gap-4 bg-neutral
