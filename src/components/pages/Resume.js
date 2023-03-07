import React from "react";
import resumeFile from "../../images/stevens_software_dev_resume.pdf";

export default function Resume() {
	return (
		<div>
			<div className="card shadow-sm">
				<div className="card-body">
					<div className="ratio ratio-1x1">
						<iframe
							id="resume"
							className="border"
							title="resume"
							src="https://docs.google.com/document/d/e/2PACX-1vQu9glYqbMfNnrNieW9F1XcDZtL227mHcSY0Q9GPttXN9YOCEP5yx4OafthZyWkeNXOFTQpdXEsjm-c/pub?embedded=true"
						></iframe>
					</div>
				</div>
				<a
					id="resume-btn"
					className="btn m-2 shadow-sm"
					href={resumeFile}
					download
				>
					download
				</a>
			</div>
		</div>
	);
}
