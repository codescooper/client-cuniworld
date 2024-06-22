import React, { useState } from "react";
import logo from "./../logo.png";
import WeightChart from "./weightChart";
import axios from 'axios';

const RabbitDetail = ({ rabbit, onWeightUpdate }) => {
  const [newWeight, setNewWeight] = useState('');
  const [error, setError] = useState('');

  const handleWeightChange = (e) => {
    setNewWeight(e.target.value);
  };

  const handleWeightSubmit = async (e) => {
    e.preventDefault();
    if (!newWeight || isNaN(newWeight)) {
      setError('Veuillez entrer un poids valide.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/api/rabbits/${rabbit.id}/weights`, {
        date: new Date().toISOString().split('T')[0], // Format YYYY-MM-DD
        weight: newWeight
      });

      // Call the onWeightUpdate to refresh the parent component
      onWeightUpdate(response.data);

      setNewWeight('');
      setError('');
    } catch (err) {
      setError('Erreur lors de l\'enregistrement du poids.');
      console.error(err);
    }
  };

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
        <form onSubmit={handleWeightSubmit}>
          <input
            type="number"
            value={newWeight}
            onChange={handleWeightChange}
            placeholder="Nouveau poids (kg)"
          />
          <button type="submit">Ajouter poids</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
