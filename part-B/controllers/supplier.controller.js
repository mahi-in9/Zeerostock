const Supplier = require("../models/supplier.model");

async function createSupplier(req, res) {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json(supplier);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "server error", error: error.message });
  }
}

module.exports = createSupplier;
