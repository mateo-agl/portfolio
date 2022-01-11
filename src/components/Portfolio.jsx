import React from "react";
import { useState } from "react";
import { Motion, spring } from "react-motion";
import pClock from "../assets/thumbnails/pomodoro-clock-thumbnail.png";
import treeMap from "../assets/thumbnails/tree-map-thumbnail.png";
import calc from "../assets/thumbnails/javascript-calculator-thumbnail.png";
import chorMap from "../assets/thumbnails/choropleth-map-thumbnail.png";
import heatMap from "../assets/thumbnails/heat-map-thumbnail.png";
import drum from "../assets/thumbnails/drum-machine-thumbnail.png";
import markdown from "../assets/thumbnails/markdown-previewer-thumbnail.png";
import barChart from "../assets/thumbnails/bar-chart-thumbnail.png";
import scttrPlot from "../assets/thumbnails/scatter-plot-thumbnail.png";

const portfolio = [
  {
    appLink: "https://codepen.io/mateoagl/full/LYWjPLN",
    thumbnail: pClock,
    codeLink: "https://codepen.io/mateoagl/pen/LYWjPLN",
    name: "Pomodoro Clock",
    description: "A timer that uses the pomodoro technique to help you with your productivity.",
    technologies: "React, Redux, Sass, HTML, Javascript"
  },
  {
    appLink: "https://codepen.io/mateoagl/full/gORLEyP",
    thumbnail: treeMap,
    codeLink: "https://codepen.io/mateoagl/pen/gORLEyP",
    name: "Tree Map",
    description: "Top 100 most valuable kickstarter pledges grouped by category.",
    technologies: "D3, Sass, HTML, Javascript"
  },
  {
    appLink: "https://codepen.io/mateoagl/full/QWpyrWN",
    thumbnail: calc,
    codeLink: "https://codepen.io/mateoagl/pen/QWpyrWN",
    name: "Javascript Calculator",
    description: "An standard calculator buit with javascript.",
    technologies: "React, Sass, HTML, Javascript"
  },
  {
    appLink: "https://codepen.io/mateoagl/full/rNweqVw",
    thumbnail: chorMap,
    codeLink: "https://codepen.io/mateoagl/pen/rNweqVw",
    name: "Choropleth Map",
    description: "Map of the United States educational attainment by county.",
    technologies: "D3, TopoJSON, Sass, HTML, Javascript"
  },
  {
    appLink: "https://codepen.io/mateoagl/full/GRmaeNj",
    thumbnail: heatMap,
    codeLink: "https://codepen.io/mateoagl/pen/GRmaeNj",
    name: "Heat Map",
    description: "A map that shows global temperature from each month from 1753 to 2015 and it's variation.",
    technologies: "D3, CSS, HTML, Javascript"
  },
  {
    appLink: "https://codepen.io/mateoagl/full/MWpgBzZ",
    thumbnail: drum,
    codeLink: "https://codepen.io/mateoagl/pen/MWpgBzZ",
    name: "Drum Machine",
    description: "A javascript drum machine.",
    technologies: "React, CSS, Howler, HTML, Javascript"
  },
  {
    appLink: "https://codepen.io/mateoagl/full/KKaLBKb",
    thumbnail: markdown,
    codeLink: "https://codepen.io/mateoagl/pen/KKaLBKb",
    name: "Markdown Previewer",
    description: "An app that parses and displays the markdown you write.",
    technologies: "React, CSS, Markdown, HTML, Javascript"
  },
  {
    appLink: "https://codepen.io/mateoagl/full/oNWeYOa",
    thumbnail: barChart,
    codeLink: "https://codepen.io/mateoagl/pen/oNWeYOa",
    name: "Bar Chart",
    description: "United States GDP each trimester from 1947 to 2015.",
    technologies: "D3, CSS, HTML, Javascript"
  },
  {
    appLink: "https://codepen.io/mateoagl/full/MWmrmRg",
    thumbnail: scttrPlot,
    codeLink: "https://codepen.io/mateoagl/pen/MWmrmRg",
    name: "Scatter Plot",
    description: "Doping allegations in professional bycicle racing.",
    technologies: "D3, CSS, HTML, Javascript"
  },
]

export const Portfolio = () => {
    const [portState, setPortState] = useState({hover: false, key: ""});
    return (
      <section id="portfolio" className="row py-6">
        <h2>My recent work</h2><hr/>
        <div className="col-10 mx-auto shadow projects border">
          {
            portfolio.map(
                (p, i) => 
                <article 
                  className="row position-relative p-2 border-bottom"
                  key={i}>
                  <Motion
                    defaultStyle={{opacity: 0.1}} 
                    style={{opacity: portState.hover && i === portState.key ? spring(1) : spring(0.1)}}>
                    {
                      style =>
                      <div
                        className="col-xl-6 col-lg-12 p-0 mx-auto position-relative"
                        onMouseEnter={() => setPortState({hover: true, key: i})} 
                        onMouseLeave={() => setPortState({hover: false, key: ""})}>
                        <div 
                          className="d-flex w-100 h-100 thmbnail-hover position-absolute align-items-center" 
                          style={style}>
                            <a 
                              className="btn btn-project px-3 rounded-pill ms-auto me-5 fs-4" 
                              href={p.appLink}
                              target="_blank"
                              rel="noreferrer">
                              Live
                            </a>
                            <a 
                              className="btn btn-project px-3 rounded-pill me-auto fs-4"
                              href={p.codeLink}
                              target="_blank"
                              rel="noreferrer">
                              Code
                            </a>
                        </div>
                        <img src={p.thumbnail} className="img-fluid border" alt={p.name + " thumbnail"}/>
                      </div>
                    }
                  </Motion>
                  <div className="col-12 col-md position-relative p-3">
                    <h3>{p.name}</h3>
                    <p className="fs-5">{p.description}</p>
                    <p className="technologies fs-5">Technologies used: {p.technologies}</p>
                  </div>
              </article>
            )
          }
        </div>
      </section>
    )
  }