"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";



export default function Hero()
{
    return (
      <section className="  h-screen w-screen flex flex-row lg:justify-start justify-center lg:items-center items-end lg:ps-30 lg:pt-30 lg:pb-0 pb-30 overflow-hidden">

       <Image
          src="/landing-bg.svg"
          alt="background"
          fill
          priority
          className="object-cover"
        />

        <motion.div
          initial={{ x: 100, y: 300 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="lg:w-80 lg:h-80 lg:left-30 lg:top-60 rounded-[11px] bg-white/1 backdrop-blur-sm border border-white/4 w-60 h-60 flex flex-col justify-end items-center pb-4"
        >
          {/*photo */}
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="akabare.svg"
            className="absolute -top-[30%]"
            alt="akabare"
          ></motion.img>

          <Link
            href={`/shop`}
            className=" md:py-3 md:px-8 py-2 px-3 bg-[#609647] rounded-xl font-heading font-bold md:text-lg text-xs hover:cursor-pointer hover:bg-[#93C553]"
            aria-label="go to shop"
          >
            Shop Now
          </Link>
        </motion.div>
      </section>
    )
}