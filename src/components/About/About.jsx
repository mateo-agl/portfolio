import React from "react";
import avatar from "../../assets/avatar/avatar.svg";
import "./About.css";

export const About = () => (
	<section 
		className="reveal col-lg-7 col-md-10 col-sm-12 mx-auto"
		id="acerca"
	>
		<h2>Acerca de mí...</h2>
		<div className="row separator"/>
		<div className="row justify-content-center">
			<div className="col-xxl-4 col-xl-6 col-sm-8 d-flex">
				<div className="avatar w-100 my-auto">
					<img alt="my avatar" className="w-100 h-100" src={avatar}/>
				</div>
			</div>
			<article className="about-art col-md-8 col-sm-12 my-auto">
				<p className="mt-4">En septiembre de 2020 decidí aprender sobre desarrollo web por mi cuenta mientras seguía estudiando en la secundaria. Para fines de 2021 me había graduado y había terminado diferentes cursos de 
				Diseño Web, Desarrollo Front End y Fundamentos del Back End y API's.</p>
				<p className="mt-2">A partir de ahí, decidí enfocarme en el Front End, estando fascinado por las cosas que puedo hacer con librerías como React o D3.</p>
				<p className="mt-2">Me gustan los desafíos y siempre intento de mejorar las cosas cada vez que puedo, y actualmente estoy abierto a propuestas.</p>
			</article>
		</div>
	</section>
);