import { FC } from "react";
import { memo } from "react";
import withCart from "../../HOC/withCart";
import { Product } from "../../../Models/product";

type P = {
  cartProducts : Product[],
  cart : {[id : number] : number}
}

const CartTotal:FC<P> = ({cartProducts , cart  }) => {

  
  const totalPrice = cartProducts?.reduce((prev ,current)=>{
    return prev + current.price * cart[current.id]
  },0)


  return (
    <div className="space-y-2 border-2 mt-5 pb-5 w-80">
        <div>

        </div>
      <div className="p-3 text-2xl border-b-2">
        <p>Cart total</p>
      </div>
      <div className="p-3 space-y-4">
        <div className="flex justify-between border-b-2">
          <p>Subtotal:</p>
          <p>${totalPrice}.00</p>
        </div>
        <div className="flex justify-between border-b-2">
          <p>Total:</p>
          <p>${totalPrice}.00</p>
        </div>
      </div>

      <div className="bg-red-500 text-white text-center pt-3 pb-3 rounded-md m-2">
        ADD TO CHECKOUT
      </div>
    </div>
  );
}


export default withCart(memo(CartTotal));