import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log (store.count);
	return (
		<nav className="navbar-expand-lg d-flex">
			<div className="container-fluid">
  				<div className="row">
  					<div className="col-4"></div>
    				<div className="col-4 imagenLogo">
						<img className="imgStarWars" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"></img>
    				</div>
    				<div className="col-4 favoritos">
						<div className="dropdown">
							<button className="btndropdown btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos {store.count}
							</button>
								<ul className="dropdown-menu dropdown-menu-dark">
									<li><a className="dropdown-item active" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider"></hr></li>
									<li><a className="dropdown-item" href="#">Separated link</a></li>
								</ul>
						</div>
				    </div>
  				</div>
			</div>
		</nav>
	);
};