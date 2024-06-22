import "./App.css";
import logo from "./logo.png";
import { useState, useEffect } from "react";

function App() {
  const [lapins, setLapins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/rabbits")
      .then((response) => response.json())
      .then((data) => setLapins(data))
      .catch((error) =>
        console.error("Erreur lors de la recuperation de la liste des lapins")
      );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>CuniWorld</h1>
      </header>
      <div className="corps">
        <div className="lapins">
          <h2>Liste des lapins</h2>
          {lapins.map((lapin) => (
            <div className="lapins-card">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>{lapin.name}</h2>
              <p>
                {lapin.breed} , {lapin.color} née le {lapin.birth_date}
              </p>
            </div>
          ))}
        </div>
        <div className="lapin-detail">
          <p>Cliquez sur un lapin de la liste pour en savoir plus sur lui</p>
          {selectedRabbit && <RabbitDetail rabbit={selectedRabbit} />}
        </div>
      </div>
    </div>
  );
}

export default App;
