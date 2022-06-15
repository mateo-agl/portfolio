import React, { useEffect } from "react";
import { About } from "./components/About/About.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Skills } from "./components/Skills/Skills.jsx";
import { Welcome } from "./components/Welcome/Welcome.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Links } from "./components/Links/Links.jsx";
import { ReactComponent as Arrow } from "./assets/icons/arrow-down.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./app.styles.css";

export const App = () => {
	useEffect(() => reveal());

	const reveal = () => {
		window.onscroll = () => {
			const reveals = document.querySelectorAll(".reveal");
			const arrowUp = document.querySelector(".arrow.up");
			reveals.forEach((ele, i) => {
				const revealHeight = ele.getBoundingClientRect().top + 400;
				return revealHeight < window.innerHeight 
						? (ele.classList.add("active"), i === 0 ? arrowUp.classList.add("reveal") : "")
						: i === 0 ? arrowUp.classList.remove("reveal") : "";
			});
	}};

	return (
		<>
			<Navbar/>
			<main className="col-10 mx-auto">
				<Welcome/>
				<About/>
				<Skills/>
				<Projects/>
			</main>
			<Footer/>
			<Links linksClass="fixed-links"/>
			<a href="#top">
				<Arrow className="position-fixed arrow up btn-theme"/>
			</a>
		</>
	);
};