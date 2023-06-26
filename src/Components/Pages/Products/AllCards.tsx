import { memo, FC } from "react";
import { Product } from "../../../Models/product";
import ProductCard from "./ProductCard";

type AllCardstype = {
  data?: Product[];
};

const AllCards: FC<AllCardstype> = ({ data }) => {
  return (
    <>
      <div className="grid sm:grid-cols-3 gap-9  sm:p-20 sm:pt-5 sm:pb-5 mt-5 mb-5">
        {data?.map(function (item) {
          return <ProductCard key={item.id} data={item} />;
        })}
      </div>
    </>
  );
};

export default memo(AllCards);
