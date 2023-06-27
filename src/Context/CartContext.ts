import { createContext } from "react";
import { Product } from "../Models/product";

export const CartContext = createContext<{
  cart: { [id: number]: number };
  setCart?: (s: { [id: number]: number }) => void;
  addToCart : (id : number , q : number)=>void;
  cartTotal : number ,
  cartProducts : Product[],
  loading : boolean,
  deleteCartProduct ?: (id:number)=>void
}>({
  cart: {},
  setCart : {} as ()=>void,
  addToCart(id, q) {},
  cartTotal : 0,
  cartProducts : [],
  loading : true,
  deleteCartProduct : undefined
});
