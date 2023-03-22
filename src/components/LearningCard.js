import React from "react";
import Icon from "./Icon";

import { learnIcons } from "../helper/lists";

export default function FutureLearningCard() {
	return (
		<div className="card card-normal shadow-xl lg:w-1/2">
			<div className="card-body">
				<h2 className="card-title">future learning</h2>
				<div className="grid grid-cols-2 gap-1 md:grid-cols-3">
					{learnIcons.map((item) => {
						return (
							<Icon
								key={item.id}
								technology={item.technology}
								viewBox={item.svgViewBox}
								path={item.svgPath}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
