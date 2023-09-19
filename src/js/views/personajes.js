import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/personajes.css";

export const Personajes = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="row">
        {store.personajes.map((item) => {
          // Renderizar solo los primeros 10 personajes (5 por fila)
            return (
              <div key={item.uid} className="col-md-2 col-12">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
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
export default Personajes;
