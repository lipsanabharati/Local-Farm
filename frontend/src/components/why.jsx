"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Why()
{
    return (
        <section className="bg-[#F2F6E8] flex flex-col lg:gap-20  md:gap-20 gap-5 items-center lg:py-20 lg:px-20 md:py-10 md:px-10 max-w-[1440px] mx-auto md:h-auto  pt-10">
                {/*Heading*/}
                <div className="flex flex-row items-center md:gap-3 gap-1">
                  <p className="font-heading md:text-5xl text-2xl text-[#93C553] font-bold text-start">
                    Why
                  </p>
                  <Image src="logo.svg" className="md:w-full w-[60%]"   alt="logo"
                  width={200}
                  height={200}/>
                  <p className="font-heading md:text-5xl text-2xl text-[#93C553]  font-bold text-start">
                    ?
                  </p>
                </div>
        
                {/*Circles*/}
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                     viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="lg:w-70 lg:h-70 md:w-50 md:h-50 w-45 h-45 rounded-full bg-[#609647] z-0 flex flex-col items-center gap-2 md:-me-10"
                  >
                    <h2 className="text-white lg:text-xl md:text-md text-xs text-center font-bold lg:mt-20 lg:w-50 mt-10 mt-10 w-30">
                      100% Organic & Natural
                    </h2>
        
                    <p className="text-white text-sm text-center lg:w-40 w-30">
                      Pure, chemical-free products.
                    </p>
                  </motion.div>
        
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                     viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="lg:w-100 lg:h-100 md:w-70 md:h-70 w-60 h-60 rounded-full bg-[#344304] z-3 flex flex-col items-center md:gap-5 gap-2 -mt-5"
                  >
                    <h2 className="text-white lg:text-2xl md:text-xl text-lg  text-center font-bold lg:mt-30 md:mt-20 mt-10 lg:w-70 md:w-60 w-40">
                      Directly From Local Farmers
                    </h2>
        
                    <p className="text-white text-md text-center md:w-70 w-40">
                      Fresh products supporting Nepali farmers.
                    </p>
                  </motion.div>
        
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                     viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="lg:w-70 lg:h-70 md:w-50 md:h-50 w-45 h-45 rounded-full bg-[#93C553] z-0 flex flex-col items-center gap-2 md:-ms-10 -mt-5"
                  >
                    <h2 className="text-white lg:text-xl md:text-md text-xs text-center font-bold lg:mt-20 lg:w-50 mt-10 mt-10 w-30">
                      Freshness You Can Trust
                    </h2>
        
                    <p className="text-white text-sm text-center lg:w-40 w-30">
                      Carefully packed to keep quality.
                    </p>
                  </motion.div>
                </div>
              </section>
    )
}