"use client";

import { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import axios from "axios";
import { useContext } from "react";
import {CartContext} from "@/context/CartContext";

export default function ProductForShop() {
  

  const categories = [
    {
      name:"All",
      id:0
    },
    {
      name:"Honey",
      id:1
    },
    {
      name:"Shilajit",
      id:2
    },
    {
      name:"Tea",
      id:3
    },
    {
      name:"Pickles",
      id:4
    }
  ]
    
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [products,setProducts]=useState([]);
  const [message,setMessage]=useState("");
  
  
 
  useEffect(() => {

  const url =
    activeCategory.id > 0
      ? `http://localhost:5000/api/products/category/${activeCategory.id}`
      : `http://localhost:5000/api/products`;

  axios.get(url)
    .then((res) => {
      if (Array.isArray(res.data)) {
        setProducts(res.data);
        setMessage("");
      } else {
        setProducts([]);
        setMessage(res.data.message);
      }
    })
    .catch((err) => {
      console.error(err);
      setProducts([]);
      setMessage("No products found.");
    });

}, [activeCategory]);

  

  

  const {cart,addToCart,removeFromCart,clearCart,increaseAmount,decreaseAmount,itemAmount,total}=useContext(CartContext);
  
 useEffect(()=>{
  console.log("Cart",cart);
},[cart]);



  return (
      <div className="lg:py-20 py-10">

        {/* Category Tabs */}
        <div className="flex justify-center lg:gap-10 gap-5 lg:text-lg text-sm lg:mb-30 mb-20">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category)}
              className={`pb-2 p-1 transition-all duration-300 hover:cursor-pointer ${
                activeCategory.id === category.id
                  ? "text-[#93C553] border-b-2 border-black bg-[#EDF2E0]"
                  : "text-gray-600 hover:text-[#93C553]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Show message if no products */}
          {products.length === 0 && message && (
            <div className="flex justify-center items-center w-full py-10">
              <p className="text-gray-500 text-lg">{message}</p>
            </div>
          )}
                  
        {/* Products Grid Large */}
        {products.length>0 && (
        <div className="py-10 hidden lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-10 justify-items-center lg:mx-18 md:mx-10">
          {products.map((product) => (
          <div
          key={product.id}
          style={{height:320}}>
            <motion.div
              whileHover="hover"
              animate="rest"
              className="relative bg-[#779768]/10 rounded-xl shadow-xl shadow-[#C4DBBA] text-center py-10 w-70"
              style={{height:260}}
              variants={{
                rest: { height:260,top: 0, },
                hover: { height:320,top: -60 } // move the card up by the extra height
                }}
            >
              {/* Image */}
                <div className="flex justify-center -mt-20">
                  <img
                  src={product.photos?.[0]?.imagePath
                        ? `http://localhost:5000/${product.photos[0].imagePath}`
                        : "/error.png"
                    }
                  alt={product.productName}
                  className="h-48 object-contain drop-shadow-xl relative"
                />
                </div>

              {/* Title */}
              <h3 className="text-xl font-medium mt-4">
                {product.productName}
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
               <button className="bg-[#609647] text-white text-sm px-3 py-2 rounded-lg hover:cursor-pointer hover:bg-[#93C553]">
                Order Now
                </button>

                <button
                  onClick={()=>addToCart(product,product.id)}
                 className="bg-[#609647] text-white text-sm px-3 py-2 rounded-lg hover:cursor-pointer hover:bg-[#93C553]">
                Add to Cart
                </button>
              </motion.div>

            </motion.div>
          </div>
          ))}
        </div>
        )}

        {/* Products Grid Mobile */}
        {
          products.length>0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-30 gap-10 md:hidden block justify-items-center">
          
          {products.map((product) => (
            <div
            key={product.id}
            style={{height:320}}>
            <motion.div
              whileHover="hover"
              animate="rest"
              className="relative bg-[#779768]/10 rounded-xl shadow-[#C4DBBA] py-10 text-center w-80"
              style={{height:260}}
              variants={{
                rest: { height:260,top: 0 },
                hover: { height:320,top: -60 } // move the card up by the extra height
                }}
            >
              {/* Image */}
                <div className="flex justify-center -mt-20">
                    <img
                  src={
                        product.photos?.[0]?.imagePath
                      ? `http://localhost:5000/${product.photos[0].imagePath}`
                      : "/error.png"
                  }
                  alt={product.productName}
                  className="h-48 object-contain drop-shadow-xl relative"
                />
                </div>

              {/* Title */}
              <h3 className="text-xl font-medium mt-4">
                {product.productName}
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

                <button 
                onClick={()=>addToCart(product)}
                className="bg-[#609647] text-white text-sm px-3 py-2 rounded-lg">
                Add to Cart
                </button>
              </motion.div>

            </motion.div>
          </div>
          ))}
        </div>
          )
        }

      </div>
  );
}