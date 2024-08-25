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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/getAllWarehouses"
        );
        const data = response.data;

        // Assuming data is an array of warehouse objects with a capacity property
        const labels = data.map(
          (warehouse) => `Warehouse ${warehouse.warehouseID}`
        );
        const capacities = data.map(
          (warehouse) => warehouse.warehouseAvailableCapacity
        );

        setWareHouseData({
          labels: labels,
          datasets: [
            {
              label: "Current warehouse capacity in KG",
              data: capacities,
              backgroundColor: ["blue"],
              borderColor: "black",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching warehouse data:", error);
      }
    };

    fetchData();
  }, []);

  const Fruitbardata = {
    labels: [
      "Apple",
      "Mango",
      "Banana",
      "Kiwi",
      "Pineapple",
      "Orange",
      "Grapes",
      "Guava",
    ],
    datasets: [
      {
        label: "Current fruits quantity in KG",
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
      <div className="bgraph2">
        <BarGraph data={Fruitbardata} />
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
