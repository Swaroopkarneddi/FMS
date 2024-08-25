import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/SalesAnalysis.css";
import BarGraph from "./components/BarGraph";
import LineGraph from "./components/LineGraph";
// import PieChart from "./components/PieChart";

function SalesAnalysis() {
  const [wareHouseData, setWareHouseData] = useState({
    labels: [],
    datasets: [],
  });

  const [fruitData, setFruitData] = useState({
    labels: [],
    datasets: [],
  });

  const fetchData = async () => {
    try {
      // Fetch warehouse data
      const warehouseResponse = await axios.get(
        "http://localhost:8000/getAllWarehouses"
      );
      const warehouseData = warehouseResponse.data;

      const warehouseLabels = warehouseData.map(
        (warehouse) => `Warehouse ${warehouse.warehouseID}`
      );
      const warehouseCapacities = warehouseData.map(
        (warehouse) => warehouse.warehouseAvailableCapacity
      );

      setWareHouseData({
        labels: warehouseLabels,
        datasets: [
          {
            label: "Current warehouse capacity in KG",
            data: warehouseCapacities,
            backgroundColor: ["blue"],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      });

      // Fetch fruit data
      const fruitResponse = await axios.get(
        "http://localhost:8000/getAggregatedFruitQuantities"
      );
      const fruitData = fruitResponse.data;

      const fruitLabels = fruitData.map((fruit) => fruit.fruitName);
      const fruitQuantities = fruitData.map((fruit) => fruit.totalQuantity);

      setFruitData({
        labels: fruitLabels,
        datasets: [
          {
            label: "Current fruits quantity in KG",
            data: fruitQuantities,
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
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  const SalesLinedata = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Imports in past week",
        data: [300, 450, 400, 500, 100, 200, 800],
        borderColor: "red",
      },
      {
        label: "Exports in past week",
        data: [200, 480, 600, 200, 200, 300, 900],
        borderColor: "green",
      },
    ],
  };

  return (
    <div className="salesanalys">
      <button onClick={handleRefresh} className="refresh-button">
        Refresh Data
      </button>
      <div className="bgraph2">
        <BarGraph data={fruitData} />
      </div>
      <br />
      <div className="bgraph2">
        <BarGraph data={wareHouseData} />
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
