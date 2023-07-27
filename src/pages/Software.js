import React from "react";
import lunchroom from "../images/lunchroom-inventory.jpg";
import ecommerce from "../images/ecommerce.jpg";
import socialMedia from "../images/social-media.jpg";

export default function Software() {
	return (
		<div className="">
			<div className="hidden">
				<div className="card bg-primary shadow-xl">
					<figure>
						<img className="project-img bg-center bg-cover" src={lunchroom} alt="barcode" />
					</figure>
					<div className="card-body text-center">
						<h2 className="text-secondary text-2xl font-medium">MERN Stack</h2>
						<p className="text-info">
							Inventory management system utilizing the entire MERN stack of technologies- MongoDB, Express, React, & Node.
						</p>
						<div>
							<a
								href="https://github.com/jeremystevens515/lunchroom-inventory-app"
								className="btn btn-primary"
							>
								GitHub Repository
							</a>
						</div>
					</div>
				</div>

				<div className="card bg-primary shadow-xl">
					<figure>
						<img className="project-img" src={ecommerce} alt="barcode" />
					</figure>
					<div className="card-body text-center">
						<h2 className="text-secondary text-2xl font-medium">eCommerce Website</h2>
						<p className="text-info">
							eCommerce site built with MongoDB, Express, React, & Node.
						</p>
						<p>
							Coming soon.
						</p>
						<div>
							<a
								href="https://github.com/jeremystevens515/"
								className="btn btn-primary"
							>
								GitHub Repository
							</a>
						</div>
					</div>
				</div>

				<div className="card bg-primary shadow-xl">
					<figure>
						<img className="project-img" src={socialMedia} alt="barcode" />
					</figure>
					<div className="card-body text-center">
						<h2 className="text-secondary text-2xl font-medium">Social Media Clone</h2>
						<p className="text-info">
							Social media clone built with .NET.
						</p>
						<p> Coming soon.</p>
						<div>
							<a
								href="https://github.com/jeremystevens515/"
								className="btn btn-primary"
							>
								GitHub Repository
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="software">
				<h2>Projects</h2>
				<div className="projects">
					<a href="https://github.com/jeremystevens515/lunchroom-inventory-app" className="project">MERN</a>
					<a href="https://github.com/jeremystevens515/" className="project">MERN</a>
					<a href="https://github.com/jeremystevens515/" className="project">.NET</a>
				</div>
				<button className="btn btn-ghost">Back &lt;</button>
			</div>
		</div>
	);
}
