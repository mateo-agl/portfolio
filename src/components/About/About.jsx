import React from "react";
import avatar from "../../assets/avatar/avatar.svg";
import "./About.css";

export const About = () => (
	<section 
		className="reveal col-lg-7 col-md-10 col-sm-12 mx-auto"
		id="about"
	>
		<h2>About me...</h2>
		<div className="row separator"/>
		<div className="row justify-content-center">
			<div className="col-xxl-4 col-xl-6 col-sm-8 d-flex">
				<div className="avatar w-100 my-auto">
					<img alt="my avatar" className="w-100 h-100" src={avatar}/>
				</div>
			</div>
			<article className="about-art col-md-8 col-sm-12 my-auto">
				<p className="mt-4">In september of 2020 I decided to learn about web development on my own while still being in high school. By the end of 2021 I had graduated and
finished different courses from freeCodeCamp's platform about web design, front end development and the fundamentals of back end and APIs.</p>
				<p className="mt-2">Since then, I've decided to focus on the front end, being fascinated with the things I can do with frameworks like React or D3.</p>
				<p className="mt-2">I like challenges and try to make something better everytime I can, and I'm currently open for proposals.</p>
			</article>
		</div>
	</section>
);