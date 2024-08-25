import React, { useState } from "react";
import axios from "axios";
import "./css/AddFruits.css";

function AddFruits() {
  const initialFormData = {
    fruitName: "",
    batchNumber: "",
    type: "Seasonal",
    areaTo: "",
    areaFrom: "",
    quantity: "",
    arrivalDate: "",
    departureDate: "",
    MRP: "",
    price: "",
    warehouseNumber: "1",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/add-fruit",
        formData
      );
      if (response.data.error) {
        setError(response.data.error);
        setSuccess(null);
      } else {
        setSuccess("Fruit added successfully!");
        setError(null);
        setFormData(initialFormData); // Clear the form data
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred while submitting the form.");
      setSuccess(null);
    }
  };

  return (
    <div className="add-fruits">
      <h2>Add Fruit Details</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Fruit Name:
          <input
            type="text"
            name="fruitName"
            value={formData.fruitName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Batch Number:
          <input
            type="text"
            name="batchNumber"
            value={formData.batchNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Type:
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="Seasonal">Seasonal</option>
            <option value="Non-Seasonal">Non-Seasonal</option>
          </select>
        </label>
        <label>
          Area To:
          <input
            type="text"
            name="areaTo"
            value={formData.areaTo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Area From:
          <input
            type="text"
            name="areaFrom"
            value={formData.areaFrom}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Arrival Date:
          <input
            type="date"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Departure Date:
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          MRP:
          <input
            type="number"
            name="MRP"
            value={formData.MRP}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Warehouse Number:
          <select
            name="warehouseNumber"
            value={formData.warehouseNumber}
            onChange={handleChange}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddFruits;
