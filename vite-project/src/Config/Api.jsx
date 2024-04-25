export const GetCategories = () => `https://dummyjson.com/products/categories`;

export const GetProductByCategorie = (category, limit) =>
  `https://dummyjson.com/products/category/${category}/?limit=${limit}`;

export const GetProducts = () => `https://dummyjson.com/products?limit=0`;

export const GetProductByCategory = (category) =>
  `https://dummyjson.com/products/category/${category}`;
