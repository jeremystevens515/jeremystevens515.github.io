import React from "react";
import barcode from "../images/barcode.jpg";
import lunchroom from "../images/lunchroom-inventory.jpg";

export default function Software() {
	return (
		<div className="grid md:grid-cols-2 xl:grid-cols-3 justify-items-center">
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={lunchroom} alt="barcode" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">Kitchen Inventory</h2>
					<p>
						Inventory management system developed to aid a local elementary
						school transition from paper inventory to electronic, which utilizes
						the user’s phone as a barcode scanner and stores data using MongoDB
						and GraphQL.
					</p>
					<div className="card-actions justify-end">
						<a
							href="https://github.com/jeremystevens515/lunchroom-inventory-app"
							className="btn btn-primary"
						>
							GitHub Repository
						</a>
					</div>
				</div>
			</div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={barcode} alt="barcode" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">eCommerce Backend</h2>
					<p>
						eCommerce backend application using Express.js, MySQL, and
						Sequelize. RESTful API routes are used to make GET, POST, PUT, and
						DELETE requests.
					</p>
					<div className="card-actions justify-end">
						<a
							href="https://github.com/jeremystevens515/eCommerce-backend"
							className="btn btn-primary"
						>
							GitHub Repository
						</a>
					</div>
				</div>
			</div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={barcode} alt="barcode" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">noSQL Social Network API</h2>
					<p>
						Simple social media network API built with Mongo DB and the Mongoose
						ODM.
					</p>
					<div className="card-actions justify-end">
						<a
							href="https://github.com/jeremystevens515/nosql-social-network-api"
							className="btn btn-primary"
						>
							GitHub Repository
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
