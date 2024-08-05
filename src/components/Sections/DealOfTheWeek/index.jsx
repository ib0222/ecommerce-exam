import React from "react";

const DealOfTheWeek = () => {
  return (
    <div className="bg-[#f2f2f2] mt-10">
      <div className="flex justify-around max-w-7xl mx-auto">
        <div>
          <img src="src/assets/deal_ofthe_week.png" alt="" />
        </div>
        <div className="flex items-center">
          <div>
            <div className="text-4xl text-center font-medium">Deal Of The Week</div>
            <div className="w-full flex justify-center mt-4">
              <div className="bg-red-500 w-16 h-1"></div>
            </div>
            <div className="mt-10">
              <ul className="flex justify-center gap-4">
                <li className="text-center bg-white p-16 rounded-full shadow-lg flex flex-col items-center justify-center w-24 h-24">
                  <div className="text-red-500 text-5xl font-semibold">2</div>
                  <div>Day</div>
                </li>
                <li className="text-center bg-white p-16 rounded-full shadow-lg flex flex-col items-center justify-center w-24 h-24">
                  <div className="text-red-500 text-5xl font-semibold">23</div>
                  <div>Hours</div>
                </li>
                <li className="text-center bg-white p-16 rounded-full shadow-lg flex flex-col items-center justify-center w-24 h-24">
                  <div className="text-red-500 text-5xl font-semibold">41</div>
                  <div>Mins</div>
                </li>
                <li className="text-center bg-white p-16 rounded-full shadow-lg flex flex-col items-center justify-center w-24 h-24">
                  <div className="text-red-500 text-5xl font-semibold">58</div>
                  <div>Sec</div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-10">
              <button className="text-white px-8 py-2 bg-[#1e1e27] rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheWeek;
