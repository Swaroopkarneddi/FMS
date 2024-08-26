import React from "react";
import "./FruitCard.css";

const SalesCard = ({ sale }) => {
  const {
    SoldfruitName,
    SoldbatchNumber,
    type,
    areaTo,
    areaFrom,
    quantity,
    arrivalDate,
    departureDate,
    MRP,
    price,
    warehouseNumber,
  } = sale;

  return (
    <div className="fruit-card">
      <h2>{SoldfruitName}</h2>
      <p>
        <strong>Batch Number:</strong> {SoldbatchNumber}
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
    </div>
  );
};

export default SalesCard;
