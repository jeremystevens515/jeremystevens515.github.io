import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ activePage, setActivePage }) {
	return (
		<div className="navbar flex justify-between border-b-2 border-secondary">
			<div className="flex-none">
				<div className="dropdown dropdown-start">
					<label tabIndex={0} className="btn btn-ghost rounded-btn">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
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
						className="menu dropdown-content p-2 shadow bg-secondary rounded-box w-52 mt-4"
					>
						<li>
							<a href="https://docs.google.com/document/d/e/2PACX-1vQXbCjZP_X-YQivt2fHjTLRRBuJFYqwgroKOFU1-Hsuj1xkLH9jefHf27XirW1b_A/pub">
								Resume
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex-1">
				<Link
					to="/"
					className="btn btn-ghost normal-case text-xl text-white"
				>
					js
				</Link>
			</div>

			<div className="flex-none">
				<div className="dropdown dropdown-end">
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
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"
					>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/software">Projects</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
