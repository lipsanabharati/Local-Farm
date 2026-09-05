"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

// import ProductForShop from "@/components/productForShop";
const ProductForShop = dynamic(() => import("@/components/productForShop"), {
    ssr:false,
  loading: () => <p>Loading...</p>,
});


export default function Shop()
{
    
    return(
        <>
        {/*Hero Section*/}
        <section className="flex flex-col gap-5 max-w-[1440px] w-screen overflow-hidden">
            {/*Drip Image */}
            <motion.div 
             initial={{ y: -300 }}
             animate={{ y: 0 }}
             transition={{ duration: 2, ease: "easeOut" }}
            className= "flex flex-row justify-end lg:justify-start w-full z-0 pointer-events-none">
                <Image src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940140/drip_wd9v0z.webp" 
                width={268}
                height={440}
                className="h-60 md:h-80 lg:h-110 w-auto"
                alt="drip image"></Image>
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
                    <Image 
                    src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940346/shop-hero_pdi5mt.webp" 
                    className="w-[80%]" 
                    alt="hero image"
                    width={500}
                    height={500}>
                    </Image>
                </div>
            </div>

            <div className="" >
                <ProductForShop/>
            </div>
        </section>
        </>
    )
}