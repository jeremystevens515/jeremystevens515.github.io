import React from "react";
import { Link } from "react-router-dom";

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
		<div className="navbar bg-base-100">
			<div className="flex-none">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost btn-square">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/software">Software</Link>
							</li>
							<li>
								<Link to="/games">Games</Link>
							</li>
							<li>
								<Link to="/3dart">3D Art</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="flex-1">
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					jeremy stevens
				</Link>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost rounded-btn">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block w-5 h-5 stroke-current"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
							></path>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
					>
						<li>
							<a>Resume</a>
						</li>
						<li>
							<a>Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
