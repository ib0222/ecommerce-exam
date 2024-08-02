import React from "react";
import "../../App.css";

const Section1 = () => {
  return (
    <div id="section1" className="relative w-full h-screen">
      <div className="h-full">
        <img src="src/assets/slider_1.jpg" alt="" className="object-cover w-full h-full"/>
      </div>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-left w-[1000px]">
        <div className="uppercase">Spring / Summer Collection 2017</div>
        <div className="text-6xl mt-4 w-[600px]">Get up to 30% Off New Arrivals</div>
        <div><button className="px-6 py-1 bg-red-500 text-white rounded-md mt-6">SHOP NOW</button></div>
      </div>
      <div className="mt-4 flex justify-center gap-7">
        <div id="card" className="relative h-56">
          <img
            src="src/assets/banner_1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="bg-white text-black p-4 font-bold">WOMEN'S</h1>
          </div>
        </div>
        <div id="card" className="relative h-56">
          <img
            src="src/assets/banner_2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="bg-white text-black p-4 font-bold">ACCESSORIE'S</h1>
          </div>
        </div>
        <div id="card" className="relative h-56">
          <img
            src="src/assets/banner_3.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="bg-white text-black p-4 font-bold">MEN'S</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
