import { createContext } from "react";


export const CartContext = createContext({
  totalproduct: undefined,
  CartTotal: undefined,
  updateCart: undefined,
  addToCart: undefined,
});