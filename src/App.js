import React, { useState, useEffect } from "react";
import { GlobalProvider } from "./utils/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function App() {
	return (
		<GlobalProvider>
			<Router>
				<div>
					<Navbar />
					<Body />
					<Footer />
				</div>
			</Router>
		</GlobalProvider>
	);
}
