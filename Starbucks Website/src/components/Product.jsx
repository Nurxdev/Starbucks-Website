import React from "react";
import { products } from "../modules";
const Product = () => {
  return (
    <section id="product" className="py-20 bg-white px-5 md:px-28 ">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 uppercase">
            Coffee at Home
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">
            Bring the Starbucks experience to your home
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-3xl hover:shadow-xl transition group"
            >
              <div className="mb-6 group-hover:scale-105 transition">
                <img src={product.img} className="h-[300px] w-full" alt="" />
              </div>
              <p className="text-sm text-green-700 font-semibold mb-2">{product.type}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-700">{product.price}</span>
                <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full font-semibold transition cursor-pointer">Buy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
