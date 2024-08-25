import React, { useState, useEffect } from "react";
import "./css/AvalableFruits.css";
import FruitCard from "./components/FruitCard";
import axios from "axios";

function AvalableFruits() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/getAllFruits")
      .then((response) => {
        setFruits(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the fruits data!", error);
      });
  }, []);

  return (
    <div className="avalablefruits">
      {fruits.length > 0 ? (
        fruits.map((fruit, index) => <FruitCard key={index} fruit={fruit} />)
      ) : (
        <p>No fruits available</p>
      )}
    </div>
  );
}

export default AvalableFruits;
