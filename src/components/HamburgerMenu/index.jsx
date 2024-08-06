// HamburgerMenu.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes,FaSearch,FaPersonBooth, FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-black">
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>
      {isOpen && (
        <ul className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-end px-4 gap-4 py-4">
          <li className="hover:text-gray-400 text-black">
            <NavLink to="/" onClick={() => setIsOpen(false)}>HOME</NavLink>
          </li>
          <li className="hover:text-gray-400 text-black">
            <NavLink to="shop" onClick={() => setIsOpen(false)}>SHOP</NavLink>
          </li>
          <li className="hover:text-gray-400 text-black" onClick={() => setIsOpen(false)}>PROMOTION</li>
          <li className="hover:text-gray-400 text-black" onClick={() => setIsOpen(false)}>PAGES</li>
          <li className="hover:text-gray-400 text-black" onClick={() => setIsOpen(false)}>BLOG</li>
          <li className="hover:text-gray-400 text-black">
            <NavLink to="addproduct" onClick={() => setIsOpen(false)}>ADD PRODUCT</NavLink>
          </li>
          <li className="hover:text-gray-400 text-black" onClick={() => setIsOpen(false)}><FaSearch /></li>
          <li className="hover:text-gray-400 text-black" onClick={() => setIsOpen(false)}><FaPersonBooth size={25} /></li>
          <NavLink to="favorites">
            <li className="hover:text-gray-400 text-black bg-slate-300 p-4 rounded-full" onClick={() => setIsOpen(false)}>
              <FaShoppingCart />
            </li>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
