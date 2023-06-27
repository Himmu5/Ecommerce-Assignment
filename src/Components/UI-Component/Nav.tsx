import { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
import { BiCart } from 'react-icons/bi'
import Hamburger from "hamburger-react";
import withCart from "../HOC/withCart";

type NavType = {
  cartTotal : number
};

const Nav: FC<NavType> = ({cartTotal}) => {

  const [hamtoggle, sethamtoggle] = useState(false);

  function Toggle() {
    if (hamtoggle == true) {
      sethamtoggle(false);
    } else {
      sethamtoggle(true);
    }
  }

  return (
    <div className="font-bold text-gray-600 ">
      <div className=" bg-white pt-6 pb-6  pl-3 pr-3 shadow-md ">
        <div className="flex justify-between items-center  max-w-6xl mx-auto">
          <Link to="/" className="text-xl ">
            Ecommerce Assignment
          </Link>
          <div className="flex  items-center space-x-8">
            <div className="hidden md:block  duration-500">
              <div className=" flex space-x-6">
                <Link to="/">
                  <p className="hover:text-red-400 hover:scale-105">HOME</p>
                </Link>
              </div>
            </div>
            <Link
              to="/Cart"
              className="hover:bg-white hover:text-red-500"
            >
              <span className="absolute ml-8 pl-1 pr-1 text-white bg-red-400 rounded-xl self-end  hover:bg-white hover:text-red-500">
                {cartTotal}
              </span>
              <BiCart className="text-5xl " />
            </Link>

            <div onClick={Toggle} className="sm:hidden">
              <Hamburger />
            </div>
          </div>
        </div>
      </div>
      <div className="transition-all duration-500 "></div>
    </div>
  );
};

export default withCart(memo(Nav));

