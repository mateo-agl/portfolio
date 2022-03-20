import React from "react";
import avatar from "../../assets/avatar/avatar.svg";
import "./About.css";

export const About = () => (
	<section className="col-8 mx-auto" id="about">
		<h2>About me...</h2>
		<div className="row separator"/>
		<div className="row justify-content-center">
			<div className="col-4 avatar">
				<img alt="my avatar" className="w-100" src={avatar}/>
			</div>
			<article className="about-art col-xl-8 d-flex my-auto">
				<p>{aboutText}</p>
			</article>
		</div>
	</section>
);

const aboutText = "I am a dedicated, versatile and detail oriented Front End developer. Finished different freeCodeCamp's courses and obtained certificates in algorithms and data structures, responsive design, data visualization and front end development libraries. Since last year I have been creating different types of interactive applications using Javascript as the main language and some tools from it's echosystem. I am passionate about creating new and useful applications and making them the most efficient they can be, and I am excited to work in a team and learn new things.";