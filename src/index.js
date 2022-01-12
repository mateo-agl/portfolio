import React from "react";
import ReactDOM from "react-dom";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Portfolio } from "./components/Portfolio.jsx";
import { Skills } from "./components/Skills.jsx";
import { Welcome } from "./components/Welcome.jsx";
import { Footer } from "./components/Footer.jsx";
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.scss";

const App = () => (
  <div>
    <Navbar/>
    <main className="col-md-9 px-3 mx-auto">
      <Welcome/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  </div>
);

ReactDOM.render(<App/>, document.querySelector('#root'));