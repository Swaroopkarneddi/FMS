import AddFruits from "./AddFruits";
import "./App.css";
import AvalableFruits from "./AvalableFruits";
import SalesAnalysis from "./SalesAnalysis";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <div>
        <AddFruits />
        <SalesAnalysis />
        <AvalableFruits />
      </div>
    </>
  );
}

export default App;
