import React from "react";
import logo from "./../logo.png";

const RabbitCard = ({ rabbit, onClick }) => {
  return (
    <div
      className="lapins-card"
      onClick={onClick}
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
      }}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <h3>{rabbit.name}</h3>
      {/* <p>{rabbit.breed} , {rabbit.color} née le {rabbit.birth_date}</p> */}
    </div>
  );
};

export default RabbitCard;
