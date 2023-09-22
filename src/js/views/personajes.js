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
          // Renderizar solo los primeros 10 personajes (5 por fila)
          return (
            <div key={index} className="col-md-2 col-12">
              <div className="card">
                <img
                  className="card-img-top"
                  src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                  alt="..."
                />
                <div className="card-body">
                  <h3>{item.name} {store.count}</h3>
                </div>
                <div className="d-flex justify-content-between">
                
                  <Link to={`/personajeEspecifico/${item.uid}`}>
                    <span className="btnLeerMas btn-lg" href="#" role="button">
                      Leer mas
                    </span>
                  </Link>
                  <i className="fa-solid fa-heart me-3" onClick={() => actions.contarClickFavoritos()}></i>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

