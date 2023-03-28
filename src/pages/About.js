import React from "react";

import AboutCard from "../components/AboutCard";
import TechnologiesCard from "../components/TechnologiesCard";
import FutureLearningCard from "../components/LearningCard";

export default function About({ setActivePage }) {
	return (
		<div className="lg:flex ">
			<div className="lg:w-1/2">
				<AboutCard />
			</div>
			<div className="lg:w-1/2">
				<TechnologiesCard />
				<FutureLearningCard />
			</div>
		</div>
	);
}

// grid grid-cols-1 lg:grid-rows-min lg:grid-cols-2 gap-4 bg-neutral
