import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return(
	<div className="text-center mt-5">
		<ul className="">
				{store.personajes.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item">
								<img className= "imgPersonajes" src= {`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt="..."></img>
								<h3>{item.name}</h3>
																					
						</li>
					);
				})}
			</ul>
	</div>
);}
