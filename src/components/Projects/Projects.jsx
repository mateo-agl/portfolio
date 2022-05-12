import React from "react";
import pClock from "../../assets/thumbnails/pomodoro-clock.png";
import treeMap from "../../assets/thumbnails/tree-map.png";
import calc from "../../assets/thumbnails/javascript-calculator.png";
import chorMap from "../../assets/thumbnails/choropleth-map.png";
import heatMap from "../../assets/thumbnails/heat-map.png";
import markdown from "../../assets/thumbnails/markdown-previewer.png";
import messageBoard from "../../assets/thumbnails/message-board.png";
import barChart from "../../assets/thumbnails/bar-chart.png";
import ecomWebsite from "../../assets/thumbnails/ecommerce-website.png";
import sunriseSunset from "../../assets/thumbnails/sunrise-sunset.png";
import scatterplot from "../../assets/thumbnails/scatterplot.png";
import "./Projects.css";

export const Projects = () => (
	<section
		className="reveal col-12 mx-auto position-relative"
		id="projects"
	>
		<h2>My work</h2>
		<div className="row separator"/>
		<div className="projects-cont row mt-5 justify-content-center">
			<ul className="projects-grid p-0 m-0">
				{
					projects.map(
						(p, i) => 
						<li 
							className="project d-flex flex-column p-2"
							key={i}
						>
							<div className="thumbnail position-relative">
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
								<div className="overflow-hidden">
									<p className="proj-desc">{p.description}</p>
								</div>
							</article>
							<div className="mt-auto">
								<label className="technologies">
									{p.technologies}
								</label>
								<a	
									className="d-block proj-code ms-auto"
									href={p.codeLink}
									rel="noopener noreferrer"
									target="_blank"
								>
									Code
								</a>
							</div>
						</li>
					)
				}
			</ul>
		</div>
		
	</section>
)

const projects = [
	{
		appLink: "https://mateo-agl.github.io/sunrise-sunset/",
		thumbnail: sunriseSunset,
		codeLink: "https://github.com/mateo-agl/sunrise-sunset",
		name: "Sunrise Sunset",
		description: "Sun graph showing daylight information of any city throghout the whole year.",
		technologies: "React, D3, SunCalc, Axios, CSS"
	},
	{
		appLink: "https://mateo-agl.github.io/ecommerce-website/",
		thumbnail: ecomWebsite,
		codeLink: "https://github.com/mateo-agl/ecommerce-website",
		name: "Ecommerce website",
		description: "Built entirily with React classes. Users can filter products by category, choose them with especific attributes and add them to their cart.",
		technologies: "React, React-Router, CSS"
	},
	{
		appLink: "https://anonymous-message-board.mateo-agl.repl.co/",
		thumbnail: messageBoard,
		codeLink: "https://github.com/mateo-agl/anonymous-message-board",
		name: "Anonymous message board",
		description: "MERN stack project created with functional components. Users can see each others threads and replies and modifie them using their id and password",
		technologies: "React, React-Router, CSS, Express, Mongoose, Axios"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/GRmaeNj",
		thumbnail: heatMap,
		codeLink: "https://github.com/mateo-agl/heat-map",
		name: "Heat Map",
		description: "A map that shows global temperature from each month from 1753 to 2015 and it's variation.",
		technologies: "D3, REST API, CSS"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/LYWjPLN",
		thumbnail: pClock,
		codeLink: "https://github.com/mateo-agl/pomodoro-clock",
		name: "Pomodoro Clock",
		description: "A timer that uses the pomodoro technique to help you be more productive.",
		technologies: "React, Redux, CSS"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/rNweqVw",
		thumbnail: chorMap,
		codeLink: "https://github.com/mateo-agl/choropleth-map",
		name: "Choropleth Map",
		description: "Map of the United States educational attainment by county.",
		technologies: "D3, TopoJSON, REST API, CSS"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/gORLEyP",
		thumbnail: treeMap,
		codeLink: "https://github.com/mateo-agl/tree-map",
		name: "Tree Map",
		description: "Top 100 most valuable kickstarter pledges grouped by category.",
		technologies: "D3, REST API, CSS"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/MWmrmRg",
		thumbnail: scatterplot,
		codeLink: "https://github.com/mateo-agl/scatterplot-graph",
		name: "Scatterplot Graph",
		description: "Professional bicycle riders and doping allegations in Alpe d'Huez, from 1993 to 2014.",
		technologies: "D3, REST API, CSS"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/QWpyrWN",
		thumbnail: calc,
		codeLink: "https://github.com/mateo-agl/javascript-calculator",
		name: "Javascript Calculator",
		description: "A standard calculator built with javascript.",
		technologies: "React, CSS"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/KKaLBKb",
		thumbnail: markdown,
		codeLink: "https://github.com/mateo-agl/markdown-previewer",
		name: "Markdown Previewer",
		description: "An app that parses and displays the markdown you write.",
		technologies: "React, CSS, Bootstrap, Marked"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/oNWeYOa",
		thumbnail: barChart,
		codeLink: "",
		name: "Bar Chart",
		description: "Bar chart of the GDP of the United States per trimester from 1947 to 2015",
		technologies: "D3, REST API, CSS"
	}
];  