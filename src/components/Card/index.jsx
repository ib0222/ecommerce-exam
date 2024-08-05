import React from "react";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";

const Card = ({image,title,price,}) => {
  return (
    <div className="w-full border group relative">
      <div className="flex justify-center">
        <img
          src={image}
          alt="Fujifilm X100T 16 MP Digital Camera (Silver)"
        />
      </div>
      <div className="text-center text-balance">
        <Link to="productpage">
        {title}
        </Link>
      </div>
      <div className="text-center mt-2 text-red-500">
        {price} <span className="line-through ml-2 text-gray-400">$590</span>
      </div>
      <button className="bg-red-500 text-white w-full py-2 mt-4 opacity-0 hover:bg-red-300 ease-in-out group-hover:opacity-100 transition-opacity duration-300">
        Add To Cart
      </button>
      <button className="bg-black p-1 rounded-full absolute right-3 top-3 bg-transparent">
        <IoIosHeartEmpty className="text-red-700" size={"20px"} />
      </button>
    </div>
  );
};

export default Card;
