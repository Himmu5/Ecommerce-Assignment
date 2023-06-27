import React, { FC, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { getProductByIds } from "../Apis/products";
import { Product } from "../Models/product";

type CartProviderType = {
  children: React.ReactNode;
};

const CartProvider: FC<CartProviderType> = ({ children }) => {
  const [cart, setCart] = useState<{ [id: number]: number }>(
    JSON.parse(localStorage.getItem("cart") || "{}")
  );
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductByIds(cart).then((res:any) => {
      setCartProducts(res);
      setLoading(false);
    });
  }, [cart]);


  function addToCart(id: number, Quantity: number) {
    const oldvalue = cart[id] || 0;
    const temp = { ...cart, [id]: oldvalue + Quantity };
    localStorage.setItem("cart", JSON.stringify(temp));
    setCart(temp);
  }

  const cartTotal = Object.keys(cart).reduce((prev, current) => {
    return prev + cart[+current];
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartTotal , cartProducts , loading }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
