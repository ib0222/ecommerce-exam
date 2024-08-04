import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IoReloadCircle } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
const Section6 = () => {
  return (
    <div className="mt-16 flex justify-center">
      <ul className="flex gap-1 flex-col lg:flex-row">
        <li className="flex items-center gap-4 bg-[#f3f3f3] px-7 py-3">
          <div>
            <FaShippingFast size={30} color="red"/>
          </div>
          <div>
            <div className="uppercase text-sm">Free Shipping</div>
            <div className="text-sm text-gray-600 text-[12px]">
              Suffered Alteration in Some Form
            </div>
          </div>
        </li>
        <li className="flex items-center gap-4 bg-[#f3f3f3] px-7 py-3">
          <div>
            <FaMoneyBillAlt size={30} color="red"/>
          </div>
          <div>
            <div className="uppercase text-sm">Cach on delivery</div>
            <div className="text-sm text-gray-600 text-[12px]">
              The Internet Tend To Repeat
            </div>
          </div>
        </li>
        <li className="flex items-center gap-4 bg-[#f3f3f3] px-7 py-3">
          <div>
            <IoReloadCircle size={30} color="red"/>
          </div>
          <div>
            <div className="uppercase text-sm">45 Days return</div>
            <div className="text-sm text-gray-600 text-[12px]">
              Making it Look Like Readable
            </div>
          </div>
        </li>
        <li className="flex items-center gap-4 bg-[#f3f3f3] px-7 py-3">
          <div>
            <IoTime size={30} color="red"/>
          </div>
          <div>
            <div className="uppercase text-sm">Opening all week</div>
            <div className="text-sm text-gray-600 text-[12px]">8AM - 09PM</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Section6;
