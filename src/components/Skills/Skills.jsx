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
import typescript from "../../assets/icons/typescript.svg";
import eslint from "../../assets/icons/eslint.svg";
import "./skills.styles.css";

export const Skills = () => (
	<section className="reveal col-12 mx-auto" id="tecnologías">
		<h2>Tecnologías</h2>
		<div className="row separator"/>
		<div className="grid-cont row justify-content-center p-3 border rounded">
			<ul className="skills-grid p-0 m-0">
				{
					skills.map(
						(obj, i) =>
						<li className="p-1 skill border rounded" key={i}>
							<img
								className={`d-block m-auto ${obj.class}`}
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
	{ icon: js, name: "JavaScript" },
	{ icon: typescript, name: "TypeScript", class: "sm" },
	{ icon: html, name: "HTML" },
	{ icon: css, name: "CSS" },
	{ icon: react, name: "React" },
	{ icon: node, name: "Node" },
	{ icon: redux, name: "Redux" },
	{ icon: express, name: "Express", class: "sm" },
	{ icon: mongo, name: "MongoDB" },
	{ icon: d3, name: "D3", class: "sm" },
	{ icon: bootstrap, name: "Bootstrap" },
	{ icon: sass, name: "Sass" },
	{ icon: git, name: "Git" },
	{ icon: npm, name: "NPM" },
	{ icon: webpack, name: "Webpack", class: "sm" },
	{ icon: babel, name: "Babel", class: "sm" },
	{ icon: eslint, name: "ESlint" }
];