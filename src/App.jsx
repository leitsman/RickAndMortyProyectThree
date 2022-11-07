import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import logo from "./assets/RickAndMorty.svg";
import adjudicador from "./assets/adjudicador.png";
import ConsumeApi from "./components/ConsumeApi";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="App">
      <Loader />
      {/* <header className="header">
        <img src={logo} alt="icon" />
        <div className="header--search-button">
          <input
            type="text"
            placeholder="Introduzca una ubicacion del 1 al 126"
            className="search--input"
          />
          <button>Search</button>
        </div>
      </header>
      <ConsumeApi /> */}
    </div>
  );
}

export default App;
