import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/personajeEspecifico.css";
import { Personajes } from "./personajes";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";

export const PersonajeEspecifico = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [infoCharacter, setInfoCharacter] = useState("") ;
 
    useEffect(()=>{
    fetch(`https://www.swapi.tech/api/people/${params.uid}`)
    .then(response => response.json())
    .then(data => {
        setInfoCharacter(data.result)
        })
    .catch(error => error)
 },[])
  console.log("variable de InfoCharacter", infoCharacter)
  return (
    <div>
        <div>{params.uid}</div>
            <div className="container">
                <div className="home">
                <Link to={"/"}>
					<span>Home</span>
				</Link>
                </div>
            <div className="row mt-3">
                <div className="col">
                    <img className="imagenPersonaje"
                        src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
                        alt=""
                    ></img>
                </div>
                <div className="caracteristicas">
                    <div className="name">{infoCharacter === "" ? "Cargando" : infoCharacter.properties.name}</div>
                    <div>Height: {infoCharacter === "" ? "Cargando" : infoCharacter.properties.height}</div>
                    <div>Mass: {infoCharacter === "" ? "Cargando" : infoCharacter.properties.mass}</div>
                    <div>Gender: {infoCharacter === "" ? "Cargando" : infoCharacter.properties.gender}</div>                     
                    <div>Hair color:{infoCharacter === "" ? "Cargando" : infoCharacter.properties.hair_color}</div> 
                    <div>Skin color: {infoCharacter === "" ? "Cargando" : infoCharacter.properties.skin_color}</div> 
                    <div>Homeworld: {infoCharacter === "" ? "Cargando" : infoCharacter.properties.homeworld}</div> 
                </div>
            </div>
        </div>
        <div className="colAbajo container text-center">
            <div className="row">
                <div className="colPeliculas me-2">
                    Peliculas 
                    <hr className="dropdown-divider"></hr>
                    <li></li>
                    <li></li>
                </div>
                <div className="colVehiculos me-2">
                    Vehiculos
                    <hr className="dropdown-divider"></hr>
                    <li></li>
                    <li></li>
                </div>
                <div className="colNaves me-2">
                    Naves
                    <hr className="dropdown-divider"></hr>
                    <li></li>
                    <li></li>
                </div>
            </div>
        </div>


    </div>
);
};