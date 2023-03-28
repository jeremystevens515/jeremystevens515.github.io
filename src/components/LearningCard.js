import React from "react";
import Icon from "./Icon";

import { learnIcons } from "../helper/lists";

export default function FutureLearningCard() {
	return (
		<div className="lg:h-1/3">
			<div className="card card-normal bg-base-100 shadow-xl h-full">
				<div className="card-body">
					<h2 className="card-title">future learning</h2>
					<div className="h-full grid grid-cols-2 gap-1">
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
		</div>
	);
}

// col-span-1 row-span-1
