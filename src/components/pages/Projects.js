import React from "react";
import barcode from "../../images/barcode.jpg";

export default function Projects() {
	return (
		<div className="card shadow">
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
							using MongoDB
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
