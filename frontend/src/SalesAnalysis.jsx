import React from "react";
import "./css/SalesAnalysis.css";
import BarGraph from "./components/BarGraph";
import LineGraph from "./components/LineGraph";
import PieChart from "./components/PieChart";

// import { Line, Bar, Pie } from "react-chartjs-2";

function SalesAnalysis() {
  const Fruitbardata = {
    labels: [
      "Apple",
      "Mango",
      "Banana",
      "Kiwi",
      "pineAllpe",
      "Orange",
      "grapes",
      "guava",
    ],
    datasets: [
      {
        label: " curent fruits quantity in KG",
        data: [100, 300, 400, 100, 600, 700, 200, 400],
        backgroundColor: [
          "red",
          "yellow",
          "#FFFFED",
          "green",
          "#FFE704",
          "#FF9304",
          "#3FFF04",
          "#9FFF66",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const WareHousebardata = {
    labels: ["Warehouse 1", "Warehouse 2", "Warehouse 3", "Warehouse 4"],
    datasets: [
      {
        label: " curent warehouse capacity in KG",
        data: [100, 300, 400, 100],
        backgroundColor: ["blue"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  //line data

  const SalesLinedata = {
    labels: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
    datasets: [
      {
        label: "imports in past week",
        data: [300, 450, 400, 500, 100, 200, 800],
        borderColor: "red",
      },
      {
        label: "exports in past week",
        data: [200, 480, 600, 200, 200, 300, 900],
        borderColor: "green",
      },
    ],
  };

  return (
    <div className="salesanalys">
      <div className="bgraph2">
        <BarGraph data={Fruitbardata} />
      </div>
      <br />
      <div className="bgraph2">
        <BarGraph data={WareHousebardata} />
      </div>

      <div className="bgraph2">
        <LineGraph data={SalesLinedata} />
      </div>
      {/* <div className="bgraph2">
        <PieChart />
      </div> */}
    </div>
  );
}

export default SalesAnalysis;
