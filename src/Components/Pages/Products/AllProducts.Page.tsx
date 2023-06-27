import { FC, useEffect } from "react";
// import AllCards from "./Cards/AllCards";
import { useState } from "react";
import Loading from '../../UI-Component/Loading'
import SearchNotFound from '../../Error-handling/SearchNotFound'
import { getProducts } from "../../../Apis/products";
import { Product } from "../../../Models/product";
import AllCards from "./AllCards";



const MainContant: FC = () => {
  const [ApiData, setApiData] = useState<Product[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [Query, setQuery] = useState("");
  const [select , setSelect ] = useState('Default');

  useEffect(
    function () {

      let mydata = getProducts();
      mydata
        .then(function (response) {
          setApiData(response);
          setLoading(false);
        })
        .catch(function () {
          setLoading(false);
        });
    }, 
    [Query , select]
  );
  let data = ApiData;
  
  if(Query.length > 0){
    data = ApiData?.filter((product)=>{
      return product.title.toLowerCase().indexOf(Query.toLowerCase()) !== -1
    })
  }
  if(select === 'LtoH'){
    data = data?.sort((x , y)=>{
      return x.price - y.price 
    })
  }
  if(select === 'HtoL'){
    data = data?.sort((x , y)=>{
      return y.price - x.price
    })
  }
  if(select === 'name'){
    data = data?.sort((x , y)=>{
      return y.title > x.title ? -1 : 1
    })
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="px-5">
      <div className="mx-1 sm:max-w-6xl sm:mx-auto sm:pl-5 sm:pr-5 sm:pt-5 sm:pb-5  mt-16 mb-16 bg-white shadow-md rounded-md ">
        <div className="p-3 sm:p-20 sm:pt-10 sm:pb-0 space-y-5 ">
          <h1 className="text-3xl text-red-400"> Shop</h1>
          <div className="sm:flex sm:justify-between space-y-3 sm:space-y-0">
            <h1>Showing 1–9 of 11 results</h1>
            <div className="space-y-3 sm:space-y-0 sm:flex gap-3">
              <div className=" items-center hidden md:block">
                <input
                  type="text"
                  value={Query}
                  onChange={(e)=>setQuery(e.target.value)}
                  placeholder="Search product"
                  className="border relative pt-2 pb-2 pl-7 pr-3 "
                />
                {/* <BiSearch className=" pl-1 pr-1 text-2xl -mr-3"/> */}
              </div>
              <select
                id=""
                value={select}
                onChange={(e)=>setSelect(e.target.value)}                
                className="pl-3 pr-3 md:pl-6 md:pr-6 pt-2 pb-2 border border-gray-300"
              >
                <option value="Default">Default Sort</option>
                <option value="LtoH">Sort By price : Low To High</option>
                <option value="HtoL">Sort By price : High To Low </option>
                <option value="name">Sort By Name</option>
              </select>
            </div>
          </div>
        </div>

        {ApiData?.length === 0 && <SearchNotFound />}
        <AllCards data={data} />
      </div>
    </div>
  );
};

export default MainContant;
