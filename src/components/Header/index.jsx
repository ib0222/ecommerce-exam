import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="sticky w-full top-0 z-50">
      <div className="w-full h-24 text-white flex justify-around items-center z-20 bg-white shadow-lg">
        <ul>
          <li className="text-2xl text-[#1e1e27] font-bold">
            COLO<span className="text-[#fe4c50]">SHOP</span>
          </li>
        </ul>
        <ul className="flex gap-10 text-black font-semibold ">
          <li className="flex items-center gap-2">
            <Link to="/">HOME</Link>
          </li>
          <li className="flex items-center gap-2">
            <Link to="shop">SHOP</Link>
          </li>
          <li className="flex items-center gap-2">PROMOTION</li>
          <li className="flex items-center gap-2">PAGES</li>
          <li className="flex items-center gap-2">BLOG</li>
          <li className="flex items-center gap-2">CONTACT</li>
          <li className="flex items-center gap-2">
            <FaSearch />
          </li>
          <li className="flex items-center gap-2">
            <IoIosPerson size={25} />
          </li>
          <li className="flex items-center gap-2 bg-slate-300 p-4 rounded-full">
            <FaShoppingCart />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
