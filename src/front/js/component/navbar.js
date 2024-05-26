import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="">
				<Link to="/">
					<span className="navbar-brand mx-5 my-3 h1">
					<img
					src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG43.png"
					alt="logo"
					width="25%"
					height="25%"
					/>
					</span>
        		</Link>
			</div>
			<div className="pe-5 ">
				<Link to="/login">
					<i class="fa-solid fa-jedi "></i> LOGIN
				</Link>
			</div>
			
		</nav>
	);
};