import React from "react";
import logo from "./../logo.png";
import WeightChart from "./weightChart";

const RabbitDetail = ({ rabbit }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <div className="identification">
        <h2>Détails du Lapin</h2>
        <img src={logo} alt={rabbit.name} />
        <p>
          <strong>ID:</strong> {rabbit.id}
        </p>
        <p>
          <strong>Nom:</strong> {rabbit.name}
        </p>
        <p>
          <strong>Couleur:</strong> {rabbit.color}
        </p>
        <p>
          <strong>Genre:</strong> {rabbit.gender}
        </p>
        <p>
          <strong>Date de naissance:</strong> {rabbit.birth_date}
        </p>
      </div>
      <div className="prise-de-poids">
        <h2>Prise de poids</h2>
        <WeightChart weightData={rabbit.weightData} />
      </div>
      <div className="alimentation">
        <h2>Alimentation</h2>
        <p>
          <strong>Alimentation:</strong> {rabbit.food}
        </p>
      </div>
    </div>
  );
};

export default RabbitDetail;
