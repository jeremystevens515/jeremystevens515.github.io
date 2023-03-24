import React from "react";
import photo from "../images/about-photo.jpg";

export default function AboutCard() {
	return (
		<div className="row-span-3 col-span-1">
			<div className="card card-normal bg-base-100 shadow-xl h-full">
				<figure>
					<img
						src={photo}
						alt="responsive"
						className="img-fluid rounded-start"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">about</h2>
					<p className="">
						Software engineer based out of Nashville, Tennessee. Naturally
						curious, self-starting, tech enthusiast who is focused on writing
						clean, reusable code and creating things that people will benefit
						from and enjoy.
					</p>
				</div>
			</div>
		</div>
	);
}
