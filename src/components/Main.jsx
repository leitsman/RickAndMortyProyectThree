import React from "react";
import ListItemResidents from "./ListItemResidents";

const Main = ({ RickApi }) => {
  return (
    <>
      <main className="main">
        <div className="content--details-location">
          <span>
            <b>Nombre: </b>
            {RickApi.name}
          </span>
          <span>
            <b>Tipo: </b>
            {RickApi.type}
          </span>
          <span>
            <b>Dimension: </b>
            {RickApi.dimension === "" ? "Sin Informacion" : RickApi.dimension}
          </span>
          <span>
            <b>Poblacion: </b>
            {RickApi.residents?.length === 0
              ? "Sin poblacion"
              : RickApi.residents?.length}
          </span>
        </div>
        {/* =========== CARDS =============== */}
        <ul className="Container-list--ul">
          {RickApi.residents?.map((element) => (
            <ListItemResidents element={element} key={element} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default Main;
