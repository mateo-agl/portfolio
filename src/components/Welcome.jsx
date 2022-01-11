import React from "react";
import avatar from "../assets/avatar/avatar.svg";

const links = [
  {link:"https://www.linkedin.com/in/mateo-aguilar-058b791a8/", icon:"bi bi-linkedin"},
  {link:"https://github.com/mateo-agl", icon:"bi bi-github"},
  {link:"https://www.freecodecamp.org/mateo-aguilar", icon:"fa-brands fa-free-code-camp"},
  {link:"https://codepen.io/mateoagl", icon:"fa-brands fa-codepen"}
]

export const Welcome = () => (
  <section id="home" className="row py-6 align-items-center">
    <div className="col-xl-4 d-flex justify-content-center">
      <img className="w-100 avatar" src={avatar} alt="my avatar"/>
    </div>
    <div className="col-auto"/>
    <div className="col">
      <h1 className="mb-5 fs-0">Welcome to my page, I'm Mateo</h1>
      <h4>A Front End Web Developer living in Argentina, passionate about creating interactive websites and looking for new challenges!.</h4>
      <div className="float-end mt-5">
        {
          links.map(
            (b, i) => 
            <a className="links" href={b.link} target="_blank" rel="noreferrer" key={i}>
              <i className={b.icon + " fs-1 mx-3"}/>
            </a>
          )
        }
      </div>
    </div>
  </section>
)