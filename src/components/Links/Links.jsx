import React from "react";
import { ReactComponent as Codepen } from "../../assets/icons/codepen.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import "./Links.css";

export const Links = () => (
	<div className="links">
		{
			links.map(
				(b, i) => 
					<a
						className="icon"
						href={b.link}
						key={i}
						rel="noopener noreferrer"
						target="_blank"
					>
						<b.icon/>
					</a>
			)
		}
	</div>
);

const links = [
	{link:"https://www.linkedin.com/in/mateo-aguilar-058b791a8/", icon: Linkedin},
	{link:"https://github.com/mateo-agl", icon: Github},
	{link:"https://codepen.io/your-work", icon: Codepen}
];