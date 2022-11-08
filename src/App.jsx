import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ConsumeApi from "./components/ConsumeApi";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <ConsumeApi />
    </div>
  );
}

export default App;
