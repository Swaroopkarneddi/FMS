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

    // Find the corresponding warehouse by warehouseNumber
    const warehouse = await WareHouse.findOne({ warehouseID: warehouseNumber });
    if (!warehouse) {
      return res.status(404).json({
        error: "Warehouse not found",
      });
    }

    // Check if there's enough available capacity in the warehouse
    if (warehouse.warehouseAvailableCapacity < quantity) {
      return res.status(400).json({
        error: "Not enough available capacity in the warehouse",
      });
    }

    // Update the warehouse capacities and batch number
    // Update the warehouse capacities and batch number
    warehouse.warehouseCurrentCapacity =
      Number(warehouse.warehouseCurrentCapacity) + Number(quantity);
    warehouse.warehouseAvailableCapacity =
      Number(warehouse.warehouseAvailableCapacity) - Number(quantity);

    // Update the warehouse's current batch numbers if batchNumber is not already included
    if (!warehouse.warehouseCurrentBatchNo.includes(batchNumber)) {
      warehouse.warehouseCurrentBatchNo.push(batchNumber);
    }

    // Save the updated warehouse
    await warehouse.save();

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

const getAllWarehouses = async (req, res) => {
  try {
    // Fetch all warehouse records
    const warehouses = await WareHouse.find();

    // Return the list of all warehouses
    return res.status(200).json(warehouses);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "An error occurred while retrieving warehouse records",
    });
  }
};

const getAggregatedFruitQuantities = async (req, res) => {
  try {
    // Aggregate fruits by summing quantities for each fruit name
    const aggregatedFruits = await Fruit.aggregate([
      {
        $group: {
          _id: "$fruitName",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $project: {
          _id: 0,
          fruitName: "$_id",
          totalQuantity: 1,
        },
      },
    ]);

    // Return the aggregated fruits data
    return res.status(200).json(aggregatedFruits);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "An error occurred while retrieving aggregated fruit data",
    });
  }
};

module.exports = {
  test,
  createFruit,
  createWarehouse,
  getAllWarehouses,
  getAggregatedFruitQuantities,
};
