import React from "react";

import AboutCard from "../components/AboutCard";
import TechnologiesCard from "../components/TechnologiesCard";
import FutureLearningCard from "../components/LearningCard";

export default function About({ setActivePage }) {
	return (
		<div>
			<AboutCard />
			<div className="flex-block lg:flex">
				<TechnologiesCard />
				<FutureLearningCard />
			</div>
		</div>
	);
}
