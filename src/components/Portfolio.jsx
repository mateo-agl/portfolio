import React from "react";
import { useState } from "react";
import { Motion, spring } from "react-motion";

export const Portfolio = props => {
    const [portState, setPortState] = useState({hover: false, key: ""});
    return (
      <section id="portfolio" className="row py-6">
        <h2>My recent work</h2><hr/>
        <div className="col mx-auto border shadow projects">
          {
            props.portfolio.map(
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