import React from "react";

export default function Icon({ technology, viewBox, path }) {
	return (
		<div className="techIcon">
			<div className="badge badge-outline rounded-md p-4 w-full ">
				<svg className="p-1" width="30" height="30" viewBox={viewBox}>
					<path d={path} />
				</svg>
				{technology}
			</div>
		</div>
	);
}
