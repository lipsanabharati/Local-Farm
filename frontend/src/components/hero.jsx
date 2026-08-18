"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-screen w-screen flex flex-row lg:justify-start justify-center lg:items-center items-end lg:ps-30 lg:pt-30 lg:pb-0 pb-30 overflow-hidden relative">
      <picture>
        <source media="(min-width: 1024px)" srcSet="/hero.svg" />
        <source media="(min-width: 932px)" srcSet="/hero-tablet-lg.svg" />
        <source media="(min-width: 768px)" srcSet="/hero-tablet.svg" />
        <img
          src="/hero-mobile.svg"
          alt="hero image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      {/* <motion.div
        // initial={{ opacity: 0, x: 100 }}
        // animate={{ opacity: 1, x: 0 }}
        // transition={{ duration: 1, ease: "easeOut" }}
        // className="lg:w-80 lg:h-80 lg:left-30 lg:top-60 rounded-[11px] bg-white/1 backdrop-blur-sm border border-white/4 w-60 h-60 flex flex-col justify-end items-center pb-4"
      > */}
      {/*photo */}
      {/* <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute -top-[20%]"
        >
          <Image
            src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_auto/akabare_slaqmh"
            width={280}
            height={220}
            alt="akabare"
          />
        </motion.div> */}

      <h1 className="absolute top-50 left-10 md:top-50 md:left-20 lg:top-40 xl:top-60 lg:left-40  xl:left-40 text-[#609647] font-heading font-bold text-lg md:text-5xl lg:text-4xl xl:text-6xl z-10">
        Discover fresh organic goodness today
      </h1>

      <Link
        href={`/shop`}
        className=" absolute top-60 left-10 md:top-80 md:left-20 lg:top-60 xl:top-80  lg:left-40 md:py-3 md:px-8 py-2 px-3 bg-[#609647] rounded-xl font-heading font-bold md:text-lg text-xs hover:cursor-pointer hover:bg-[#93C553]"
        aria-label="go to shop"
      >
        Shop Now
      </Link>
      {/* </motion.div> */}
    </section>
  );
}
