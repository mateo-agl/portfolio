import React from "react";
import { useState } from "react";
import { Motion, spring } from "react-motion";

export const Skills = props => {
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
                                    props.icons.map(
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