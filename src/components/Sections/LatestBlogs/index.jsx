import React from "react";

const LatestBlogs = () => {
  return (
    <div className="mt-10">
      <div className="text-4xl text-center">Latest Blogs</div>
      <div className="w-full flex justify-center mt-4">
        <div className="bg-red-600 w-16 h-1"></div>
      </div>
      <div className="mt-4 flex justify-center gap-7">
        <div id="card" className="relative h-56 group">
          <img
            src="src/assets/blog_1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-10">
            <div className="bg-white p-3">
              <div className="text-lg text-center font-medium">Here are the trends I see coming this fall</div>
              <div className="uppercase text-xs mt-2 text-center text-gray-500">by admin | dec 01, 2017</div>
              <div className="text-red-500 text-center cursor-pointer hover:underline">Read more</div>
            </div>
          </div>
        </div>
        <div id="card" className="relative h-56 group">
          <img
            src="src/assets/blog_2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-10">
            <div className="bg-white p-3">
              <div className="text-lg text-center font-medium">Here are the trends I see coming this fall</div>
              <div className="uppercase text-xs mt-2 text-center text-gray-500">by admin | dec 01, 2017</div>
              <div className="text-red-500 text-center cursor-pointer hover:underline">Read more</div>
            </div>
          </div>
        </div>
        <div id="card" className="relative h-56 group">
          <img
            src="src/assets/blog_3.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-10">
            <div className="bg-white p-3">
              <div className="text-lg text-center font-medium">Here are the trends I see coming this fall</div>
              <div className="uppercase text-xs mt-2 text-center text-gray-500">by admin | dec 01, 2017</div>
              <div className="text-red-500 text-center cursor-pointer hover:underline">Read more</div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default LatestBlogs;
