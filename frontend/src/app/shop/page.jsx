"use client";
import { motion } from "framer-motion";
import ProductForShop from "@/components/productForShop";
import { useRef } from "react";

export default function Shop()
{
    const productsRef = useRef(null); //reference to a dom element

  const scrollToProducts = () => { //supposed to make scrolling smooth
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

    return(
        <>
        {/*Hero Section*/}
        <section className="flex flex-col gap-5 max-w-[1440px] overflow-hidden">
            {/*Drip Image */}
            <motion.div 
             initial={{ y: -300 }}
             animate={{ y: 0 }}
             transition={{ duration: 2, ease: "easeOut" }}
            className= "flex flex-row justify-end lg:justify-start w-full z-0 pointer-events-none">
                <img src="drip.png" className="h-1/3 md:h-1/2 lg:h-110"></img>
            </motion.div>

            <div className="flex flex-col -mt-10 lg:-mt-50">
                <div className="flex flex-row ps-10 py-5 gap-3 md:px-15 lg:justify-center">
                    
                    <div className="flex flex-col items-start lg:gap-5 lg:ms-[20%] md:gap-3 gap-3">
                        <h1 className="font-bold text-2xl lg:text-5xl w-[80%] md:w-[70%]">
                        NATURE'S SECRET TO TIMELESS ENERGY.
                    </h1>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end lg:-mt-[5%]">
                    <img src="shop-hero.png" className="">
                    </img>
                </div>
            </div>

            <div ref={productsRef}>
                <ProductForShop/>
            </div>
        </section>
        </>
    )
}