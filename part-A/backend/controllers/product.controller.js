const Products = require("../data/product");
const applyFilter = require("../services/applyFilter");

const getProducts = (req, res) => {
  try {
    const { minPrice, maxPrice } = req.query;

    const min = minPrice !== undefined ? Number(minPrice) : undefined;
    const max = maxPrice !== undefined ? Number(maxPrice) : undefined;

    if (minPrice && isNaN(min)) {
      return res.status(400).json({
        success: false,
        message: "minPrice must be a number",
      });
    }

    if (maxPrice && isNaN(max)) {
      return res.status(400).json({
        success: false,
        message: "maxPrice must be a number",
      });
    }

    if (min !== undefined && max !== undefined && min >= max) {
      return res.status(400).json({
        success: false,
        message: "invalid price range",
      });
    }

    const filters = {
      q: req.query.q?.trim(),
      category: req.query.category?.trim(),
      minPrice: min,
      maxPrice: max,
    };

    const filteredProducts = applyFilter(Products, filters);

    return res.status(200).json({
      success: true,
      message: "products fetched successfully",
      count: filteredProducts.length,
      data: filteredProducts,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "server error", error: error.message });
  }
};

module.exports = getProducts;
