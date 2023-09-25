import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/personajes.css";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

export const Personajes = () => {
  const { store, actions } = useContext(Context);
  const { navigate } = useNavigate();
  
  
 
  return (
    <div>
      <h1 className="tittlePersonajes">Personajes</h1>
      <div className="row">
        {store.personajes.map((item, index) => {
         
          return (
            <div key={index} className="col">
              <div className="card">
                <img
                  className="card-img-top"
                  src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                  alt="..."
                />
                <div className="card-body d-flex justify-content-between">
                <Link to={`/personajeEspecifico/${item.uid}`}>
                  <h3>{item.name}</h3>
                </Link>
                <i className="fa-solid fa-heart me-3" onClick={() => actions.agregarFavoritos(item.name)}
                  ></i>
                </div>
                          
                   
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

