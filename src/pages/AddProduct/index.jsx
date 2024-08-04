import React from "react";

function AddProduct() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Product</h2>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Product Title"
            className="w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 "
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Product Price"
            className="w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Product Description"
            className="w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>
        <div>
          <input
            type="url"
            placeholder="Product Image URL"
            className="w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2"
          />
          
        </div>
        <div>
          <select
            id="category"
            className="bg-white border-2 border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder:text-transparent"
          >
            <option value="Men's Clothing">Men's Clothing</option>
            <option value="Jewelery">Jewelery</option>
            <option value="Electronics">Electronics</option>
            <option value="Women's clothing">Women's clothing</option>
          </select>
        </div>
        <div></div>
        <button className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Post
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
