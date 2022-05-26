import React from "react";
import resume from "../../assets/Mateo Aguilar Resume.pdf";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-down.svg";
import "./Welcome.css";

export const Welcome = () => (
	<section className="row vh-100 justify-content-center align-items-center position-relative">
		<div className="col">
			<div className="col-sm-10 col-xsm-12 mx-auto">
				<h1 className="hello">
					{hello}
				</h1>
				<h1 className="name">
					{name}
				</h1>
				<h2 className="desc">
					{desc}
				</h2>
			</div>
			<div className="d-flex float-end">
				<a
					className="btn-theme resume-btn ms-auto"
					href={resume}
					rel="noopener noreferrer"
					target="_blank"
				>
					RESUME
				</a>
			</div>
		</div>
		<Arrow className="arrow down"/>
	</section>
);

const hello = "Hi, I'm";
const name = "Mateo Aguilar";
const desc = "A Full Stack developer living in Argentina.";