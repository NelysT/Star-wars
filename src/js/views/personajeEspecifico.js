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
                        src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
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
                    <div>Height: {infoCharacter.properties.height}</div>
                    <div>Mass: {infoCharacter.properties.mass}</div>
                    <div>Gender: {infoCharacter.properties.gender}</div>                     
                    <div>Hair color:{infoCharacter.properties.hair_color}</div> 
                    <div>Skin color: {infoCharacter.properties.skin_color}</div>
                </div>
                }
            </div>
        </div>
            </div>
);
};