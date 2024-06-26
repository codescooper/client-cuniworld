import React, { useState } from "react";
import "../css/addRabbitForm.css";
import axios from "axios";

const AddRabbitForm = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const birth_date = event.target.birth_date.value;
    const gender = event.target.gender.value;
    const weight = event.target.weight.value;
    const breed = event.target.breed.value;
    const color = event.target.color.value;
    const rabbit = { name, birth_date, weight, breed, color, gender };
    if (!name || !birth_date || !gender || !weight || !breed || !color) {
      setError("Tous les champs sont obligatoires");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/rabbits", rabbit);
    } catch (err) {
      setError("Erreur lors de l'enregistrement du lapin");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Ajouter un lapin</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom</label>
        <input className="input" type="text" id="name" name="name" />
        <label htmlFor="birth_date">Date de naissance</label>
        <input className="input" type="date" id="birth_date" name="birth_date" />
        <label htmlFor="gender">Sexe</label>
        <select className="input" id="gender" name="gender">
          <option value="M">Mâle</option>
          <option value="F">Femelle</option>
        </select>
        <label htmlFor="weight">Poids</label>
        <p className="row">
          <input
            className="input weight"
            type="number"
            id="weight"
            name="weight"
          />
          <span className="unit">kg</span>
        </p>
        <label>Race</label>
        <select className="input" id="breed" name="breed">
          <option value="Américain">Américain</option>
          <option value="American Fuzzy Lop">American Fuzzy Lop</option>
          <option value="Sable Américain">Sable Américain</option>
          <option value="Brun Argente">Brun Argente</option>
          <option value="Lièvre Belge">Lièvre Belge</option>
          <option value="Beveren">Beveren</option>
          <option value="Blanc de Hotot">Blanc de Hotot</option>
          <option value="Britannia Petite">Britannia Petite</option>
          <option value="Californien">Californien</option>
          <option value="Champagne d'Argent">Champagne d'Argent</option>
          <option value="Géant Papillon Français">
            Géant Papillon Français
          </option>
          <option value="Cannelle">Cannelle</option>
          <option value="Crème d'Argent">Crème d'Argent</option>
          <option value="Néerlandais">Néerlandais</option>
          <option value="Dwarf Hotot (Hotot Nain)">
            Dwarf Hotot (Hotot Nain)
          </option>
          <option value="Angora Anglais">Angora Anglais</option>
          <option value="Bélier Anglais">Bélier Anglais</option>
          <option value="Papillon Anglais">Papillon Anglais</option>
          <option value="Géant des Flandres">Géant des Flandres</option>
          <option value="Blanc de Floride">Blanc de Floride</option>
          <option value="Angora Français">Angora Français</option>
          <option value="Bélier Français">Bélier Français</option>
          <option value="Angora Géant">Angora Géant</option>
          <option value="Chinchilla Géant">Chinchilla Géant</option>
          <option value="Harlequin">Harlequin</option>
          <option value="Havane">Havane</option>
          <option value="Himalayen">Himalayen</option>
          <option value="Holland Lop (Bélier Hollandais)">
            Holland Lop (Bélier Hollandais)
          </option>
          <option value="Jersey Wooly">Jersey Wooly</option>
          <option value="Lilas">Lilas</option>
          <option value="Tête de Lion">Tête de Lion</option>
          <option value="Mini Lop (Bélier Nain)">Mini Lop (Bélier Nain)</option>
          <option value="Mini Rex">Mini Rex</option>
          <option value="Mini Satin">Mini Satin</option>
          <option value="Néerlandais Nain">Néerlandais Nain</option>
          <option value="Néo-Zélandais">Néo-Zélandais</option>
          <option value="Palomino">Palomino</option>
          <option value="Polonais">Polonais</option>
          <option value="Rex">Rex</option>
          <option value="Rhinelander">Rhinelander</option>
          <option value="Satin">Satin</option>
          <option value="Angora Satin">Angora Satin</option>
          <option value="Argenté">Argenté</option>
          <option value="Renard Argenté">Renard Argenté</option>
          <option value="Martre Argenté">Martre Argenté</option>
          <option value="Chinchilla Standard">Chinchilla Standard</option>
          <option value="Tan">Tan</option>
          <option value="Thrianta">Thrianta</option>
        </select>
        <label htmlFor="color">Couleur</label>
        <select className="input" id="color" name="color">
          <option value="Blanc">Blanc</option>
          <option value="Noir">Noir</option>
          <option value="Gris">Gris</option>
          <option value="Marron">Marron</option>
        </select>
        <button type="submit">Ajouter</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default AddRabbitForm;
