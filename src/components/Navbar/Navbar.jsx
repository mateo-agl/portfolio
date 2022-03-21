import React from "react";
import "./Navbar.css";

export const Navbar = () => (
	<nav className="navbar navbar-expand-lg fixed-top p-0">	
		<div className="col-11 d-flex mx-auto">
			<button 
				aria-controls="offcanvasNavbar"
				className="menu-btn navbar-toggler my-4 ms-auto"
				data-bs-target="#offcanvasNavbar"
				data-bs-toggle="offcanvas"
				type="button"
			>
				<div className="hamburger"/>
			</button>
			<div
				aria-labelledby="offcanvasNavbarLabel"
				className="offcanvas offcanvas-end border-0"
				id="offcanvasNavbar"
				tabIndex="-1"
			>
				<div className="offcanvas-header px-4">
					<button
						aria-label="Close"
						className="menu-btn navbar-toggler my-2 ms-auto me-3"
						data-bs-dismiss="offcanvas"
						type="button"
					>
						<div className="close"/>
					</button>
				</div>
				<div className="offcanvas-body p-0">
					<ul className="navbar-nav justify-content-end flex-grow-1">
						{
							nav.map(
								(n, i) =>
								<li className="nav-item text-center" key={i}>
									<a 
										className="nav-btn"
										href={"#" + n.toLowerCase()}
										key={i}
									>
										{n}
									</a>
								</li>
							)
						}
					</ul>
				</div>
			</div>
		</div>
	</nav>
);

const nav = ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"];