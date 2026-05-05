"use client"

import { motion } from "framer-motion";


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
        className="lg:py-20 py-25 px-10 flex flex-col lg:gap-8 gap-4 font-body overflow-hidden max-w-[1440px]"
      >
        {/*Heading*/}
        <h1 className="font-heading lg:text-5xl text-3xl font-bold text-center text-[#4D641E]">
          About Us
        </h1>

        {/*Body*/}
        <div className="flex flex-row lg:gap-10  gap-2 justify-center items-center">
          <motion.img
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-1/2 lg:w-1/3"
            src="a1.svg"
            alt="about image"
          ></motion.img>
          <motion.img
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-1/2 lg:w-1/3"
            src="a2.svg"
            alt="about image"
          ></motion.img>
        </div>

        <div className="flex flex-row lg:gap-10 gap-2 justify-center items-start">
          <motion.img
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
             viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className=" w-1/2 lg:w-1/3"
            src="a3.webp"
           alt="about image"
          ></motion.img>
          <div className="text-[#4D641E] w-1/2 lg:w-[33%] text-xs lg:text-xl">
            LocalFarm Nepal is your trusted destination for organic foods in
            Maharajgunj. We offer a carefully curated selection of naturally
            sourced products—ranging from Shilajit and pure honey to nutritious
            powders and traditional pickles—directly sourced from local farmers.
            By connecting you with fresh, authentic produce, we support both
            your well-being and the livelihoods of our farming communities.
          </div>
        </div>
      </motion.section>
    )
}