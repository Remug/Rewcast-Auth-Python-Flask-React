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
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>

			</div>
			
			
		</nav>
	);
};