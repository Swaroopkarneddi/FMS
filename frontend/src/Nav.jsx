import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/Nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Fruit Warehouse</div>
      <div
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
            onClick={toggleMenu}
          >
            Add Fruits
          </Link>
        </li>
        <li>
          <Link
            to="/SalesAnalysis"
            className={
              location.pathname === "/SalesAnalysis" ? "active-link" : ""
            }
            onClick={toggleMenu}
          >
            Sales Analysis
          </Link>
        </li>
        <li>
          <Link
            to="/AvalableFruits"
            className={
              location.pathname === "/AvalableFruits" ? "active-link" : ""
            }
            onClick={toggleMenu}
          >
            Available Fruits
          </Link>
        </li>
        <li>
          <Link
            to="/ShowSales"
            className={location.pathname === "/ShowSales" ? "active-link" : ""}
            onClick={toggleMenu}
          >
            Show sales
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
