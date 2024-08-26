const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema(
  {
    SoldfruitName: { type: String, required: true },
    SoldbatchNumber: { type: String, required: true, unique: true },
    type: { type: String, required: true, enum: ["Seasonal", "Non-Seasonal"] },
    areaTo: { type: String, required: true },
    areaFrom: { type: String, required: true },
    quantity: { type: Number, required: true },
    arrivalDate: { type: Date, required: true },
    departureDate: { type: Date, required: true },
    MRP: { type: Number, required: true },
    price: { type: Number, required: true },
    warehouseNumber: { type: Number, required: true, enum: [1, 2, 3, 4] },
  },
  { timestamps: true }
);

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;
