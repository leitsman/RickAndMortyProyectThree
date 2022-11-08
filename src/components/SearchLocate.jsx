import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";

const SearchLocate = ({ RickApi, setNumber }) => {
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
