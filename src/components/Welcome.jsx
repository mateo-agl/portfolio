import React from "react";

export const Welcome = props => (
  <section id="home" className="row vh-100 align-items-center">
    <div className="col">
      <h1 className="fs-0">Welcome to my page, I'm Mateo</h1>
      <h3>A Full Stack Web Developer.</h3>
      <div className="float-end mt-5">
        {
          props.links.map(
            (b, i) => 
            <a className="links" href={b.link} target="_blank" rel="noreferrer" key={i}>
              <i className={b.icon + " fs-2 mx-3"}/>
            </a>
          )
        }
      </div>
    </div>
  </section>
)