const Fruit = require("../Models/Fruit");
const WareHouse = require("../Models/WareHouse");
const test = (req, res) => {
  res.send("test is working");
};

const createFruit = async (req, res) => {
  try {
    const {
      fruitName,
      batchNumber,
      type,
      areaTo,
      areaFrom,
      quantity,
      arrivalDate,
      departureDate,
      MRP,
      price,
      warehouseNumber,
    } = req.body;

    // Validate required fields
    if (
      !fruitName ||
      !batchNumber ||
      !type ||
      !areaTo ||
      !areaFrom ||
      !quantity ||
      !arrivalDate ||
      !departureDate ||
      !MRP ||
      !price ||
      !warehouseNumber
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // Create a new fruit record
    const newFruit = await Fruit.create({
      fruitName,
      batchNumber,
      type,
      areaTo,
      areaFrom,
      quantity,
      arrivalDate,
      departureDate,
      MRP,
      price,
      warehouseNumber,
    });

    // Return the created fruit record
    return res.status(201).json(newFruit);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "An error occurred while creating the fruit record",
    });
  }
};

const createWarehouse = async (req, res) => {
  try {
    const {
      warehouseID,
      warehouseMaxCapacity,
      warehouseCurrentCapacity,
      warehouseAvailableCapacity,
      warehouseCurrentBatchNo,
    } = req.body;

    // Validate required fields
    if (
      warehouseID == null ||
      warehouseMaxCapacity == null ||
      warehouseCurrentCapacity == null ||
      warehouseAvailableCapacity == null ||
      !warehouseCurrentBatchNo ||
      !Array.isArray(warehouseCurrentBatchNo)
    ) {
      return res.status(400).json({
        error:
          "All fields are required and 'warehouseCurrentBatchNo' must be an array",
      });
    }

    // Create a new warehouse record
    const newWarehouse = await WareHouse.create({
      warehouseID,
      warehouseMaxCapacity,
      warehouseCurrentCapacity,
      warehouseAvailableCapacity,
      warehouseCurrentBatchNo,
    });

    // Return the created warehouse record
    return res.status(201).json(newWarehouse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "An error occurred while creating the warehouse record",
    });
  }
};

module.exports = {
  test,
  createFruit,
  createWarehouse,
};
