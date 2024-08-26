import React from "react";
import axios from "axios";
import "./FruitCard.css";

const FruitCard = ({ fruit, onDelete }) => {
  const {
    fruitName,
    batchNumber,
    type,
    areaTo,
    areaFrom,
    quantity,
    arrivalDate,
    departureDate,
    MRP,
    price,
    warehouseNumber,
  } = fruit;

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/deleteFruit/${batchNumber}`);
      console.log(`Delete button clicked for ${fruitName}`);

      if (onDelete) onDelete(batchNumber);
    } catch (error) {
      console.error("There was an error deleting the fruit!", error);
    }
  };

  return (
    <div className="fruit-card">
      <h2>{fruitName}</h2>
      <p>
        <strong>Batch Number:</strong> {batchNumber}
      </p>
      <p>
        <strong>Type:</strong> {type}
      </p>
      <p>
        <strong>Area To:</strong> {areaTo}
      </p>
      <p>
        <strong>Area From:</strong> {areaFrom}
      </p>
      <p>
        <strong>Quantity:</strong> {quantity}
      </p>
      <p>
        <strong>Arrival Date:</strong>{" "}
        {new Date(arrivalDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Departure Date:</strong>{" "}
        {new Date(departureDate).toLocaleDateString()}
      </p>
      <p>
        <strong>MRP:</strong> ₹{MRP}
      </p>
      <p>
        <strong>Price:</strong> ₹{price}
      </p>
      <p>
        <strong>Warehouse Number:</strong> {warehouseNumber}
      </p>
      <button className="delete-button" onClick={handleDelete}>
        Export
      </button>
    </div>
  );
};

export default FruitCard;
