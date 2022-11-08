import React, { useState } from "react";

const UseBoolean = (State) => {
  const [Boolean, setBoolean] = useState(State);
  return { Boolean, setBoolean };
};

export default UseBoolean;
