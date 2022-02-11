import React, { useState } from "react";
import { Motion, spring } from "react-motion";
import pClock from "../assets/thumbnails/pomodoro-clock-thumbnail.jpg";
import treeMap from "../assets/thumbnails/tree-map-thumbnail.jpg";
import calc from "../assets/thumbnails/javascript-calculator-thumbnail.jpg";
import chorMap from "../assets/thumbnails/choropleth-map-thumbnail.jpg";
import heatMap from "../assets/thumbnails/heat-map-thumbnail.jpg";
import drum from "../assets/thumbnails/drum-machine-thumbnail.jpg";
import markdown from "../assets/thumbnails/markdown-previewer-thumbnail.jpg";
import barChart from "../assets/thumbnails/bar-chart-thumbnail.jpg";
import rQuote from "../assets/thumbnails/random-quote-machine-thumbnail.jpg"
import scttrPlot from "../assets/thumbnails/scatter-plot-thumbnail.jpg";
import thisPortfolio from "../assets/thumbnails/this-portfolio-thumbnail.jpg";

export const Portfolio = () => {
  const [portState, setPortState] = useState({hover: false, key: ""});
  return (
    <section id="portfolio" className="row py-6">
      <h2>My work</h2><hr/>
      <div className="col-xxl-8 col-xl-10 mx-auto shadow border">
        {
          portfolio.map(
            (p, i) => 
            <article 
              className="row position-relative projects"
              key={i}>
                <Motion
                  defaultStyle={{opacity: 0}} 
                  style={{opacity: portState.hover && i === portState.key ? spring(0.9) : spring(0)}}>
                  {
                    style =>
                    <div
                      className="col-lg-6 p-0 position-relative border"
                      onMouseEnter={() => setPortState({hover: true, key: i})} 
                      onMouseLeave={() => setPortState({hover: false, key: ""})}>
                      <div 
                        className="thumbnail d-flex w-100 h-100 position-absolute align-items-center" 
                        style={style}>
                          <a 
                            className={p.name !== "This portfolio" ?
                            "btn btn-project px-3 rounded-pill ms-auto me-5 fs-2" :
                            "d-none"} 
                            href={p.appLink}
                            target="_blank"
                            rel="noreferrer">
                            Live
                          </a>
                          <a 
                            className={p.name !== "This portfolio" ?
                            "btn btn-project px-3 rounded-pill me-auto fs-2" :
                            "btn btn-project px-3 rounded-pill mx-auto fs-2"}
                            href={p.codeLink}
                            target="_blank"
                            rel="noreferrer">
                            Code
                          </a>
                      </div>
                      <img src={p.thumbnail} className="img-fluid" alt={p.name + " thumbnail"}/>
                    </div>
                  }
                </Motion>
                <div className="col-lg-6 position-relative p-3 border">
                  <h3>{p.name}</h3>
                  <p className="fs-5">{p.description}</p>
                  <p className="technologies m-0 fs-5">Technologies used: {p.technologies}</p>
                </div>
            </article>
          )
        }
      </div>
    </section>
  )
}
const portfolio = [
  {
    thumbnail: thisPortfolio,
    codeLink: "https://github.com/mateo-agl/portfolio",
    name: "This portfolio",
    description: "You can see this portfolio's code by clicking the button on the image.",
    technologies: "React, React Motion, Bootstrap, Sass, Email-js"
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
    appLink: "https://codepen.io/mateoagl/full/GRmaeNj",
    thumbnail: heatMap,
    codeLink: "https://codepen.io/mateoagl/pen/GRmaeNj",
    name: "Heat Map",
    description: "A map that shows global temperature from each month from 1753 to 2015 and it's variation.",
    technologies: "D3, REST API, CSS"
  },
  {
    appLink: "https://codepen.io/mateoagl/full/MWpgBzZ",
    thumbnail: drum,
    codeLink: "https://codepen.io/mateoagl/pen/MWpgBzZ",
    name: "Drum Machine",
    description: "A javascript drum machine.",
    technologies: "React, CSS, Howler"
  },
  {
    appLink: "https://codepen.io/mateoagl/full/oNWeYOa",
    thumbnail: barChart,
    codeLink: "https://codepen.io/mateoagl/pen/oNWeYOa",
    name: "Bar Chart",
    description: "United States GDP each trimester from 1947 to 2015.",
    technologies: "D3, REST API, CSS"
  },
  {
    appLink: "https://codepen.io/mateoagl/full/mdRgWgP",
    thumbnail: rQuote,
    codeLink: "https://codepen.io/mateoagl/pen/mdRgWgP",
    name: "Random Quote Machine",
    description: "An app that displays famous random quotes.",
    technologies: "React, Bootstrap, CSS"
  },
  {
    appLink: "https://codepen.io/mateoagl/full/MWmrmRg",
    thumbnail: scttrPlot,
    codeLink: "https://codepen.io/mateoagl/pen/MWmrmRg",
    name: "Scatter Plot",
    description: "Doping allegations in professional bycicle racing.",
    technologies: "D3, REST API, CSS"
  },
]  