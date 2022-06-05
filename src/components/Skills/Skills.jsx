import React from "react";
import js from "../../assets/icons/javascript.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import react from "../../assets/icons/react.svg";
import node from "../../assets/icons/node.svg";
import redux from "../../assets/icons/redux.svg";
import d3 from "../../assets/icons/d3.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import git from "../../assets/icons/git.svg";
import npm from "../../assets/icons/npm.svg";
import webpack from "../../assets/icons/webpack.svg";
import babel from "../../assets/icons/babel.svg";
import sass from "../../assets/icons/sass.svg";
import express from "../../assets/icons/express.svg";
import mongo from "../../assets/icons/mongodb.svg";
import "./Skills.css";

export const Skills = () => (
	<section
		className="reveal col-lg-7 col-md-10 col-sm-12 mx-auto"
		id="tecnologías"
	>
		<h2>Tecnologías</h2>
		<div className="row separator"/>
		<div className="skills-cont row justify-content-center p-3">
			<ul className="skills-grid p-0 m-0">
				{
					skills.map(
						(obj, i) =>
						<li
							className="p-1 skill"
							key={i}
						>
							<img
								className="d-block m-auto"
								src={obj.icon}
								alt={obj.name + " icon"}
							/>
							<label className="d-block text-center">
								{obj.name}
							</label>
						</li>
					)
				}
			</ul>
		</div>
	</section>
);

const skills = [
	{ icon: js, name: "Javascript" },
	{ icon: html, name: "HTML" },
	{ icon: css, name: "CSS" },
	{ icon: react, name: "React" },
	{ icon: node, name: "Node" },
	{ icon: redux, name: "Redux" },
	{ icon: express, name: "Express" },
	{ icon: mongo, name: "MongoDB" },
	{ icon: d3, name: "D3" },
	{ icon: bootstrap, name: "Bootstrap" },
	{ icon: sass, name: "Sass" },
	{ icon: git, name: "Git" },
	{ icon: npm, name: "NPM" },
	{ icon: webpack, name: "Webpack" },
	{ icon: babel, name: "Babel" }
];