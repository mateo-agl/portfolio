import React from "react";
import pClock from "../../assets/thumbnails/pomodoro-clock.jpg";
import treeMap from "../../assets/thumbnails/tree-map.jpg";
import calc from "../../assets/thumbnails/javascript-calculator.jpg";
import chorMap from "../../assets/thumbnails/choropleth-map.jpg";
import heatMap from "../../assets/thumbnails/heat-map.jpg";
import markdown from "../../assets/thumbnails/markdown-previewer.jpg";
import messageBoard from "../../assets/thumbnails/message-board.jpg";
import barChart from "../../assets/thumbnails/bar-chart.jpg";
import "./Projects.css";

export const Projects = () => (
	<section className="col-12 mx-auto" id="projects">
		<h2>My work</h2>
		<div className="row separator"/>
		<div className="row justify-content-center mt-5">
			{
				projects.map(
					(p, i) => 
					<div 
						className="project col-auto m-4 p-2 shadow position-relative"
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
										className="h-100"
										src={p.thumbnail}
									/>
								</div>
							</a>
						</div>
						<article className="proj-art mb-auto pt-2">
							<a
								href={p.appLink}
								rel="noopener noreferrer"
								target="_blank"
							>
								<h3 className="proj-title">{p.name}</h3>
							</a>
							<p className="proj-desc">{p.description}</p>
						</article>
						<div className="position-absolute w-100 start-0 bottom-0 p-2">
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
					</div>
				)
			}
		</div>
	</section>
);

const projects = [
	{
		appLink: "https://anonymous-message-board.mateo-agl.repl.co/",
		thumbnail: messageBoard,
		codeLink: "https://github.com/mateo-agl/anonymous-message-board",
		name: "Anonymous message board",
		description: "Anonymous message board to interact with anyone without exposing your identity.",
		technologies: "React, React-Router, CSS, Express, Mongoose"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/GRmaeNj",
		thumbnail: heatMap,
		codeLink: "https://codepen.io/mateoagl/pen/GRmaeNj",
		name: "Heat Map",
		description: "A map that shows global temperature from each month from 1753 to 2015 and it's variation.",
		technologies: "D3, REST API, CSS"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/LYWjPLN",
		thumbnail: pClock,
		codeLink: "https://codepen.io/mateoagl/pen/LYWjPLN",
		name: "Pomodoro Clock",
		description: "A timer that uses the pomodoro technique to help you with your productivity.",
		technologies: "React, Redux, Sass"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/gORLEyP",
		thumbnail: treeMap,
		codeLink: "https://codepen.io/mateoagl/pen/gORLEyP",
		name: "Tree Map",
		description: "Top 100 most valuable kickstarter pledges grouped by category.",
		technologies: "D3, REST API, Sass"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/QWpyrWN",
		thumbnail: calc,
		codeLink: "https://codepen.io/mateoagl/pen/QWpyrWN",
		name: "Javascript Calculator",
		description: "An standard calculator built with javascript.",
		technologies: "React, Sass"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/rNweqVw",
		thumbnail: chorMap,
		codeLink: "https://codepen.io/mateoagl/pen/rNweqVw",
		name: "Choropleth Map",
		description: "Map of the United States educational attainment by county.",
		technologies: "D3, TopoJSON, REST API, Sass"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/KKaLBKb",
		thumbnail: markdown,
		codeLink: "https://codepen.io/mateoagl/pen/KKaLBKb",
		name: "Markdown Previewer",
		description: "An app that parses and displays the markdown you write.",
		technologies: "React, CSS, Bootstrap, Marked"
	},
	{
		appLink: "https://codepen.io/mateoagl/full/oNWeYOa",
		thumbnail: barChart,
		codeLink: "https://codepen.io/mateoagl/pen/oNWeYOa",
		name: "Bar Chart",
		description: "Bar chart of the GDP of the United States per trimester from 1947 to 2015",
		technologies: "D3, REST API, CSS"
	}
];  