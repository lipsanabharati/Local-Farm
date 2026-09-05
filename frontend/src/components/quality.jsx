"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Quality()
{
    return (
        <section className="md:bg-[url('/ribbon.webp')] bg-[url('/ribbonMob.webp')] bg-center bg-contain bg-no-repeat lg:bg-position-[center_bottom_1rem]  md:bg-position-[center_top_0rem] bg-position-[center_top_5rem] md:p-0 p-5 w-screen max-w-[1440px]">
        <div className="flex flex-col lg:py-10 w-full max-w-[1440px] justify-items-center mx-0 md:mx-auto">
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
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-xs lg:text-lg"
                >
                  Rich in nutrients, bee pollen from LocalFarm is packed with
                  vitamins, minerals, and antioxidants.
                </motion.p>
                <Image
                  src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779941489/arrow1_voqels.webp"
                  className="absolute right-[-30px] lg:right-[-40px] lg:bottom-[-40px] lg:w-[20px]"
                  alt="arrow"
                  width={10}
                  height={10}
                />
              </div>
            </div>

            <div className="md:hidden flex flex-row justify-center -mt-5">
              <Image src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779941412/beePollenMob_odab04.webp" className=" w-[60%]" alt="bee pollen" width={201} height={275}></Image>
            </div>

            <div className="hidden md:flex justify-center lg:-mt-40 md:-mt-30">
              <Image src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779941410/beePollen_q0sdrz.webp" className=" w-[80%]" alt="bee pollen" width={614} height={438}></Image>
            </div>

            <div className="flex flex-row justify-start gap-[40%] md:gap-[45%] lg:ms-[10%] md:ms-[12%] md:-mt-25 -mt-10">
              {/*Description*/}
              <div className="lg:w-1/4 w-1/4 md:w-1/5 text-end  text-[#4D641E] relative">
                <Image
                  src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779941490/arrow3_wp0awt.webp"
                  className="absolute lg:right-[-40px] lg:top-[-40px] lg:w-[20px] right-[-40px]"
                  alt="arrow"
                  width={10}
                  height={10}
                ></Image>
                <motion.p
                  initial={{ y: 50 }}
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
                <Image
                  src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779941489/arrow2_tvg4vk.webp"
                  className="absolute lg:left-[-40px] lg:top-[-40px] lg:w-[20px] left-[-40px]"
                  alt="arrow"
                  width={10}
                  height={10}
                ></Image>
                <motion.p
                  initial={{ x: 50 }}
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