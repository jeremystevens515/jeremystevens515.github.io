import React from "react";
import photo from "../../images/about-photo.jpg";

export default function About() {
	return (
		<div className="container">
			<div className="card mt-4">
				<img
					src={photo}
					alt="responsive image"
					className="card-img-top img-fluid max-w-100 h-auto"
				/>
				<div className="card-body p-4">
					<h2 className="card-title fs-4">about</h2>
					<p className="card-text">
						Software engineer based out of Nashville, Tennessee. Naturally
						curious, self-starting, tech enthusiast who is focused on writing
						clean, reusable code and creating things that people will benefit
						from and enjoy.
					</p>
					<a href="#resume" className="btn btn-dark">
						resume
					</a>
				</div>
			</div>

			<div className="card my-4">
				<div className="card-body p-4">
					<h2 className="fs-4">technologies</h2>
					<div className="btn-group"></div>
				</div>
			</div>

			<div className="card my-4">
				<div className="card-body p-4">
					<h2 className="fs-4">future learning</h2>
				</div>
			</div>
		</div>
	);
}
