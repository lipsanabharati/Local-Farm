"use client";

import {motion} from "framer-motion";

export default function Home() {
  return(
    <>
    {/*Hero section */}
    <section className="bg-[url('/landing-bg.svg')] bg-center bg-cover relative z-[-1] h-screen w-screen">
        <motion.div
        initial={{ x: 500, y: 600 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
         className="absolute w-[320px] h-[340px] left-30 top-60 rounded-[11px] bg-white/1 backdrop-blur-sm border border-white/4 relative">
          {/*photo */}
        <motion.img
        initial={{ scale:0 }}
        animate={{  scale:1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src="akabare.svg" className="absolute top-[-80px]"></motion.img>

        <button className="absolute bottom-10 left-20 py-3 px-8 bg-[#609647] rounded-xl font-heading font-bold">Shop Now</button>
        </motion.div>
    </section>

    {/*About us*/}
    <section className="bg-[#F2F6E8] py-20 px-10 flex flex-col gap-8">
      {/*Heading*/}
      <h1 className="font-heading text-5xl font-bold text-center text-[#4D641E]">About Us</h1>

      {/*Body*/}
      <div className="flex flex-row gap-10 justify-center item-center">
        <motion.img 
        initial={{x:-100,y:-100, scale:0.2 }}
        animate={{x:0,y:0, scale:1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src="a1.svg">
        </motion.img>
         <motion.img 
        initial={{x:-100,y:-100, scale:0.2 }}
        animate={{x:0,y:0, scale:1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src="a2.svg">
        </motion.img>
      </div>

       <div className="flex flex-row gap-10 justify-center">
        <div className="w-1/2"><motion.img 
        initial={{x:-100,y:-100, scale:0.2 }}
        animate={{x:0,y:0, scale:1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="pl-80"
        src="a3.svg">
        </motion.img></div>
        <div className="text-[#4D641E] w-1/2 pr-50">
          LocalFarm Nepal is your go-to organic food store 
            located in Maharajgunj, Nepal. We proudly offer a diverse range
            of organically sourced products, including Shilajit, Honey, Powders, 
            and Pickles, directly from local farmers.LocalFarm 
            Nepal is your go-to organic food store located in Maharajgunj, Nepal.
        </div>
      </div>
    </section>

    <section className="bg-[#F2F6E8] py-20 px-10 relative">
      <div>
        
      </div>
    </section>
    </>
  )
}
