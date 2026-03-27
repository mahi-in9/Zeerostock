require("dotenv").config();
const express = require("express");
const cors = require("cors");

const productRoute = require("./routes/product.routes");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET"],
  }),
);

app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log("server is running on port: 3000");
});
