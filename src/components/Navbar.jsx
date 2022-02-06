import React from "react";

export const Navbar = () => (
    <header className="w-100 position-fixed shadow text-center">
        <nav className="navbar navbar-expand-lg py-0 px-4">
        <button 
            className="navbar-toggler border rounded-0 my-2 ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="bi bi-list fs-2"/>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
            {
                nav.map(
                (n, i) =>
                <li className="nav-item" key={i}>
                    <a 
                    href={"#" + n.toLowerCase()}
                    className="nav-link fs-5 mx-1"
                    key={i}>
                        {n}
                    </a>
                </li>
                )
                }
            </ul>
        </div>
        </nav>
    </header>
);

const nav = ["Home", "About", "Skills", "Portfolio", "Contact"];