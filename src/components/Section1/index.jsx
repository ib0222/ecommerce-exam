import React from "react";
import "../../App.css";
const Section1 = () => {
  return (
    <div id="section1" className="relative w-full">
      <div className="">
        <img src="src/assets/slider_1.jpg" alt="" className="object-cover"/>
      </div>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-left w-[1000px]">
        <div className="uppercase">Spring / Summer Collection 2017</div>
        <div className="text-6xl mt-4 w-[600px]">Get up to 30% Off New Arrivals</div>
        <div><button className="px-6 py-1  bg-red-500 text-white rounded-md mt-6">SHOP NOW</button></div>
      </div>
    </div>
  );
};

export default Section1;
