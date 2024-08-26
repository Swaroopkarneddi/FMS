import AddFruits from "./AddFruits";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AvalableFruits from "./AvalableFruits";
import SalesAnalysis from "./SalesAnalysis";
import axios from "axios";
import Nav from "./Nav";
import ShowSales from "./ShowSales";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <Router>
        <div>
          <Nav />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<SalesAnalysis />} />
            <Route path="/AddFruits" element={<AddFruits />} />

            <Route path="/SalesAnalysis" element={<SalesAnalysis />} />
            <Route path="/AvalableFruits" element={<AvalableFruits />} />
            <Route path="/ShowSales" element={<ShowSales />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
