import React from "react";
import js from "../../assets/icons/javascript.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import react from "../../assets/icons/react.svg";
import node from "../../assets/icons/node.svg";
import redux from "../../assets/icons/redux.svg";
import d3 from "../../assets/icons/d3.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import sass from "../../assets/icons/sass.svg";
import git from "../../assets/icons/git.svg";
import npm from "../../assets/icons/npm.svg";
import webpack from "../../assets/icons/webpack.svg";
import babel from "../../assets/icons/babel.svg";
import "./Skills.css";

export const Skills = () => (
	<section className="col-lg-8 col-md-10 col-sm-12 mx-auto" id="skills">
		<h2>Skills</h2>
		<div className="row separator"/>
		<div className="row justify-content-center p-1 skills-cont">
			{
				skills.map(
					(obj, i) =>
					<div
						className="col-auto d-flex flex-column m-2 skill"
						key={i}
					>
						<img alt={obj.name + " icon"} className="m-auto" height="48px" src={obj.icon} width="48px"/>
						<label className="text-center">{obj.name}</label>
					</div>
				)
			}
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
	{ icon: d3, name: "D3" },
	{ icon: bootstrap, name: "Bootstrap" },
	{ icon: sass, name: "SASS" },
	{ icon: git, name: "Git" },
	{ icon: npm, name: "NPM" },
	{ icon: webpack, name: "Webpack" },
	{ icon: babel, name: "Babel" }
];