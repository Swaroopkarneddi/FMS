import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  plugins,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Legend
);
function BarGraph({ data }) {
  return (
    <div>
      <Bar
        data={data}
        // options={{
        //   scales: {
        //     yAxis: {
        //       // min: 0,
        //       max: 30000,
        //     },
        //   },
        // }}
      />
    </div>
  );
}

export default BarGraph;
