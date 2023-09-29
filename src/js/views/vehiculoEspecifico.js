import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";

export const VehiculoEspecifico = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [infoCharacter, setInfoCharacter] = useState("") ;
 
    useEffect(()=>{
    fetch(`https://www.swapi.tech/api/vehicles/${params.uid}`)
    .then(response => response.json())
    .then(data => {
        setInfoCharacter(data.result)
        })
    .catch(error => error)
 },[])
  console.log("variable de InfoCharacter", infoCharacter)

  function cargarData(categoria) {
 let x = infoCharacter === "" ? "Cargando" : infoCharacter.properties.categoria
 return x
  }  
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
                    <img className="imagenVehiculo"
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`}
                        alt=""
                    ></img>
                </div>
                {infoCharacter === "" ? 
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                :
                <div className="caracteristicas">
                    <div className="name">{infoCharacter.properties.name}</div>
                    <div>Model: {infoCharacter.properties.model}</div>
                    <div>Vehicle Class: {infoCharacter.properties.vehicle_class}</div>
                    <div>Manufacturer: {infoCharacter.properties.manufacturer}</div>
                    <div>Cost in Credit: {infoCharacter.properties.cost_in_credits}</div>                     
                    <div>Length:{infoCharacter.properties.length}</div> 
                    <div>Crew: {infoCharacter.properties.crew}</div>
                    <div>Passengers: {infoCharacter.properties.passengers}</div>
                    <div>Max Atmosphering Speed: {infoCharacter.properties.max_atmosphering_speed}</div>                     
                    <div>Cargo Capacity:{infoCharacter.properties.cargo_capacity}</div> 
                    <div>Consumables: {infoCharacter.properties.consumables}</div>
                    <div>Created:{infoCharacter.properties.created}</div> 
                    <div>Edited: {infoCharacter.properties.edited}</div>
                    
                </div>
                }
            </div>
        </div>
            </div>
);
};


     
      