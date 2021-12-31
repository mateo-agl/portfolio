import React from "react";
import { useState } from "react";
import { Motion, spring } from "react-motion";
import messageboard from "../assets/thumbnails/message-board-thumbnail.png";
import stockchecker from "../assets/thumbnails/stock-checker-thumbnail.png";
import issuetracker from "../assets/thumbnails/issue-tracker-thumbnail.png";
import library from "../assets/thumbnails/library-thumbnail.png";
import metricimpconverter from "../assets/thumbnails/metric-imperial-converter-thumbnail.png";

const portfolio = [
  {repl: "https://messageboard.mateo-agl.repl.co",
  thumbnail: messageboard,
  codeLink: "https://github.com/mateo-agl/messageboard",
  name: "Message Board",
  description: "Anonymous message board to interact with anyone without exposing yourself."},
  {repl: "https://stockchecker.mateo-agl.repl.co",
  thumbnail: stockchecker,
  codeLink: "https://github.com/mateo-agl/stockchecker",
  name: "Stock Checker",
  description: "An app that allows you to check stock prices from a Nasdaq API, like them and compare likes between two of them."},
  {repl: "https://issuetracker.mateo-agl.repl.co",
  thumbnail: issuetracker,
  codeLink: "https://github.com/mateo-agl/issuetracker",
  name: "Issue Tracker",
  description: "An issue tracker app that allow teams to post, get and delete issues they find at work."},
  {repl: "https://library.mateo-agl.repl.co",
  thumbnail: library,
  codeLink: "https://github.com/mateo-agl/library",
  name: "Library",
  description: "A personal library where you can store the books you like and add comments."},
  {repl: "https://metricimpconverter.mateo-agl.repl.co",
  thumbnail: metricimpconverter,
  codeLink: "https://github.com/mateo-agl/metricimpconverter",
  name: "Metric/Imperial converter",
  description: "An app that allows you to convert units from the metric system to imperial system and the other way around."},
]

export const Portfolio = () => {
    const [portState, setPortState] = useState({hover: false, key: ""});
    return (
      <section id="portfolio" className="row py-6">
        <h2>My recent work</h2><hr/>
        <div className="col mx-auto border shadow projects">
          {
            portfolio.map(
                (p, i) => 
                <article 
                  className="row p-2 position-relative border-bottom"
                  key={i}>
                  <Motion
                    defaultStyle={{opacity: 0.1}} 
                    style={{opacity: portState.hover && i === portState.key ? spring(1) : spring(0.1)}}>
                    {
                      style =>
                      <div
                        className="col-lg-6 col-md-12 p-0 mx-auto position-relative border"
                        onMouseEnter={() => setPortState({hover: true, key: i})} 
                        onMouseLeave={() => setPortState({hover: false, key: ""})}>
                        <div 
                          className="d-flex w-100 h-100 thmbnail-hover position-absolute align-items-center" 
                          style={style}>
                            <a 
                              className="btn btn-project border rounded-0 ms-auto me-5 fs-4" 
                              href={p.appLink}
                              target="_blank"
                              rel="noreferrer">
                              Live
                            </a>
                            <a 
                              className="btn btn-project border rounded-0 me-auto fs-4"
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
                  <div className="col-12 col-md position-relative">
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                  </div>
              </article>
            )
          }
        </div>
      </section>
    )
  }