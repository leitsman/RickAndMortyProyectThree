import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import UseBoolean from "../hooks/useBoolean";
import Loader from "./Loader";
import SearchLocate from "./SearchLocate";

const ConsumeApi = () => {
  // ================Boolean hook ==============
  const { Boolean: StateLoader, setBoolean: setStateLoader } =
    UseBoolean(false);
  // ================ request Api ===============
  const [RickApi, setRickApi] = useState();
  // ================ Number id ===============
  let randomId = Math.floor(Math.random() * 125) + 1;
  const [Number, setNumber] = useState(randomId);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${Number}`)
      .then((res) => {
        setRickApi(res.data);
        setStateLoader(true);
      });
  }, [Number]);
  return (
    <>
      {!StateLoader && <Loader />}
      {StateLoader && <SearchLocate RickApi={RickApi} setNumber={setNumber} />}
    </>
  );
};

export default ConsumeApi;
