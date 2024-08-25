import AddFruits from "./AddFruits";
import "./App.css";
import SalesAnalysis from "./SalesAnalysis";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <div>
        <SalesAnalysis />
        {/* <AddFruits /> */}
      </div>
    </>
  );
}

export default App;
