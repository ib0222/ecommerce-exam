import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
function Header() {
  return (
    <div>
      <div id='header1' className='w-full bg-[#1e1e27] h-12 text-white flex justify-around items-center'>
      <ul>
        <li className='uppercase'>free shipping on all u.s orders over $50</li>
      </ul>
      <ul className='flex gap-10'>
        <li className='flex items-center gap-2'> USD <FaAngleDown/></li>
        <li className='flex items-center gap-2'> English <FaAngleDown/></li>
        <li className='flex items-center gap-2'> My Account <FaAngleDown/></li>
      </ul>
    </div>
    <div id='header2' className='w-full h-24 text-white flex justify-around items-center sticky'>
      <ul>
        <li className='text-2xl text-[#1e1e27] font-bold'>COLO<span className='text-[#fe4c50;]'>SHOP</span></li>
      </ul>
      <ul className='flex gap-10 text-black font-semibold'>
        <li className='flex items-center gap-2'>HOME</li>
        <li className='flex items-center gap-2'>SHOP</li>
        <li className='flex items-center gap-2'>PROMOTION</li>
        <li className='flex items-center gap-2'>PAGES</li>
        <li className='flex items-center gap-2'>BLOG</li>
        <li className='flex items-center gap-2'>CONTACT</li>
        <li className='flex items-center gap-2'><FaSearch/></li>
        <li className='flex items-center gap-2'><IoIosPerson size={25}/></li>
        <li className='flex items-center gap-2 bg-slate-300 p-4 rounded-full'><FaShoppingCart/></li>
      </ul>
    </div>
    </div>
    
  )
}

export default Header