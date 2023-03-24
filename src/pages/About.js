import React from "react";

import AboutCard from "../components/AboutCard";
import TechnologiesCard from "../components/TechnologiesCard";
import FutureLearningCard from "../components/LearningCard";

export default function About({ setActivePage }) {
	return (
		<div className="grid grid-cols-1 lg:grid-rows-3 lg:grid-cols-2 gap-4">
			<AboutCard />
			<TechnologiesCard />
			<FutureLearningCard />
		</div>
	);
}
