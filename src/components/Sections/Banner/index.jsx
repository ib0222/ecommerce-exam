import React from 'react';

const Banner = () => {
  return (
    <div className="mt-4 flex justify-center gap-7">
      <div id="card" className="relative h-56 group">
        <img
          src="src/assets/banner_1.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="bg-white text-black p-4 font-bold">WOMEN'S</h1>
        </div>
      </div>
      <div id="card" className="relative h-56 group">
        <img
          src="src/assets/banner_2.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="bg-white text-black p-4 font-bold">ACCESSORIE'S</h1>
        </div>
      </div>
      <div id="card" className="relative h-56 group">
        <img
          src="src/assets/banner_3.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="bg-white text-black p-4 font-bold">MEN'S</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
