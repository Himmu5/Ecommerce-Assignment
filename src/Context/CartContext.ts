import { createContext } from "react";
import { Product } from "../Models/product";

export const CartContext = createContext<{
  cart: { [id: number]: number };
  setCart?: (s: { [id: number]: number }) => void;
  addToCart : (id : number , q : number)=>void;
  cartTotal : number ,
  cartProducts : Product[],
  loading : boolean
}>({
  cart: {},
  setCart : {} as ()=>void,
  addToCart(id, q) {},
  cartTotal : 0,
  cartProducts : [],
  loading : true
});
