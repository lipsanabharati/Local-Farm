"use client";

import { useState } from "react";
import { easeInOut, motion } from "framer-motion";

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("Honey");

  const categories = ["Honey", "Tea", "Coffee", "Shilajit"];

  const products = [
    {
      id: 1,
      title: "Bee Pollen",
      price: 2500,
      category: "Honey",
      image: "/bee.png",
    },
    {
      id: 2,
      title: "Akabare Achar",
      price: 3000,
      category: "Honey",
      image: "/achar.png",
    },
    {
      id: 3,
      title: "Mad Honey",
      price: 4000,
      category: "Honey",
      image: "/mad.png",
    },
  ];

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
      <div className="h-150 md:h-150 lg:h-200">

        {/* Category Tabs */}
        <div className="flex justify-center lg:gap-10 gap-5 lg:text-lg text-sm lg:mb-30 mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`pb-2 p-1 transition-all duration-300 ${
                activeCategory === category
                  ? "text-[#93C553] border-b-2 border-black bg-[#EDF2E0]"
                  : "text-gray-600 hover:text-[#93C553]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid Large */}
        <div className="md:grid md:grid-cols-3 md:gap-10 gap-20 hidden md:block">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover="hover"
              animate="rest"
              className="relative bg-[#779768]/10 rounded-3xl shadow-xl py-10 text-center"
              style={{height:260}}
              variants={{
                rest: { height:260,top: 0 },
                hover: { height:320,top: -60 } // move the card up by the extra height
                }}
            >
              {/* Image */}
                <div className="flex justify-center -mt-20">
                    <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 object-contain drop-shadow-xl relative"
                />
                </div>

              {/* Title */}
              <h3 className="text-xl font-medium mt-4">
                {product.title}
              </h3>

              {/* Price */}
              <p className="text-gray-600">
                {product.price} Rs
              </p>

              {/* Buttons */}
              <motion.div
                variants={{
                  rest: { opacity:0},
                  hover: {opacity:1},
                }}
                transition={{ duration: 0.2}}
                className="flex justify-center gap-4 mt-6 p-2"
              >
               <button className="bg-[#609647] text-white text-sm px-3 py-2 rounded-lg">
                Order Now
                </button>

                <button className="bg-[#609647] text-white text-sm px-3 py-2 rounded-lg">
                Add to Cart
                </button>
              </motion.div>

            </motion.div>
          ))}
        </div>

        {/* Products Grid Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-30 gap-20 md:hidden block">
         
            <motion.div
              key={products[0].id}
              whileHover="hover"
              animate="rest"
              className="relative bg-[#779768]/10 rounded-3xl shadow-xl py-10 text-center"
              style={{height:260}}
              variants={{
                rest: { height:260,top: 0 },
                hover: { height:320,top: -60 } // move the card up by the extra height
                }}
            >
              {/* Image */}
                <div className="flex justify-center -mt-20">
                    <img
                  src={products[0].image}
                  alt={products[0].title}
                  className="h-48 object-contain drop-shadow-xl relative"
                />
                </div>

              {/* Title */}
              <h3 className="text-xl font-medium mt-4">
                {products[0].title}
              </h3>

              {/* Price */}
              <p className="text-gray-600">
                {products[0].price} Rs
              </p>

              {/* Buttons */}
              <motion.div
                variants={{
                  rest: { opacity:0},
                  hover: {opacity:1},
                }}
                transition={{ duration: 0.2}}
                className="flex justify-center gap-4 mt-6 p-2"
              >
               <button className="bg-[#609647] text-white text-sm px-3 py-2 rounded-lg">
                Order Now
                </button>

                <button className="bg-[#609647] text-white text-sm px-3 py-2 rounded-lg">
                Add to Cart
                </button>
              </motion.div>

            </motion.div>
         
        </div>

      </div>
  );
}