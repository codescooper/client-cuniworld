import React from "react";
import axios from "axios";
import "./../css/taskList.css";

const TaskList = ({ tasks }) => {

  const handleValidate = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/tasks/${id}`);

    } catch (error) {
      console.error("Erreur lors de la validation de la tâche :", error);
    }
  };


  return (
    <div className="task-list-container">
      <h2>Liste des Tâches</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-item" key={task.id}>
            <div className="task-details">
              <h3 className="task-title">{task.name}</h3>
              <p className="task-description">Catégorie: {task.category}</p>
              <p className="task-user">Utilisateur ID: {task.user_id}</p>
            </div>
            <div className="task-validation">
              <button onClick={() => handleValidate(task.id)}>Valider la tâche</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
