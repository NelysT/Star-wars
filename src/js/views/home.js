import React, { useContext } from "react";

import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Personajes } from "./personajes";


export const Home = () => {
	
	return(
	<div className="text-center mt-5">
		<Personajes />
	</div>
);}
