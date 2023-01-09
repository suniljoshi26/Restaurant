import React from "react";
import Logo from "./img/logo.png";
import { MdShoppingBasket } from "react-icons/md";
const Header = () => {
  return (
    <div className="fixed z-20 w-screen p-6 px-16 bg-slate-300">
      {/* desktop & tablat */}
      <div className="hidden w-full h-full md:flex">
        <div className="flex items-center gap-2">
          <img className="object-cover w-8" src={Logo} alt="logo" />
          <p className="text-xl font-bold text-headingColor">City</p>
        </div>
        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
            Menu
          </li>
          <li className="text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
            About Us
          </li>
          <li className="text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
            Service
          </li>
          <li className="text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
            Home
          </li>
        </ul>
        <div className="relative flex items-center justify-center ">
          <MdShoppingBasket className="ml-8 text-2xl cursor-pointer text-textColor" />{" "}
          <div className="w-5 h-5 mb-4 rounded-full bg-cartNumBg">
            <p className="text-sm font-semibold text-center text-white">2</p>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="block h-full p-4 bg-blue-500 md:hidden"></div>
    </div>
  );
};

export default Header;
