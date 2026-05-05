"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Sustainable()
{
    return(
        <section className="lg:py-30 lg:px-30 md:p-20 p-10 flex md:flex-row flex-col-reverse md:gap-10 lg:gap-20 gap-5 bg-[#F2F6E8] max-w-[1440px]">
                {/*Text*/}
                <motion.div
                  whileInView={{ x: 0 }}
                  initial={{ x: -100 }}
                   viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="flex flex-col lg:gap-10 md:gap-5 gap-3 md:w-1/2 w-full"
                >
                  <h1 className="font-heading md:text-3xl text-xl font-bold text-start text-[#609647]">
                    "SUSTAINABLE FARMING THE LOCAL FARM"-ECS Media
                  </h1>
        
                  <div className="md:text-xl text-sm">
                    Local Farm stands as both an inspiration for aspiring entrepreneurs
                    and a powerful reminder of the importance of supporting local
                    businesses. As Birat Bikram Shah,Srijan Subedi and their team
                    continue their journey, they are doing more than just building a
                    brand—they are cultivating meaningful change and helping shape a
                    more sustainable future for Nepal’s agricultural landscape.
                  </div>
                </motion.div>
        
                {/*Image*/}
                <motion.div
                  whileInView={{ x: 0 }}
                  initial={{ x: 100 }}
                   viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className=" md:w-1/2 w-full flex flex-row justify-center"
                >
                  <Image
                    src="/dai.webp"
                    width={500}
                    height={800}
                    alt="Dai"
                    className="object-contain"
                  />
                </motion.div>
              </section>
        
    )
}