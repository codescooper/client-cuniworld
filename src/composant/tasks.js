import React, { useState, useEffect } from "react";
import TaskList from "./taskList";
import axios from "axios";

const Tasks = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false); // État pour gérer la visibilité du formulaire

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des tâches :", error);
    }
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleUserIdChange = (e) => setUserId(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !category || !userId) {
      setError('Tous les champs sont nécessaires.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/tasks', {
        name,
        category,
        user_id: userId
      });

      fetchTasks(); // Rafraîchir la liste des tâches
      setName('');
      setCategory('');
      setUserId('');
      setError('');
      setShowForm(false); // Cacher le formulaire après soumission
    } catch (err) {
      setError('Erreur lors de l\'ajout de la tâche.');
      console.error(err);
    }
  };

  const handleValidation = async (taskId) => {
    try {
      await axios.patch(`http://localhost:5000/api/tasks/${taskId}/validation`, {
        validation: true
      });


    } catch (err) {
      console.error("Erreur lors de la mise à jour de la tache : ", err);
    }
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm); // Inverser la visibilité du formulaire
  };
  const filteredTasks = tasks.filter(task => !task.validation);

  return (
    <div className="tasks">
      <h2>Les Tâches</h2>
      <button onClick={toggleFormVisibility}>
        {showForm ? 'Cacher le formulaire' : 'Ajouter une tâche'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nom:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label>Catégorie:</label>
            <input type="text" value={category} onChange={handleCategoryChange} />
          </div>
          <div>
            <label>ID Utilisateur:</label>
            <input type="text" value={userId} onChange={handleUserIdChange} />
          </div>
          <button type="submit">Ajouter tâche</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
      <TaskList tasks={filteredTasks} onValidate={handleValidation} />
      <p>Contenu de la page des tâches...</p>
    </div>
  );
};

export default Tasks;
