import React, { useState, useEffect } from "react";
import "./css/AvalableFruits.css";
import FruitCard from "./components/FruitCard";
import axios from "axios";

function AvalableFruits() {
  const [fruits, setFruits] = useState([]);
  const [isDataUpdated, setIsDataUpdated] = useState(false);

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getAllFruits");
        setFruits(response.data);
      } catch (error) {
        console.error("There was an error fetching the fruits data!", error);
      }
    };

    fetchFruits();
  }, [isDataUpdated]);

  const handleDelete = async (batchNumber) => {
    try {
      await axios.delete(`http://localhost:8000/deleteFruit/${batchNumber}`);
      setIsDataUpdated((prev) => !prev); // Toggle to trigger useEffect
      console.log(`Deleted fruit with batchNumber ${batchNumber}`);
    } catch (error) {
      console.error("There was an error deleting the fruit!", error);
    }
  };

  return (
    <div className="avalablefruits">
      {fruits.length > 0 ? (
        fruits.map((fruit) => (
          <FruitCard
            key={fruit.batchNumber}
            fruit={fruit}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p>No fruits available</p>
      )}
    </div>
  );
}

export default AvalableFruits;
