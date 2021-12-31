import React from "react";

const links = [
  {link:"https://www.linkedin.com/in/mateo-aguilar-058b791a8/", icon:"bi bi-linkedin"},
  {link:"https://github.com/mateo-agl", icon:"bi bi-github"},
  {link:"https://www.freecodecamp.org/mateo-aguilar", icon:"fa-brands fa-free-code-camp"},
  {link:"https://codepen.io/mateoagl", icon:"fa-brands fa-codepen"}
]

export const Welcome = () => (
  <section id="home" className="row vh-100 align-items-center">
    <div className="col">
      <h1 className="fs-0">Welcome to my page, I'm Mateo</h1>
      <h3>A Full Stack Web Developer.</h3>
      <div className="float-end mt-5">
        {
          links.map(
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