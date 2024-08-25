import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
  ArcElement,
  plugins,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Legend);
function PieChart() {
  return <div>PieChart</div>;
}

export default PieChart;
