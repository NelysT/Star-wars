import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";


import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";

export const PlanetaEspecifico = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [infoCharacter, setInfoCharacter] = useState("") ;
 
    useEffect(()=>{
    fetch(`https://www.swapi.tech/api/planets/${params.uid}`)
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
                    <img className="imagenPersonaje"
                        src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src="https://starwars-visualguide.com/assets/img/planets/19.jpg";
                        }}
                        alt="..."
                    ></img>
                </div>
                {infoCharacter === "" ? 
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                :
                <div className="caracteristicas">
                    <div className="name">{infoCharacter.properties.name}</div>
                    <div>Diameter{infoCharacter.properties.diameter}</div>
                    <div>Rotation Period{infoCharacter.properties.rotation_period}</div>
                    <div>Orbital Period{infoCharacter.properties.orbital_period}</div>
                    <div>Gravity{infoCharacter.properties.gravity}</div>
                    <div>Population{infoCharacter.properties.population}</div>
                    <div>Climate{infoCharacter.properties.climate}</div>
                    <div>Terrain{infoCharacter.properties.terrain}</div>
                    <div>Surface Water{infoCharacter.properties.surface_water}</div>
                    <div>Created{infoCharacter.properties.created}</div>
                    <div>Edited{infoCharacter.properties.edited}</div>
                </div>
                }
            </div>
        </div>
            </div>
);
};

     
     