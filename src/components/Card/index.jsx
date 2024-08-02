import React from "react";

const Card = () => {
  return (
    <div className="w-full border">
      <div className="flex justify-center">
        <img src="src/assets/product_1.png" alt="" />
      </div>
      <div className="text-center text-balance">
        Fujifilm X100T 16 MP Digital Camera (Silver)
      </div>
      <div className="text-center mt-2 text-red-500">
        $520 <span className="line-through ml-2 text-gray-400">$590</span>
      </div>
      <button className="bg-red-500 text-white w-full py-2 mt-4">Add To Cart</button>
    </div>
  );
};

export default Card;
