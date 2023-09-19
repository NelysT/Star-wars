import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-black bg-black mb-3">
			<div className="d-flex">
				<img className="imgStarWars" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"></img>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
					<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
					<li><hr className="dropdown-divider"></hr></li>
					<li><a className="dropdown-item" href="#">Separated link</a></li>
					</ul>
				</li>
			</div>
		</nav>
	);
};
