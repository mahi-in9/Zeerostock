const express = require("express");

const productRoute = require("./routes/product.routes");

const app = express();

app.use(express.json());

app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log("server is running on port: 3000");
});
