import React from "react";
import avatar from "../assets/avatar/avatar.svg";
import resume from "../assets/Mateo Aguilar Resume.pdf";

export const Welcome = () => (
  <section id="home" className="row py-6 justify-content-center align-items-center">
    <div className="col-xl-4 col-sm-6">
      <img className="w-100 avatar" src={avatar} alt="my avatar"/>
    </div>
    <div className="col-xl-8 col-sm-12">
      <h1 className="mb-5 fs-0">Welcome to my page, I'm Mateo</h1>
      <h4>A Front End Web Developer living in Argentina, passionate about creating interactive websites and looking for new challenges!</h4>
      <div className="float-end mt-5 d-flex align-items-center">
        <a className="btn btn-dark fs-5 mx-3" href={resume} target="_blank" rel="noreferrer">
          Resume
        </a>
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
);

const links = [
  {link:"https://www.linkedin.com/in/mateo-aguilar-058b791a8/", icon:"bi bi-linkedin"},
  {link:"https://github.com/mateo-agl", icon:"bi bi-github"}
]
