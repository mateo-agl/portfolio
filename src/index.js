import React from "react";
import ReactDOM from "react-dom";
import { About } from "./components/About/About.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Skills } from "./components/Skills/Skills.jsx";
import { Welcome } from "./components/Welcome/Welcome.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Links } from "./components/Links/Links.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

const App = () => (
	<>
		<Navbar/>
		<main className="col-10 mx-auto">
			<Welcome/>
			<About/>
			<Skills/>
			<Projects/>
		</main>
		<Footer/>
		<Links/>
	</>
);

ReactDOM.render(<App/>, document.querySelector('#root'));