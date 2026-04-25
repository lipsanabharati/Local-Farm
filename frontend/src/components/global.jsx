"use client";

import {motion} from "framer-motion";

export default function Global()
{
    return (
        <motion.section className="lg:h-screen h-150 h-100  min-w-screen max-w-[1440px]  pb-10 relative"
       >

            <motion.div
            className="h-full w-full lg:bg-[url('/world-map.png')] bg-[url('/world-mapMob.png')]  bg-contain bg-center -z-10 absolute inset-0" 
            animate={{ y: [0, -10, 0] }}
        transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }}>

            </motion.div>

            <div className="flex flex-col lg:gap-5 gap-3 items-center z-10 relative lg:top-80 md:top-90 top-100 left-5 ">
                <img src="localfarmGlobal.png" className="w-60"/>
                <h1 className="font-heading lg:text-5xl md:text-4xl text-2xl font-bold text-center text-[#444444] mb-10 lg:mb-20">Global Footprint</h1>
            </div>
        </motion.section>
    )
}