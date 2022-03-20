import React from "react";
import resume from "../../assets/Mateo Aguilar Resume.pdf";
import "./Welcome.css";

export const Welcome = () => (
	<section className="row vh-100 justify-content-center align-items-center">
		<div className="col">
			<div className="col-10 mx-auto">
				<h1 className="hello">{hello}</h1>
				<h2 className="desc">{desc}</h2>
			</div>
			<div className="d-flex float-end">
				<a className="resume-btn shadow" href={resume} rel="noreferrer" target="_blank">
					RESUME
				</a>
			</div>
		</div>
	</section>
);

const hello = "Hi, I'm Mateo";
const desc = "A Front End Web Developer living in Argentina, passionate about creating interactive websites and looking for new challenges!";