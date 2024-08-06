// Header.jsx
import React, { useContext } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoIosPerson } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import HamburgerMenu from '../HamburgerMenu';
import '../Header/Header.css';
import {CardContext} from "../../context/CardContext"

function Header() {

  const {favorites,wishlist} = useContext(CardContext)

  return (
    <div className="sticky w-full top-0 z-50">
      <div className="w-full h-24 text-white flex justify-between items-center z-20 bg-white shadow-lg px-4 md:px-8">
        <ul>
          <li className="text-2xl text-[#1e1e27] font-bold">
            COLO<span className="text-[#fe4c50]">SHOP</span>
          </li>
        </ul>
        <ul className="hidden md:flex gap-10 text-black font-semibold">
          <li className="flex items-center gap-2 hover:text-gray-400 ease-in-out duration-200">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="flex items-center gap-2 hover:text-gray-400 ease-in-out duration-200">
            <NavLink to="shop">SHOP</NavLink>
          </li>
          <li className="flex items-center gap-2 hover:text-gray-400 ease-in-out duration-200">
            PROMOTION
          </li>
          <li className="flex items-center gap-2 hover:text-gray-400 ease-in-out duration-200">
            PAGES
          </li>
          <li className="flex items-center gap-2 hover:text-gray-400 ease-in-out duration-200">
            BLOG
          </li>
          <li className="flex items-center gap-2 hover:text-gray-400 ease-in-out duration-200">
            <NavLink to="addproduct">ADD PRODUCT</NavLink>
          </li>
          <li className="flex items-center gap-2 hover:text-gray-400 ease-in-out duration-200">
            <FaSearch />
          </li>
          <li className="flex items-center gap-2 hover:text-gray-400 ease-in-out duration-200">
            <IoIosPerson size={25} />
          </li>
          <NavLink to="favorites">
            <li className="flex items-center gap-2 hover:text-gray-400 ease-in-out duration-200 bg-slate-300 p-4 rounded-full relative">
              {favorites.length > 0 && <div className='absolute left-8 bottom-8 bg-red-500 text-white p-2 rounded-full w-6 h-6 text-center flex justify-center items-center'>{favorites.length}</div>}
              <FaShoppingCart />
            </li>
          </NavLink>
          <NavLink to="favorites">
            <li className="flex items-center gap-2 hover:text-gray-400 ease-in-out duration-200 bg-slate-300 p-4 rounded-full relative">
              {wishlist.length > 0 && <div className='absolute left-8 bottom-8 bg-red-500 text-white p-2 rounded-full w-6 h-6 text-center flex justify-center items-center'>{wishlist.length}</div>}
              <FaHeart />
            </li>
          </NavLink>
            
        </ul>
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default Header;
