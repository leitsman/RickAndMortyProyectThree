import React from "react";
import LoaderGif from "../assets/rickAndMorty.gif";

const Loader = () => {
  return (
    <div className="Content--Loader">
      <img src={LoaderGif} alt="loader" className="Loader--img" />
    </div>
  );
};

export default Loader;
