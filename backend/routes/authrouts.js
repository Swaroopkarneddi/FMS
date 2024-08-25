const express = require("express");

const router = express.Router();
const cors = require("cors");
const {
  test,
  createFruit,
  createWarehouse,
  getAllWarehouses,
  getAggregatedFruitQuantities,
  getAllFruits,
  deleteFruit,
} = require("../controlers/authcontroler");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);
router.post("/add-fruit", createFruit);
router.post("/createWarehouse", createWarehouse);
router.get("/getAllWarehouses", getAllWarehouses);
router.get("/getAggregatedFruitQuantities", getAggregatedFruitQuantities);
router.get("/getAllFruits", getAllFruits);
router.delete("/deleteFruit/:batchNumber", deleteFruit);

module.exports = router;
