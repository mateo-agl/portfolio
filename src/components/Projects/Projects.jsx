import React, { useState } from "react";
import pClock from "../../assets/thumbnails/pomodoro-clock.png";
import chorMap from "../../assets/thumbnails/choropleth-map.png";
import heatMap from "../../assets/thumbnails/heat-map.png";
import messageBoard from "../../assets/thumbnails/message-board.png";
import barChart from "../../assets/thumbnails/bar-chart.png";
import ecomWebsite from "../../assets/thumbnails/ecommerce-website.png";
import sunriseSunset from "../../assets/thumbnails/sunrise-sunset.png";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-down.svg";
import "./projects.styles.css";

export const Projects = () => {
	const [projState, setProjState] = useState({quantity: 3, text: "Ver más", key: ""});

	const handleTextClick = i => projState.key === "" || projState.key !== i
		? setProjState({...projState, key: i}) 
		: setProjState({...projState, key: ""});

	const handleProjQuantity = () => projState.text === "Ver más"
		? setProjState({...projState, quantity: projects.length, text: "Ver menos"})
		: setProjState({...projState, quantity: 3, text: "Ver más"});
	
	return (
		<section className="reveal col-12 mx-auto position-relative" id="proyectos">
			<h2>Mis proyectos</h2>
			<div className="row separator"/>
			<div className="projects-cont row mt-5 justify-content-center">
				<ul className="projects-grid p-0 m-0">
					{
						projects.slice(0,projState.quantity).map(
							(p, i) => 
							<li 
								className="project d-flex flex-column p-2 border rounded"
								key={i}
							>
								<div className="thumbnail position-relative border rounded">
									<a
										href={p.appLink}
										rel="noopener noreferrer"
										target="_blank"
									>
										<div className="d-flex position-absolute justify-content-center align-items-center w-100 h-100 overflow-hidden">
											<img
												alt={p.name + " thumbnail"}
												src={p.thumbnail}
											/>
										</div>
									</a>
								</div>
								<article className="proj-art pt-2">
									<a
										href={p.appLink}
										rel="noopener noreferrer"
										target="_blank"
									>
										<h3 className="proj-title">{p.name}</h3>
									</a>
									<div className={`info-cont ${i === projState.key ? "read-more" : "hide"}`}>
										<p className="proj-desc">
												{p.description}
										</p>
										<label className="technologies">
											{p.technologies}
										</label>
										<div className="mt-auto">
											<a	
												className="d-block proj-code ms-auto btn-theme rounded"
												href={p.codeLink}
												rel="noopener noreferrer"
												target="_blank"
											>
												Repo
											</a>
										</div>
									</div>
								</article>
								<button
									className={`proj-text-btn mx-auto ${i === projState.key ? "up" : ""} rounded`}
									onClick={() => handleTextClick(i)}
								>
									<Arrow />
								</button>
							</li>
						)
					}
				</ul>
			</div>
			<button
				className="btn-theme mx-auto mt-4 rounded"
				onClick={handleProjQuantity}
			>
				{projState.text}
			</button>
		</section>
	);
};

const projects = [
	{
		appLink: "https://sunrise-sunset-data.herokuapp.com/",
		thumbnail: sunriseSunset,
		codeLink: "https://github.com/mateo-agl/sunrise-sunset",
		name: "Sunrise Sunset",
		description: "Aplicación para saber la cantidad de luz solar que recibe una localidad en un año.",
		technologies: "React, D3, SunCalc, Axios, Luxon, TypeScript, Express, React-Bootstrap, CSS"
	},
	{
		appLink: "https://ecom-react-site.herokuapp.com/",
		thumbnail: ecomWebsite,
		codeLink: "https://github.com/mateo-agl/ecommerce-website",
		name: "Ecommerce website",
		description: "Aplicación hecha con React, imitando distintas tiendas online. Los usuarios pueden filtrar productos por categoría, elegir sus atributos y agregarlos al carro de compras.",
		technologies: "React, React-Router, Sass, ESlint, Express, Axios, REST API"
	},
	{
		appLink: "https://anon-m-board.herokuapp.com/",
		thumbnail: messageBoard,
		codeLink: "https://github.com/mateo-agl/anonymous-message-board",
		name: "Anonymous message board",
		description: "Proyecto creado con el stack MERN. Los usuarios pueden ver comentarios según el board o tópico, comentar, responder, reportar o eliminar.",
		technologies: "React, React-Router, CSS, Express, Mongoose, Axios, ESlint, Babel, Helmet, Mocha/Chai"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/GRmaeNj",
		thumbnail: heatMap,
		codeLink: "https://github.com/mateo-agl/heat-map",
		name: "Heat Map",
		description: "Un mapa que muestra la temperatura global por cada mes desde 1753 hasta 2015 y sus variaciones respecto a la temperatura base.",
		technologies: "D3, REST API, CSS"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/LYWjPLN",
		thumbnail: pClock,
		codeLink: "https://github.com/mateo-agl/pomodoro-clock",
		name: "Pomodoro Clock",
		description: "Cronómetro que usa la técnica pomodoro para ayudarte con tu productividad.",
		technologies: "React, Redux, CSS"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/rNweqVw",
		thumbnail: chorMap,
		codeLink: "https://github.com/mateo-agl/choropleth-map",
		name: "Choropleth Map",
		description: "Mapa de los Estados Unidos, hecho con los datos de nivel educativo de los adultos de cada condado, el nombre del condado y nombre del estado al que pertenece.",
		technologies: "D3, TopoJSON, REST API, CSS"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/oNWeYOa",
		thumbnail: barChart,
		codeLink: "https://github.com/mateo-agl/bar-chart",
		name: "Bar Chart",
		description: "Gráfico de barras hecho con el PIB de los Estados Unidos por cada trimestre desde 1947 hasta 2015.",
		technologies: "D3, REST API, CSS"
	}
];  