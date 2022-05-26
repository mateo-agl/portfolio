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
import "./App.css";

export const App = () => {
	useEffect(window.onscroll = () => reveal());

	const reveal = () => {
		const windowHeight = window.innerHeight;
		const reveals = document.querySelectorAll(".reveal");
		const arrowUp = document.querySelector(".arrow.up");
		const about = document.querySelector("#about").getBoundingClientRect().top;
		if(about < windowHeight) {
			arrowUp.classList.add("reveal");
		} else {
			arrowUp.classList.remove("reveal");
		};
		reveals.forEach(ele => {
			const revealHeight = ele.getBoundingClientRect().top + 400;
			if (revealHeight < windowHeight) ele.classList.add("active");
		});
	};

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
			<a href="#">
				<Arrow className="position-fixed arrow up btn-theme"/>
			</a>
		</>
	);
};