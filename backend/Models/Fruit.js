const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema(
  {
    fruitName: { type: String, required: true },
    batchNumber: { type: String, required: true, unique: true },
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

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
