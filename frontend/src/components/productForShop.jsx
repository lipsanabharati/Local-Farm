"use client";

import { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function ProductForShop() {
  // const categories = [
  //   {
  //     name:"All",
  //     id:0
  //   },
  //   {
  //     name:"Honey",
  //     id:1
  //   },
  //   {
  //     name:"Shilajit",
  //     id:2
  //   },
  //   {
  //     name:"Tea",
  //     id:3
  //   },
  //   {
  //     name:"Pickles",
  //     id:4
  //   }
  // ]
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  // const [showButtons,setShowButtons]=useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `https://api.localfarmnepal.com/api/product-categories`,
        );
        setCategories(res.data);
        // console.log(res.data);
        // set default category here
        setActiveCategory(res.data[0]);
      } catch (err) {
        setCategories([]);
        // console.log(err);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!activeCategory) return;

    const url =
      activeCategory.id > 0
        ? `https://api.localfarmnepal.com/api/products/category/${activeCategory.id}`
        : `https://api.localfarmnepal.com/api/products`;

    axios
      .get(url)
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
        // console.error(err);
        setProducts([]);
        setMessage("No products found.");
      });
  }, [activeCategory]);

  // console.log(categories)

  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
    itemAmount,
    total,
  } = useContext(CartContext);

  //  useEffect(()=>{
  //   console.log("Cart",cart);
  // },[cart]);

  return (
    <div className="lg:py-20 py-15">
      {/* Category Tabs */}
      <div className="flex justify-center lg:gap-10 gap-5 lg:text-lg text-sm lg:mb-20 mb-20 ">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category)}
            className={`pb-2 p-1 transition-all duration-300 hover:cursor-pointer text-sm md:text-lg ${
              activeCategory?.id === category.id
                ? "text-[#93C553] border-b-2 border-black bg-[#EDF2E0]"
                : "text-gray-600 hover:text-[#93C553]"
            }`}
            aria-label="category button"
          >
            {category.categoryName}
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
      {products.length > 0 && (
        <div className="py-10 hidden lg:grid lg:grid-cols-3 gap-10 justify-items-center lg:mx-18">
          {products.map((product) => (
            <div key={product.id} style={{ height: 320 }}>
              <motion.div
                whileHover="hover"
                animate="rest"
                className="relative bg-[#779768]/10 rounded-xl shadow-xl shadow-[#C4DBBA] text-center py-10 w-70"
                style={{ height: 260 }}
                variants={{
                  rest: { height: 260, top: 0 },
                  hover: { height: 320, top: -60 }, // move the card up by the extra height
                }}
              >
                {/* Image */}
                <div className="flex justify-center -mt-20">
                  <Image
                    src={
                      product.photos?.[0]?.imagePath
                        ? `https://api.localfarmnepal.com/${product.photos[0].imagePath}`
                        : "/https://res.cloudinary.com/dpff5cxm3/image/upload/v1779941841/error_pr4qab.webp"
                    }
                    alt={product.productName}
                    className="h-48 object-contain drop-shadow-xl relative"
                    width={250}
                    height={250}
                    unoptimized
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium mt-4">
                  {product.productName}
                </h3>

                {/* Price */}
                <p className="text-gray-600">{product.price} Rs</p>

                {/* Buttons */}
                <motion.div
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex justify-center gap-4 mt-6 p-2"
                >
                  <Link
                    href={`/product/${product.id}`}
                    className="bg-[#609647] text-white text-sm px-3 py-2 rounded-lg hover:cursor-pointer hover:bg-[#93C553]"
                    aria-label="order now"
                  >
                    Order Now
                  </Link>

                  <button
                    onClick={() => addToCart(product, product.id)}
                    className="bg-[#609647] text-white text-sm px-3 py-2 rounded-lg hover:cursor-pointer hover:bg-[#93C553]"
                    aria-label="add to cart button"
                  >
                    Add to Cart
                  </button>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      )}

      {/* Products Grid Mobile and tablet */}
      {products.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-15 gap-10 lg:hidden block justify-items-center mb-20 w-[80%] mx-auto">
          {products.map((product) => (
            <div key={product.id} style={{ height: 320 }}>
              <motion.div
                // onClick={()=>setShowButtons(showButtons===product.id? null : product.id)}
                // whileHover="hover"
                // animate="rest"
                className="relative bg-[#779768]/10 rounded-xl shadow-[#C4DBBA] py-10 text-center w-80"
                 style={{ height: 300 }}
                // variants={{
                //   rest: { height: 260, top: 0 },
                //   hover: { height: 320, top: -60 }, // move the card up by the extra height
                // }}
              >
                {/* Image */}
                <div className="flex justify-center -mt-20">
                  <Image
                    src={
                      product.photos?.[0]?.imagePath
                        ? `https://api.localfarmnepal.com/${product.photos[0].imagePath}`
                        : "/https://res.cloudinary.com/dpff5cxm3/image/upload/v1779941841/error_pr4qab.webp"
                    }
                    alt={product.productName}
                    className="h-48 object-contain drop-shadow-xl relative"
                    width={250}
                    height={250}
                    unoptimized
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium mt-4">
                  {product.productName}
                </h3>

                {/* Price */}
                <p className="text-gray-600">{product.price} Rs</p>

                {/* Buttons */}
                <motion.div
                  // variants={{
                  //   rest: { opacity: 0 },
                  //   hover: { opacity: 1 },
                  // }}
              //      initial={{opacity:0}}
              // animate={{opacity:showButtons===product.id? 1:0,
              //   pointerEvents: showButtons===product.id? "auto":"none",
              // }}
              
              //     transition={{ duration: 0.2 }}
                  className="flex justify-center gap-4 mt-6 p-2"
                >
                  <Link
                    href={`/product/${product.id}`}
                    className="bg-[#609647] text-white text-sm px-3 py-2 rounded-lg"
                    aria-label="order now"
                     onClick={(e) => e.stopPropagation()}
                  >
                    Order Now
                  </Link>

                  <button
                     onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product, product.id);
                    }}
                    className="bg-[#609647] text-white text-sm px-3 py-2 rounded-lg"
                    aria-label="add to cart button"
                  >
                    Add to Cart
                  </button>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
