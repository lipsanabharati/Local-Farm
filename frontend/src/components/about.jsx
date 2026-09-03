"use client"

import { motion } from "framer-motion";
import Image from "next/image";


export default function About()
{
    const imgVariants = {
    hidden: { x: -50, y: -50, scale: 0.2 },
    visible: { x: 0, y: 0, scale: 1 },
  };

    return (
        <motion.section
        initial="hidden"
        whileInView="visible"
        className="lg:py-20 pb-25 px-10 flex flex-col lg:gap-8 gap-4 font-body overflow-hidden max-w-[1440px] mx-auto"
      >
        {/*Heading*/}
        <h1 className="lg:text-[56px] text-[36px] font-bold text-center text-[#4D641E]">
          About Us
        </h1>

        {/*Body*/}
        <div className="flex flex-row lg:gap-10  gap-3 justify-center items-center">
          <motion.div
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-1/2 flex flex-row justify-end"
            
          >
            <Image 
              src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940393/a1_g60tl3.webp"
              alt="about image"
              width={334}
              height={315}
             />
          </motion.div>
          <motion.div
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-1/2"
            
          >
            <Image 
              src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940394/a2_ifefk0.webp"
              alt="about image"
              width={334}
              height={315}
             />
          </motion.div>
        </div>

        <div className="flex flex-row lg:gap-10 gap-3 justify-center items-start">
          <motion.div
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-1/2 flex flex-row justify-end"
            
          >
            <Image 
              src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940394/a3_b3qf2p.webp"
              alt="about image"
              width={334}
              height={315}
             />
          </motion.div>
          <div className="text-[#4D641E] w-1/2 text-md text-[10px] md:text-[17px]">
            <p className="w-[80%]">
              LocalFarm Nepal is your trusted destination for organic foods in
            Maharajgunj. We offer a carefully curated selection of naturally
            sourced products—ranging from Shilajit and pure honey to nutritious
            powders and traditional pickles—directly sourced from local farmers.
            By connecting you with fresh, authentic produce, we support both
            your well-being and the livelihoods of our farming communities.
            </p>
          </div>
        </div>
      </motion.section>
    )
}