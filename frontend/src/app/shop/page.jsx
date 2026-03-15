"use client";
import { motion } from "framer-motion";
import ProductForShop from "@/components/productForShop";


export default function Shop()
{
    return(
        <>
        {/*Hero Section*/}
        <section className="flex flex-col gap-5 max-w-[1440px]">
            {/*Drip Image */}
            <motion.div 
             initial={{ y: -300 }}
             animate={{ y: 0 }}
             transition={{ duration: 2, ease: "easeOut" }}
            className= "flex flex-row justify-end lg:justify-start w-full z-0 pointer-events-none">
                <img src="drip.png" className="h-1/3 md:h-1/2 lg:h-110"></img>
            </motion.div>

            <div className="flex flex-col -mt-30 lg:-mt-60">
                <div className="flex flex-row ps-10 py-5 gap-3 md:px-15 lg:justify-center">
                    
                    <div className="flex flex-col items-start lg:gap-5 lg:ms-[20%] md:gap-3 gap-3">
                        <h1 className="font-bold text-2xl lg:text-5xl w-[80%] md:w-[70%]">
                        NATURE'S SECRET TO TIMELESS ENERGY.
                    </h1>
                    <button className="py-2 px-3 bg-[#609647] rounded-xl font-heading font-bold  w-[40%] md:w-[30%] lg:text-lg md:text-md text-sm text-white hover:cursor-pointer hover:bg-[#93C553] transition z-10"><a href="#products">Discover More</a></button>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end lg:-mt-[10%]">
                    <img src="shop-hero.png" className="">
                    </img>
                </div>
            </div>

            <div id="products">
                <ProductForShop/>
            </div>
        </section>
        </>
    )
}