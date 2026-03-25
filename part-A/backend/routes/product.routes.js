const express = require("express");

const getProducts = require("../controllers/product.controller");

const router = express.Router();

router.get("/search", getProducts);

module.exports = router;
