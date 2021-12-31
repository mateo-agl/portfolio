import React from "react";
import { useState } from "react";
import { Motion, spring } from "react-motion";
import js from "../assets/icons/javascript.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import mongo from "../assets/icons/mongodb.svg";
import react from "../assets/icons/react.svg";
import node from "../assets/icons/node.svg";
import express from "../assets/icons/express.svg";
import redux from "../assets/icons/redux.svg";
import d3 from "../assets/icons/d3.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import sass from "../assets/icons/sass.svg";
import git from "../assets/icons/git.svg";
import npm from "../assets/icons/npm.svg";

const skills = [
    { icon: js, name: "Javascript" },
    { icon: html, name: "HTML" },
    { icon: css, name: "CSS" },
    { icon: mongo, name: "MongoDB" },
    { icon: react, name: "React" },
    { icon: node, name: "Node" },
    { icon: express, name: "Express" },
    { icon: redux, name: "Redux" },
    { icon: d3, name: "D3" },
    { icon: bootstrap, name: "Bootstrap" },
    { icon: sass, name: "SASS" },
    { icon: git, name: "Git" },
    { icon: npm, name: "NPM" }
]

export const Skills = () => {
    const [skillsState, setSkillsState] = useState({hover: false, key: ""});
    return (
        <section id="skills" className="row py-6">
            <h2>Skills</h2><hr/>
            <div className="col mx-auto">
                <div className="card-group shadow text-center">
                    <div className="card-group">
                        <div className="card m-0 rounded-0">
                        <div className="card-body">
                            <i className="bi bi-server fs-1"/>
                            <h2 className="card-title">Back End</h2>
                            <p className="card-text">I setup and manage servers and databases. Handle data and also create RESTful APIs microservices.</p>
                        </div>
                        </div>
                        <div className="card m-0 rounded-0">
                        <div className="card-body">
                            <i className="bi bi-window fs-1"/>
                            <h2 className="card-title">Front End</h2>
                            <p className="card-text">I build website structures and present data in the form of charts, graphs, and maps. Add styles and animations, make them responsive and add interactivity.</p>
                        </div>
                        </div>
                    </div>
                    <div className="card m-0 border-top-0">
                        <div className="card-body">
                            <h2>Languages and tools</h2>
                            <ul className="row justify-content-center p-0">
                                {
                                    skills.map(
                                        (obj, i) =>
                                        <Motion style={{scale: skillsState.hover && i === skillsState.key ? spring(1.2) : spring(1)}} key={i}>
                                            {
                                                ({scale}) =>
                                                <li className="col-auto p-0 m-2">
                                                <div
                                                    className="p-2 shadow"
                                                    onMouseEnter={() => setSkillsState({hover: true, key: i})} 
                                                    onMouseLeave={() => setSkillsState({hover: false, key: ""})}
                                                    style={{transform:`scale(${scale})`, width:"80px",
                                                    height:"80px"}}>
                                                    <img src={obj.icon} alt={obj.name + " icon"} width="48px" height="48px"/>
                                                    <label className="fs-6">{obj.name}</label>
                                                </div>
                                                </li>
                                            }
                                        </Motion>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}