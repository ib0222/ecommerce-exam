import React from "react";

const ProductPage = () => {
  return (
     <div class="bg-gray-100">
     <div class="max-w-7xl mx-auto p-6">
       <div class="bg-white shadow-lg rounded-lg overflow-hidden">
         <div class="flex">
           <div class="w-1/3 p-4">
             <div class="flex flex-col space-y-4">
               <img src="https://via.placeholder.com/150" class="border border-gray-200 rounded-lg"/>
               <img src="https://via.placeholder.com/150" class="border border-gray-200 rounded-lg"/>
               <img src="https://via.placeholder.com/150" class="border border-gray-200 rounded-lg"/>
             </div>
           </div>
           <div class="w-1/3 p-4">
             <img src="https://via.placeholder.com/300" class="border border-gray-200 rounded-lg"/>
           </div>
           <div class="w-1/3 p-4">
             <h2 class="text-2xl font-bold">Pocket cotton sweatshirt</h2>
             <p class="text-gray-600 mt-2">Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
             <div class="mt-4">
               <span class="text-gray-400 line-through">$629.99</span>
               <span class="text-red-500 text-2xl font-bold">$495.00</span>
             </div>
             <div class="mt-4">
               <span class="inline-block bg-yellow-400 text-white px-2 py-1 rounded-lg">★★★★☆</span>
             </div>
             <div class="mt-4">
               <span class="text-sm text-gray-600">Select Color:</span>
               <div class="flex space-x-2 mt-2">
                 <div class="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></div>
                 <div class="w-6 h-6 bg-black rounded-full cursor-pointer"></div>
                 <div class="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></div>
               </div>
             </div>
             <div class="mt-4">
               <span class="text-sm text-gray-600">Quantity:</span>
               <div class="flex items-center mt-2">
                 <button class="px-3 py-1 bg-gray-200 text-gray-600 rounded-lg">-</button>
                 <span class="px-4">1</span>
                 <button class="px-3 py-1 bg-gray-200 text-gray-600 rounded-lg">+</button>
               </div>
             </div>
             <div class="mt-6">
               <button class="w-full bg-red-500 text-white py-2 rounded-lg">ADD TO CART</button>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
  );
};

export default ProductPage;
