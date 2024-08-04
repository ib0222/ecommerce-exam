import React from "react";
import sliderImage from '../../../assets/slider_1.jpg'; // Adjust the import based on your actual image path

const Section1 = () => {
  return (
    <div id="section1" className="relative w-full h-[700px] overflow-hidden">
      <img src={sliderImage} alt="" className="w-full h-auto min-h-full object-cover" />
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-left w-[80%] max-w-[700px]">
        <div className="uppercase">Spring / Summer Collection 2017</div>
        <div className="text-6xl mt-4 text-balance">Get up to 30% Off New Arrivals</div>
        <div>
          <button className="px-6 py-1 bg-red-500 text-white rounded-md mt-6">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
