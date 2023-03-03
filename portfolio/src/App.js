import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
