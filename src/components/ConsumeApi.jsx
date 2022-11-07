import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const ConsumeApi = () => {
  const [RickApi, setRickApi] = useState();
  useEffect(() => {
    let randomId = Math.floor(Math.random() * 125) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setRickApi(res.data));
  }, []);
  console.log(RickApi);
  // ================ LOADING/HEADER ===================
  // const SwitchLoader = () => {
  //   RickApi === undefined ? <frameElement/> : console.log(false);
  // };
  // return <div>{SwitchLoader()}</div>;
};

export default ConsumeApi;
