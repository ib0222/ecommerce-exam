import React from "react";
import Card from "../../Card";
const Section5 = () => {
  return (
    <div className="mt-16 max-w-7xl mx-auto">
      <div className="text-4xl text-center">Best Sellers</div>
      <div className="w-full flex justify-center mt-4">
        <div className="bg-red-600 w-16 h-1"></div>
      </div>
      <div className="grid grid-cols-5 mt-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Section5;
