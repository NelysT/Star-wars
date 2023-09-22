import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/vehiculos.css";

export const Vehiculos = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
       <h1 className="tittleVehiculos">Vehículos</h1>
      <div className="row">
        {store.vehiculos.map((item, index) => {
        
            return (
              <div key={index} className="col-md-2 col-12">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
                    alt="..."
                  />
                  <div className="card-body">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};