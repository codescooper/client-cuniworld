import "./App.css";
import RabbitList from "./composant/rabbitList";
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
        <div className="rabbit">
          <RabbitList lapins={lapins} />
        </div>
      </div>
    </div>
  );
}

export default App;
