require("dotenv").config();
const express = require("express");

const app = express();

const connectDB = require("./config/DB");

const inventoryRoutes = require("./routes/inventory.route");
const supplierRoutes = require("./routes/supplier.route");

app.use(express.json());

connectDB();

app.use("/supplier", supplierRoutes);
app.use("/inventory", inventoryRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
