import * as productModel from "../models/products.model.js";

export const getProducts = (req, res) => {
  const categoryId = req.query.categoryId;

  const filteredProducts = productModel.findAll(categoryId);

  res.json(filteredProducts);
};

export const getProductById = (req, res) => {
  const productId = parseInt(req.params.id); // NaN si no es un número válido

  if (isNaN(productId)) {
    return res.status(400).json({ error: "ID de producto no válido" });
  }

  const product = productModel.findById(productId);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(product);
};

export const createProduct = (req, res) => {
  const { name, price, categoryId } = req.body ?? {};

  if (!name || !price || !categoryId) {
    return res.status(422).json({ error: "Faltan datos del producto" });
  }

  const newProduct = productModel.create({ name, price, categoryId });

  res.status(201).json(newProduct);
};
