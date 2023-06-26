import React, { FC } from "react";
import { CartContext } from "../Context/CartContext";

type CartProviderType = {
  children: React.ReactNode;
};

const CartProvider: FC<CartProviderType> = ({ children }) => {
  // const [totalproduct, settotalproduct] = useState([]);

  return (
    <div>
      <CartContext.Provider value={{ }}>{children}</CartContext.Provider>
    </div>
  );
};

export default CartProvider;
