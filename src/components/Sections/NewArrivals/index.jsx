import React, { useContext } from "react";
import Card from "../../Card"
import { CardContext } from "../../../context/CardContext";

const NewArrivals = () => {
  const {data} = useContext(CardContext)

  return (
    <div className="mt-16 max-w-7xl mx-auto">
      <div className="text-4xl text-center">New Arrivals</div>
      <div className="w-full flex justify-center mt-4">
        <div className="bg-red-600 w-16 h-1"></div>
      </div>
      <div className="flex justify-center mt-4">
        <ul className="flex">
          <li className="uppercase px-8 py-2 border rounded-sm">All</li>
          <li className="uppercase px-8 py-2 border rounded-sm">Women's</li>
          <li className="uppercase px-8 py-2 border rounded-sm">accessories</li>
          <li className="uppercase px-8 py-2 border rounded-sm">men's</li>
        </ul>
      </div>
      <div className="grid grid-cols-5 mt-10">
        {data.map((item) => (
          <Card key={item.id} image={item.image} title={item.title} price={item.price}/>
        ))}
        
      </div>
    </div>
  );
};

export default NewArrivals;
