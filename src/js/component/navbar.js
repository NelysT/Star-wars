import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<nav className="navbar-expand-lg d-flex">
			<div className="container-fluid">
  				<div className="row header">
  					<div className="col imagenLogo">
						<img className="flicker-1" id="logotipo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Star_wars_logo_alternate.svg/694px-Star_wars_logo_alternate.svg.png"></img>
    				</div>
    				<div className="col favoritos">
						<div className="dropdown">
							<button className="btndropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos {store.favoritos.length} 
							</button>
								<ul className="dropdown-menu dropdown-menu-dark">
								{store.favoritos.map((item, index) => {
									return (
										<li
											key={index}>
												<p>{item}</p>
												<i class="fa-solid fa-trash" onClick={() => actions.eliminarfavoritos(index)}></i>
																							
											</li>
												);
									})}
								</ul>
						</div>
				    </div>
  				</div>
			</div>
		</nav>
	);
};