"use client";

import { motion } from "framer-motion";

export default function Quality()
{
    return (
        <section className="md:bg-[url('/ribbon.svg')] bg-[url('/ribbonMob.webp')] bg-center bg-contain bg-no-repeat lg:bg-position-[center_bottom_1rem]  md:bg-position-[center_top_0rem] bg-position-[center_top_5rem] md:p-0 p-5">
        <div className="flex flex-col lg:py-10 w-full max-w-[1440px] justify-items-center">
          {/*Heading*/}
          <div className="flex flex-row justify-end relative md:px-[8%] h-[10%] md:h-[2%]">
            <div className="md:w-1/3 lg:w-80 w-40">
              <h1 className="font-heading lg:text-5xl text-2xl font-bold text-[#4D641E]">
                We prioritize quality.
              </h1>
            </div>
          </div>

          <div className="flex flex-col">
            {/*Description*/}
            <div className="flex flex-row justify-start items-center ms-[10%]">
              <div className="lg:w-1/4 w-1/4 md:w-1/5 text-end text-[#4D641E] relative">
                <motion.p
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-xs lg:text-lg"
                >
                  Rich in nutrients, bee pollen from LocalFarm is packed with
                  vitamins, minerals, and antioxidants.
                </motion.p>
                <img
                  src="arrow1.svg"
                  className="absolute right-[-30px] lg:right-[-40px] lg:bottom-[-40px] lg:w-[20px]"
                  alt="arrow"
                ></img>
              </div>
            </div>

            <div className="md:hidden flex flex-row justify-center -mt-5">
              <img src="beePollenMob.webp" className=" w-[60%]" alt="bee pollen"></img>
            </div>

            <div className="hidden md:flex justify-center lg:-mt-40 md:-mt-30">
              <img src="beePollen.webp" className=" w-[80%]" alt="bee pollen"></img>
            </div>

            <div className="flex flex-row justify-start gap-[40%] md:gap-[45%] lg:ms-[10%] md:ms-[12%] md:-mt-25 -mt-10">
              {/*Description*/}
              <div className="lg:w-1/4 w-1/4 md:w-1/5 text-end  text-[#4D641E] relative">
                <img
                  src="arrow3.svg"
                  className="absolute lg:right-[-40px] lg:top-[-40px] lg:w-[20px] right-[-40px]"
         alt="arrow"
                ></img>
                <motion.p
                  initial={{ y: 200 }}
                  whileInView={{ y: 0 }}
                   viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-xs lg:text-lg"
                >
                  Sourced naturally from local beekeepers to ensure purity and
                  freshness.
                </motion.p>
              </div>

              {/*Description*/}
              <div className="lg:w-1/4 w-1/4 md:w-1/5 text-start text-[#4D641E] relative">
                <img
                  src="arrow2.svg"
                  className="absolute lg:left-[-40px] lg:top-[-40px] lg:w-[20px] left-[-40px]"
           alt="arrow"
                ></img>
                <motion.p
                  initial={{ x: 200 }}
                  whileInView={{ x: 0 }}
                   viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-xs lg:text-lg"
                >
                  Supports energy levels and overall wellness in your daily
                  routine.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}