const express = require("express");
const cors = require("cors");

const productRoute = require("./routes/product.routes");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET"],
  }),
);

app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log("server is running on port: 3000");
});
