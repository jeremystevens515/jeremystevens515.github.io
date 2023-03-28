import React from "react";
import Icon from "./Icon";

import { techIcons } from "../helper/lists";

export default function TechnologiesCard() {
	return (
		<div className="lg:h-2/3">
			<div className="card card-normal bg-base-100 shadow-xl h-full">
				<div className="card-body">
					<h2 className="card-title">technologies</h2>
					<div className="h-full grid grid-cols-2 gap-1">
						{techIcons.map((item) => {
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

// col-span-1 row-span-2
