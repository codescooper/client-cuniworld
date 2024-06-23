import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import RabbitList from "./composant/rabbitList";
import Tasks from "./composant/tasks";
import Calendar from "./composant/Calendar";
import Genealogy from "./composant/Genealogy";
import logo from "./logo.png";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="menu">
            <img src={logo} className="App-logo" alt="logo" />
            <Link className="App-link" to="/">
              <h3>Les lapins</h3>
            </Link>
            <Link className="App-link" to="/tasks">
              <h3>Les tâches</h3>
            </Link>
            <Link className="App-link" to="/calendar">
              <h3>Calendrier</h3>
            </Link>
            <Link className="App-link" to="/genealogy">
              <h3>Généalogie</h3>
            </Link>
          </nav>
        </header>
        <div className="corps">
          <Routes>
            <Route path="/" element={<RabbitList />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/genealogy" element={<Genealogy />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
