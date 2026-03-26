const express = require("express");

const createSupplier = require("../controllers/supplier.controller");

const router = express.Router();

router.post("/", createSupplier);

module.exports = router;
