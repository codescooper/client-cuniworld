import React, { useState, useEffect } from "react";
import axios from "axios";
import RabbitCard from "./rabbitCard";
import RabbitDetail from "./rabbitDetail";
import AddRabbitForm from "./addRabbitForm";

const RabbitList = () => {
  const [rabbits, setRabbits] = useState([]);
  const [selectedRabbit, setSelectedRabbit] = useState(null);
  const [showForm, setShowForm] = useState(false);

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

  const handleWeightUpdate = (newWeight) => {
    // Mettre à jour les données de poids du lapin sélectionné
    setSelectedRabbit((prev) => ({
      ...prev,
      weightData: [...prev.weightData, newWeight],
    }));
    // Optionnel: Mettre à jour la liste complète des lapins si nécessaire
    setRabbits((prevRabbits) =>
      prevRabbits.map((rabbit) =>
        rabbit.id === selectedRabbit.id
          ? { ...rabbit, weightData: [...rabbit.weightData, newWeight] }
          : rabbit
      )
    );
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        {rabbits.map((rabbit) => (
          <RabbitCard
            key={rabbit.id}
            rabbit={rabbit}
            onClick={() => handleRabbitClick(rabbit)}
          />
        ))}
      </div>
      <div>
        <button onClick={toggleFormVisibility}>
          {showForm ? "Cacher le formulaire" : "Ajouter un Lapin"}
        </button>
        {showForm && <AddRabbitForm />}
        {selectedRabbit && (
          <RabbitDetail
            rabbit={selectedRabbit}
            onWeightUpdate={handleWeightUpdate} // Passer la fonction ici
          />
        )}
      </div>
    </div>
  );
};

export default RabbitList;
