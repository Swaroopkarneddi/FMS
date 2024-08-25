import React from "react";
import "./FruitCard.css";

const FruitCard = ({ fruit }) => {
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

  const handleDelete = () => {
    console.log(`Delete button clicked for ${fruitName}`);
    // You can add actual delete logic here or simulate the deletion
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
        Delete
      </button>
    </div>
  );
};

export default FruitCard;
