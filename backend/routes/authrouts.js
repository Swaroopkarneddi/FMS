const express = require("express");

const router = express.Router();
const cors = require("cors");
const {
  test,
  createFruit,
  createWarehouse,
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

module.exports = router;
