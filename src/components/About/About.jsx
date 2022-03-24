import React from "react";
import avatar from "../../assets/avatar/avatar.svg";
import "./About.css";

export const About = () => (
	<section className="col-lg-8 col-md-10 col-sm-12 mx-auto" id="about">
		<h2>About me...</h2>
		<div className="row separator"/>
		<div className="row justify-content-center">
			<div className="col-xl-4 col-lg-6 col-sm-8 d-flex">
				<div className="avatar w-100 my-auto">
					<img alt="my avatar" className="w-100 h-100" src={avatar}/>
				</div>
			</div>
			<article className="about-art col-md-8 col-sm-12 d-flex my-auto">
				<p>{aboutText}</p>
			</article>
		</div>
	</section>
);

const aboutText = "I'm a React Front End developer. I started learning web development in 2020 and finished different freeCodeCamp's courses about web design, front end development and the fundamentals of back end and APIs. I've been building different types of interactive applications using React and other tools from JavaScript's echosystem for more than one year. I am in constant learning, trying to make new things and correct errors, with the expectative to be part of a development team soon.";