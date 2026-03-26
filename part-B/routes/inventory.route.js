const express = require("express");

const {
  groupedBySupplier,
  createInventory,
  getInventory,
} = require("../controllers/inventory.controller");

const router = express.Router();

router.post("/", createInventory);
router.get("/", getInventory);
router.get("/grouped", groupedBySupplier);

module.exports = router;
