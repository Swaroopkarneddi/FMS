import React, { useState, useEffect } from "react";
import "./css/Nav.css";
import SalesCard from "./components/SalesCard";
import axios from "axios";

function ShowSales() {
  const [sales, setSales] = useState([]);

  const fetchSales = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getAllSales");
      setSales(response.data);
    } catch (error) {
      console.error("There was an error fetching the sales data!", error);
    }
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <div className="avalablesales">
      {sales.length > 0 ? (
        sales.map((sale) => (
          <SalesCard key={sale.SoldbatchNumber} sale={sale} />
        ))
      ) : (
        <p>No Sales Data available</p>
      )}
    </div>
  );
}

export default ShowSales;
