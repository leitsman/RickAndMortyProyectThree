import React, { useEffect, useState } from "react";
import UseBoolean from "../hooks/UseBoolean";
import Header from "./Header";
import Main from "./Main";

const SearchLocate = ({ RickApi, setNumber }) => {
  // ================== STATE BOOLEAN =============
  const { Boolean: FirstRender, setBoolean: setFirstRender } = UseBoolean();
  // ================== CONNECT SEARCH =============
  const [Search, setSearch] = useState("");
  const SearchLocation = () => {
    setNumber(Search);
  };
  return (
    <>
      <Header
        Search={Search}
        setSearch={setSearch}
        SearchLocation={SearchLocation}
      />
      {<Main RickApi={RickApi} />}
    </>
  );
};

export default SearchLocate;
