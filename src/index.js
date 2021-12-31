import React from "react";
import ReactDOM from "react-dom";
import { Motion, spring } from "react-motion";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Portfolio } from "./components/Portfolio.jsx";
import { Skills } from "./components/Skills.jsx";
import { Welcome } from "./components/Welcome.jsx";
import { Footer } from "./components/Footer.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/App.scss";

const App = () => (
  <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1)}}>
    {
      style =>
        <div style={style}>
        <Navbar/>
        <main className="col-md-10 px-3 mx-auto">
          <Welcome/>
          <About/>
          <Skills/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </main>
      </div>
    }
  </Motion>
)

ReactDOM.render(<App/>, document.querySelector('#root'));