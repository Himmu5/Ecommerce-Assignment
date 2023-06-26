import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const getProducts = async () => {
  const response = await axios.get("/products");
  return response.data.products;
};

export const getProduct = async (id: string) => {
  const response = await axios.get("/products/" + id);
  return response.data;
};
