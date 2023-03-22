import React from "react";
import barcode from "../images/barcode.jpg";

export default function Projects() {
	return (
		<div>
			<a
				href="https://github.com/jeremystevens515/lunchroom-inventory-app"
				className="card shadow"
			>
				<div className="row">
					<img
						id="barcode"
						className="col-md-4"
						src={barcode}
						alt="kitchen inventory"
					></img>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Kitchen Inventory</h5>
							<p className="card-text">
								Inventory management system developed to aid a local elementary
								school transition from paper inventory to electronic, which
								utilizes the user’s phone as a barcode scanner and stores data
								using MongoDB. NOTE: this link will take you to the github
								repository, and not the deployed application, as the application
								is currently being used by the client and is password protected.
							</p>
						</div>
					</div>
				</div>
			</a>
			<a
				href="https://github.com/jeremystevens515/eCommerce-backend"
				className="card shadow"
			>
				<div className="row">
					<img
						id="barcode"
						className="col-md-4"
						src={barcode}
						alt="kitchen inventory"
					></img>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">eCommerce Backend</h5>
							<p className="card-text">
								Back end application using Express.js, MySQL, and Sequelize.
								RESTful API routes written using Sequelize.
							</p>
						</div>
					</div>
				</div>
			</a>
			<a
				href="https://github.com/jeremystevens515/nosql-social-network-api"
				className="card shadow"
			>
				<div className="row">
					<img
						id="barcode"
						className="col-md-4"
						src={barcode}
						alt="kitchen inventory"
					></img>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">NoSQL Social Network API</h5>
							<p className="card-text">
								Back end application for a social media platform using
								Express.js, MongoDB, and Mongoose ODM.
							</p>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
}
