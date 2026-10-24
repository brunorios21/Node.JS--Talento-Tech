import { Router } from "express";

import {
  getProducts,
  getProductById,
  createProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProductById);

export default router;
