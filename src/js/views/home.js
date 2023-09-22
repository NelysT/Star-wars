import React, { useContext } from "react";

import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Personajes } from "./personajes";
import { Vehiculos } from "./vehiculos";
import { Planetas } from "./planetas";


export const Home = () => {
	
	return(
	<div className="text-center mt-5">
		<Personajes />
		<Vehiculos />
		<Planetas />
	</div>
);}
