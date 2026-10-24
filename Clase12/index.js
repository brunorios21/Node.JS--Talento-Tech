import express from "express";
import cors from "cors";

import productsRouter from "./src/routes/products.router.js";
import categoriesRouter from "./src/routes/categories.router.js";

const app = express();

app.use(express.json()); // bodyParser middleware
app.use(cors()); // CORS middleware

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("API del curso funcionando");
});

app.use(categoriesRouter);
app.use("/api/productos", productsRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
