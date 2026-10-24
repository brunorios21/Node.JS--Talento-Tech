import { Router } from "express";

const router = Router();

const categories = [
  { id: 1, name: "Tecnología" },
  { id: 2, name: "Hogar" },
];

router.get("/api/categorias", (req, res) => {
  res.json(categories);
});

export default router;
