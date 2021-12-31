import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Motion, spring } from "react-motion";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Portfolio } from "./components/Portfolio.jsx";
import { Skills } from "./components/Skills.jsx";
import { Welcome } from "./components/Welcome.jsx";
import { Footer } from "./components/Footer.jsx";
import js from "./assets/icons/javascript.svg";
import html from "./assets/icons/html.svg";
import css from "./assets/icons/css.svg";
import mongo from "./assets/icons/mongodb.svg";
import react from "./assets/icons/react.svg";
import node from "./assets/icons/node.svg";
import express from "./assets/icons/express.svg";
import redux from "./assets/icons/redux.svg";
import d3 from "./assets/icons/d3.svg";
import bootstrap from "./assets/icons/bootstrap.svg";
import sass from "./assets/icons/sass.svg";
import git from "./assets/icons/git.svg";
import npm from "./assets/icons/npm.svg";
import messageboard from "./assets/thumbnails/message-board-thumbnail.png";
import stockchecker from "./assets/thumbnails/stock-checker-thumbnail.png";
import issuetracker from "./assets/thumbnails/issue-tracker-thumbnail.png";
import library from "./assets/thumbnails/library-thumbnail.png";
import metricimpconverter from "./assets/thumbnails/metric-imperial-converter-thumbnail.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/App.scss";

const nav = ["Home", "About", "Skills", "Portfolio", "Contact"],
      skills = [
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
      ],
      apps = [
        {repl: "messageboard", thumbnail: messageboard, name: "Message Board", description: "Anonymous message board to interact with anyone without exposing yourself."},
        {repl: "stockchecker", thumbnail: stockchecker, name: "Stock Checker", description: "An app that allows you to check stock prices from a Nasdaq API, like them and compare likes between two of them."},
        {repl: "issuetracker", thumbnail: issuetracker, name: "Issue Tracker", description: "An issue tracker app that allow teams to post, get and delete issues they find at work."},
        {repl: "library", thumbnail: library, name: "Library", description: "A personal library where you can store the books you like and add comments."},
        {repl: "metricimpconverter", thumbnail: metricimpconverter, name: "Metric/Imperial converter", description: "An app that allows you to convert units from the metric system to imperial system and the other way around."},
      ],
      portfolio = apps.map(
        a => ({
          appLink: "https://" + a.repl + ".mateo-agl.repl.co",
          codeLink: "https://github.com/mateo-agl/" + a.repl,
          thumbnail: a.thumbnail,
          name: a.name,
          description: a.description
        })
      ),
      links = [
        {link:"https://www.linkedin.com/in/mateo-aguilar-058b791a8/", icon:"bi bi-linkedin"},
        {link:"https://github.com/mateo-agl", icon:"bi bi-github"},
        {link:"https://www.freecodecamp.org/mateo-aguilar", icon:"fa-brands fa-free-code-camp"},
        {link:"https://codepen.io/mateoagl", icon:"fa-brands fa-codepen"}
      ]

const App = () => {
  const [data] = useState({nav, skills, portfolio, links});
  return (
    <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1)}}>
      {
        style =>
          <div>
          <Navbar nav={data.nav} style={style}/>
          <main className="col-md-10 px-3 mx-auto">
            <Welcome links={data.links} style={style}/>
            <About/>
            <Skills icons={data.skills}/>
            <Portfolio portfolio={data.portfolio}/>
            <Contact/>
            <Footer/>
          </main>
        </div>
      }
    </Motion>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'));