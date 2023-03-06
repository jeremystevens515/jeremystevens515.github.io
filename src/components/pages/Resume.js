import React from "react";

export default function Resume() {
	return (
		<div className="container">
			<div className="card">
				<div className="card-body">
					<iframe
						className="ratio ratio-1x1"
						title="resume"
						src="https://docs.google.com/document/d/e/2PACX-1vQu9glYqbMfNnrNieW9F1XcDZtL227mHcSY0Q9GPttXN9YOCEP5yx4OafthZyWkeNXOFTQpdXEsjm-c/pub?embedded=true"
					></iframe>
					<a
						className="btn btn-dark"
						href="portfolio\src\images\stevens_software_dev_resume.pdf"
						download
					>
						download
					</a>
				</div>
			</div>
		</div>
	);
}
