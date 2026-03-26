const Inventory = require("../models/inventory.model");
const Supplier = require("../models/supplier.model");

async function createInventory(req, res) {
  try {
    const { supplier_id } = req.body;

    const supplier = await Supplier.findById(supplier_id);

    if (!supplier)
      return res
        .status(400)
        .json({ success: false, message: "Invalid supplier" });

    const item = await Inventory.create(req.body);
    return res
      .status(201)
      .json({ success: true, message: "Inventory created", item: item });
  } catch (error) {
    return res.status(500).json({ success: false, message: "server error" });
  }
}

async function getInventory(req, res) {
  try {
    const data = await Inventory.find().populate("supplier_id");
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    return res.status(500).json({ success: false, message: "server error" });
  }
}

const groupedBySupplier = async (req, res) => {
  try {
    const result = await Inventory.aggregate([
      {
        $group: {
          _id: "$supplier_id",
          totalValue: {
            $sum: { $multiply: ["$quantity", "$price"] },
          },
        },
      },
      {
        $sort: { totalValue: -1 },
      },
    ]);

    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "server errr", error: error.message });
  }
};

module.exports = { groupedBySupplier, createInventory, getInventory };
