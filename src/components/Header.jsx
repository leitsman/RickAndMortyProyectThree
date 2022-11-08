import React, { useState } from "react";
import logo from "../assets/RickAndMorty.svg";

const Header = ({ Search, setSearch, SearchLocation }) => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="icon" />
        <div className="header--search-button">
          <input
            type="text"
            placeholder="Introduzca una ubicacion del 1 al 126"
            className="search--input"
            onChange={(e) => setSearch(e.target.value)}
            value={Search}
          />
          <button onClick={SearchLocation}>Search</button>
        </div>
      </header>
    </>
  );
};

export default Header;
