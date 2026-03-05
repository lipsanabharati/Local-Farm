"use client";

import {motion} from "framer-motion";
import ProductsSection from "../components/productSection";
import OurProcess from "../components/process";

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
    <section className="bg-[#F2F6E8] py-20 px-10 flex flex-col gap-8 font-body">
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


 {/*We prioritize quality*/}
    <section className="h-[1000px] bg-[#F2F6E8] py-10 flex flex-col"  style={{
    backgroundImage: `url(/beePollen.svg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}>

      {/*Heading*/}
      <div className="w-full flex flex-row-reverse relative">
        <div className="w-1/4 me-40">
          <h1 className="font-heading text-5xl font-bold text-start text-[#4D641E]">We prioritize quality.</h1>
        </div>
      </div>

      <div className="flex flex-col gap-[600px]">

        {/*Description*/}
        <div className="w-1/6 text-end ms-50 text-[#4D641E] relative">
          <motion.p
          initial={{x:-300}}
          animate={{x:0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          >
          Locally produced,straight from the farms.
          Lorem ipsum dolor sit amet, consectetur
          </motion.p>
          <img src="arrow1.svg" className="absolute right-[-40px] bottom-[-40px] w-[20px]"></img>
        </div>

         
      <div className="flex flex-row gap-80">
        {/*Description*/}
        <div className="w-1/6 text-end ms-50 text-[#4D641E] relative">
         <img src="arrow3.svg" className="absolute right-[-40px]
         top-[-40px] w-[20px]"></img>
          <motion.p
           initial={{y:300}}
          animate={{y:0 }}
          transition={{ duration: 2, ease: "easeOut" }}>
            Locally produced,straight from the farms.
            Lorem ipsum dolor sit amet, consectetur
          </motion.p>
        </div>

        {/*Description*/}
        <div className="w-1/6 text-start ms-50 text-[#4D641E] relative">
          <img src="arrow2.svg" className="absolute left-[-40px]
         top-[-40px] w-[20px]"></img>
          <motion.p
             initial={{x:300}}
          animate={{x:0 }}
          transition={{ duration: 2, ease: "easeOut" }}>
            Locally produced,straight from the farms.
            Lorem ipsum dolor sit amet, consectetur
          </motion.p>
        </div>
      </div>
     </div>
    </section>

    {/*Product Section*/}
    <section className="flex flex-col h-[1000px] py-10 px-20 gap-10 font-body justify-items-center items-center bg-[#F2F6E8]">
        <h1 className="font-heading text-5xl font-bold text-start text-[#4D641E] text-center">From Local Farms to Your Home</h1>

        <div className="w-1/2">
          <p className="text-2xl text-center">
          Locally sourced, naturally grown,and delivered fresh from our farmers to your doorstep.
        </p>
        </div>

        <ProductsSection />
      </section>

      {/*Divider*/}
      <section className="h-[500px] bg-[#F2F6E8] py-10 -mt-50 flex flex-row-reverse"  style={{
    backgroundImage: `url(/bgGrown.svg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}>
      <div className="w-1/3 h-[140px] mt-30 me-20 p-5 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-xl text-xl">
        Locally grown,naturally pure-our products carry the care of Nepali farmers and the goodness of the soil.
      </div>
      </section>

      {/*Sustainable Farming*/}
      <section className="py-30 px-30 flex flex-row gap-10 bg-[#F2F6E8] gap-60">
        {/*Text*/}
        <div className="flex flex-col gap-10 w-1/2">
          <h1 className="font-heading text-3xl font-bold text-start text-[#609647] text-center">"SUSTAINABLE FARMING THE LOCAL FARM"-ECS Media</h1>

          <div className="text-xl">
            Local Farm serves as an inspiration for aspiringentrepreneurs and a reminder to consumers about the value of supporting local bussinesses. As Birat Bikram Shah and histeam continue their journey, they’re not just growing a business; they’re nurturing the seeds of change in Nepal’s agricultural landscape.
          </div>

        </div>

        {/*Image*/}
        <div className="w-1/2">
          <img src="dai.png"></img>
        </div>
      </section>

      {/*Our Process */}
      <section className="h-[300px] bg-[#F2F6E8] flex flex-col gap-10 items-center">

        <h1 className="font-heading text-5xl font-bold  text-[#609647] text-center">
          Our Process
        </h1>

        <OurProcess />
      </section>

      {/*Why Localfarm?*/}
      <section className="min-h-screen bg-[#F2F6E8] flex flex-col gap-20 items-center py-30 px-20">

          {/*Heading*/}
          <div className="flex flex-row gap-3">
            <p className="font-heading text-5xl text-[#93C553]  font-bold text-start">Why</p>
            <img src="logo.svg" className="w-full"></img>
            <p className="font-heading text-5xl text-[#93C553]  font-bold text-start">?</p>
          </div>

          {/*Circles*/}
          <div className="relative">
          <div className="absolute w-100 h-100 rounded-full bg-[#344304] z-3 -right-50 flex flex-col items-center gap-5">
             <h2 className="text-white text-2xl text-center font-bold mt-30 w-70">
              Locally Produced, Straight from the Farms.
             </h2>

              <p className="text-white text-xl text-center w-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
          </div>

          <div className="absolute w-70 h-70 rounded-full bg-[#609647] z-0 left-40 top-10 flex flex-col items-center gap-2">
            <h2 className="text-white text-md text-center font-bold mt-20 w-40">
              Locally Produced, Straight from the Farms.
             </h2>

              <p className="text-white text-sm text-center w-40">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
          </div>

          <div className="absolute w-70 h-70 rounded-full bg-[#93C553] z-0 right-40 top-10 flex flex-col items-center gap-2">
             <h2 className="text-white text-md text-center font-bold mt-20 w-40">
              Locally Produced, Straight from the Farms.
             </h2>

              <p className="text-white text-sm text-center w-40">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
          </div>

          </div>

      </section>
    </>
  )
}
