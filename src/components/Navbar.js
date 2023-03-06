import React from "react";

export default function Navbar({ activePage, setActivePage }) {
	const pageChange = (event, page) => {
		const navLinks = document.querySelectorAll(".navLink");
		navLinks.forEach((link) => {
			if (link.classList.contains("active")) {
				link.classList.remove("active");
			}
		});
		event.target.classList.add("active");
		setActivePage(event.target.text);
	};

	return (
		<nav className="navbar bg-light sticky-top">
			<div className="container-fluid">
				<a
					onClick={() => setActivePage("About")}
					className="navbar-brand"
					href="#about"
				>
					Jeremy Stevens
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="offcanvas offcanvas-end"
					tabIndex="-1"
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel"
				>
					<div className="offcanvas-header">
						<h5 className="offcanvas-title" id="offcanvasNavbarLabel">
							Portfolio
						</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div className="offcanvas-body">
						<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
							<li className="nav-item">
								<a
									onClick={pageChange}
									className="navLink nav-link active"
									href="#about"
								>
									About
								</a>
							</li>
							<li className="nav-item">
								<a
									onClick={pageChange}
									className="navLink nav-link"
									href="#projects"
								>
									Projects
								</a>
							</li>
							<li className="nav-item">
								<a
									onClick={pageChange}
									className="navLink nav-link"
									href="#resume"
								>
									Resume
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									onClick={pageChange}
									className="navLink nav-link"
									href="#Interests"
								>
									Interests
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
