import { FC } from "react";
import ProductList from "./ProductList";
import SearchNotFound from "../../Error-handling/SearchNotFound";
import CartTotal from "./CartTotal";
import withCart from "../../HOC/withCart";
import { Product } from "../../../Models/product";
import Loading from "../../UI-Component/Loading";

type CartType = {
  cart: { [id: number]: number };
  cartProducts : Product[],
  loading : boolean;
};

const Cart: FC<CartType> = ({ cartProducts , loading }) => {

  if (loading) {
    return <Loading />;
  }

  if (cartProducts?.length == 0) {
    return <SearchNotFound />;
  }

  return (
    <>
      <div className=" max-w-5xl mx-auto font-bold text-gray-500 bg-white p-3 mt-10 mb-10 xl:p-10 shadow-xl ">
        <ProductList  />
        <div className="flex flex-col items-end ">
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default withCart(Cart);
