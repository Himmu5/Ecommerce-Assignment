import axios from "axios";
import { Product } from "../Models/product";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const getProducts = async () => {
  const response = await axios.get("/products");
  return response.data.products;
};

export const getProduct = async (id: string) => {
  const response = await axios.get("/products/" + id);
  return response.data as Product;
};

export const getProductByIds = async (cart: { [id: number]: number }) => {
  // const data = [] as Product[]
  const data = Object.keys(cart).map(async (id) => {
    const temp = await axios.get('/products/' + id)
    return temp.data as Product;
  });
  return Promise.all(data);
  // return Promise.all(data);
};
