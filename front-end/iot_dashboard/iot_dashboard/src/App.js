import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Chart data
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Temperature (°C)",
      data: [22, 34, 26, 38, 30, 32],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Months",
      },
    },
    y: {
      title: {
        display: true,
        text: "Temperature (°C)",
      },
      min: 20,
      max: 40,
    },
  },
};

function App() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Temperature Chart</h1>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default App;
