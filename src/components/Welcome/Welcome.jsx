import React from "react";
import resume from "../../assets/Curriculum Vitae Mateo Aguilar.pdf";
import "./welcome.styles.css";

export const Welcome = () => (
	<section
		className="row vh-100 justify-content-center align-items-center"
		id="top"
	>
		<div className="col">
			<div className="col-sm-10 col-xsm-12 mx-auto">
				<h1 className="hello">
					{hello}
				</h1>
				<h1 className="name">
					{name}
				</h1>
				<h1 className="desc">
					{desc}
				</h1>
			</div>
			<div className="d-flex float-end">
				<a
					className="btn-theme resume-btn ms-auto rounded"
					href={resume}
					rel="noopener noreferrer"
					target="_blank"
				>
					Currículum
				</a>
			</div>
		</div>
	</section>
);

const hello = "Hola, soy";
const name = "Mateo Aguilar";
const desc = "Desarrollador Full Stack viviendo en Argentina.";