import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

// Enregistrer le plugin Filler
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const WeightChart = ({ weightData }) => {
  if (!weightData) {
    return <p>Pas de données disponibles pour le poids</p>;
  }

  const data = {
    labels: weightData.map((entry) => entry.date),
    datasets: [
      {
        label: 'Poids (kg)',
        data: weightData.map((entry) => entry.weight),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true, // Option 'fill' utilisée ici
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Poids (kg)',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WeightChart;
