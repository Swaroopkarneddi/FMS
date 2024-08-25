const mongoose = require("mongoose");

const warehouseSchema = new mongoose.Schema(
  {
    warehouseID: {
      type: Number,
      required: true,
    },
    warehouseMaxCapacity: { type: Number, required: true },
    warehouseCurrentCapacity: { type: Number, required: true },
    warehouseAvailableCapacity: { type: Number, required: true },
    warehouseCurrentBatchNo: { type: [String], required: true },
  },
  { timestamps: true }
);

const WareHouse = mongoose.model("WareHouse", warehouseSchema);

module.exports = WareHouse;
