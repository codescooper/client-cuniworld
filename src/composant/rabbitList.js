import React, { useState, useEffect } from "react";
import axios from "axios";
import RabbitCard from "./rabbitCard";
import RabbitDetail from "./rabbitDetail";

const RabbitList = () => {
  const [rabbits, setRabbits] = useState([]);
  const [selectedRabbit, setSelectedRabbit] = useState(null);

  useEffect(() => {
    const fetchRabbits = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/rabbits");
        setRabbits(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des lapins:", error);
      }
    };
    fetchRabbits();
  }, []);

  const handleRabbitClick = (rabbit) => {
    setSelectedRabbit(rabbit);
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="lapins">
        <h2>Liste des lapins</h2>
        {rabbits.map((rabbit) => (
          <RabbitCard
            key={rabbit.id}
            rabbit={rabbit}
            onClick={() => handleRabbitClick(rabbit)}
          />
        ))}
      </div>
      <div className="lapin-detail">
        {selectedRabbit && <RabbitDetail rabbit={selectedRabbit} />}
        <p>Cliquez sur un lapin de la liste pour en savoir plus sur lui</p>
      </div>
    </div>
  );
};

export default RabbitList;
