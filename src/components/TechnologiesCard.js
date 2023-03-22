import React from "react";
import Icon from "./Icon";

import { techIcons } from "../helper/lists";

export default function TechnologiesCard() {
	return (
		<div className="card card-normal shadow-xl lg:w-1/2 lg:h-64">
			<div className="card-body">
				<h2 className="card-title">technologies</h2>
				<div className="grid grid-cols-2 gap-1 md:grid-cols-3">
					{techIcons.map((item) => {
						return (
							<Icon
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
