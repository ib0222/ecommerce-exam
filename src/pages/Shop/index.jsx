import React from "react";
import Card from "../../components/Card";
const Shop = () => {
  return (
    <div className="flex flex-col gap-10 mt-10 max-w-7xl mx-auto lg:flex-row md:flex-row justify-center items-center md:items-start">
      <ul className="space-y-7 m-10 ">
        <li className="text-xl w-48">Product Category</li>
        <li className="text-[#51545f] hover:text-red-500 duration-150 ease-in-out cursor-pointer">
          Men
        </li>
        <li className="text-[#51545f] hover:text-red-500 duration-150 ease-in-out cursor-pointer">
          Women
        </li>
        <li className="text-[#51545f] hover:text-red-500 duration-150 ease-in-out cursor-pointer">
          Accessories
        </li>
        <li className="text-[#51545f] hover:text-red-500 duration-150 ease-in-out cursor-pointer">
          New Arrivals
        </li>
        <li className="text-[#51545f] hover:text-red-500 duration-150 ease-in-out cursor-pointer">
          Collection
        </li>
        <li className="text-[#51545f] hover:text-red-500 duration-150 ease-in-out cursor-pointer">
          Shop
        </li>
        <hr />
        <li className="text-xl">Filter by Price</li>
        <li><input type="range" className="accent-red-500 w-full" /></li>
        <li><button className="bg-[#1e1e27] text-white w-full rounded p-1">Filter</button></li>
        <hr />
        <li className="text-xl">Sizes</li>
        <li><input type="checkbox" className="accent-red-500" /><span className="ml-3 text-[#51545f]">S</span></li>
        <li><input type="checkbox" className="accent-red-500"/><span className="ml-3 text-[#51545f]">M</span></li>
        <li><input type="checkbox" className="accent-red-500"/><span className="ml-3 text-[#51545f]">L</span></li>
        <li><input type="checkbox" className="accent-red-500"/><span className="ml-3 text-[#51545f]">X</span></li>
        <li><input type="checkbox" className="accent-red-500"/><span className="ml-3 text-[#51545f]">XXL</span></li>
        <hr />
        <li className="text-xl">Color</li>
        <li><input type="checkbox" className="accent-red-500"/><span className="ml-3 text-[#51545f]">Black</span></li>
        <li><input type="checkbox" className="accent-red-500"/><span className="ml-3 text-[#51545f]">Pink</span></li>
        <li><input type="checkbox" className="accent-red-500"/><span className="ml-3 text-[#51545f]">White</span></li>
        <li><input type="checkbox" className="accent-red-500"/><span className="ml-3 text-[#51545f]">Blue</span></li>
        <li><input type="checkbox" className="accent-red-500"/><span className="ml-3 text-[#51545f]">Orange</span></li>
        <hr />
      </ul>

      <div className="grid grid-cols-1 mx-auto lg:grid-cols-4 md:grid-cols-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Shop;
