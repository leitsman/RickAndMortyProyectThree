import axios from "axios";
import React, { useEffect, useState } from "react";

const ListItemResidents = ({ element }) => {
  const [Residents, setResidents] = useState([]);
  useEffect(() => {
    axios.get(element).then((res) => setResidents(res.data));
  }, []);
  //   console.log(Residents);
  const StatusCharacter = () => {
    return Residents.status === "Alive" ? (
      <>
        <span
          className="card--status-character"
          style={{ backgroundColor: "green" }}
        >
          {Residents.status}
        </span>
      </>
    ) : Residents.status === "Dead" ? (
      <>
        <span
          className="card--status-character"
          style={{ backgroundColor: "red" }}
        >
          {Residents.status}
        </span>
      </>
    ) : (
      <>
        <span
          className="card--status-character"
          style={{ backgroundColor: "gray" }}
        >
          {Residents.status}
        </span>
      </>
    );
  };
  return (
    <li className="content-cards">
      <img src={Residents.image} alt="results" className="card--img" />
      {StatusCharacter()}
      <div className="content--cards-details">
        <h3>{Residents.name}</h3>
        <b>RAZA</b>
        <span>{Residents.species}</span>
        <b>ORIGEN</b>
        <span>{Residents.origin?.name}</span>
        <b>APARICION EN EPISODIOS</b>
        <span>{Residents.episode?.length}</span>
      </div>
    </li>
  );
};

export default ListItemResidents;

// <span className="card--status-character">{Residents.status}</span>
// const StatusCharacter = ()=>(
//     Residents.status === 'Alive'?(
//         <>
//         <span className="card--status-character" style={{color: 'green'}}>{Residents.status}</span>
//         </>
//     ):Residents.status === 'Dead'?(
//         <>
//         <span className="card--status-character" style={{color: 'red'}}>{Residents.status}</span>
//         </>
//     ):(
//         <>
//         <span className="card--status-character" style={{color: 'gray'}}>{Residents.status}</span>
//         </>
//     )
//   )}
