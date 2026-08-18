"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Global() {
  return (
    <motion.section className="lg:h-screen h-150 h-100  min-w-screen max-w-[1440px]  pb-10 flex flex-col">
      <motion.div
        // className="h-full w-full bg-[url('https://res.cloudinary.com/dpff5cxm3/image/upload/v1779941300/maps_tf8opv.webp')]  bg-contain bg-top bg-no-repeat inset-0"
        className="h-full w-full bg-[url('/maps.svg')] bg-contain bg-top bg-no-repeat inset-0"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <div className="flex flex-col lg:gap-5 gap-3 items-center">
        {/* <Image src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779941223/localfarmGlobal_dg2s1l.webp" className="w-60" alt="logo image" width={60} height={10} /> */}
        <Image
          src="footprint.svg"
          className="w-64"
          alt="logo image"
          width={60}
          height={10}
        />
        <h1 className="font-heading lg:text-5xl md:text-4xl text-2xl font-bold text-center text-[#444444] mb-10 lg:mb-20">
          Global Footprint
        </h1>
      </div>
    </motion.section>
  );
}
