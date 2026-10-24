const products = [
  { id: 1, name: "Teclado", price: 35000, categoryId: 1 },
  { id: 2, name: "Mouse", price: 18000, categoryId: 1 },
  { id: 3, name: "Lámpara", price: 22000, categoryId: 2 },
];

export const findAll = (categoryId) => {
  if (!categoryId) {
    return products;
  }

  return products.filter((p) => p.categoryId === parseInt(categoryId));
};

export const findById = (id) => {
  return products.find((p) => p.id === parseInt(id));
};

export const create = ({ name, price, categoryId }) => {
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    categoryId,
  };

  products.push(newProduct);

  return newProduct;
};