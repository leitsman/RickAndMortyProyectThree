import React from "react";
import LoaderGif from "../assets/rickAndMorty.gif";

const Loader = () => {
  return (
    <div className="Content--Loader">
      <img src={LoaderGif} alt="loader" className="Loader--img" />
      <h2>Loading...</h2>
    </div>
  );
};

export default Loader;
