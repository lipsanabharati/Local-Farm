"use client";

import {motion} from "framer-motion";
import ProductsSection from "../components/productSection";
import OurProcess from "../components/process";
import Carousel from "@/components/carousel";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useToast } from "@/context/ToastContext";
import axios from "axios";
import emailjs from "@emailjs/browser"



export default function Home() {
      const imgVariants = {
      hidden: { x: -50, y: -50, scale: 0.2 },
      visible: { x: 0, y: 0, scale: 1 }
    };

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [followup,setFollowUp]=useState(false);

    const {showSuccess,showFail}=useToast();

    const handleSubmit= async (e)=>{

      e.preventDefault();

      if(!name||!email||!message)
      {
        showFail("All fields are required.")
        return;
      }
      const contactData={
        name,
        email,
        message,
        followup
      }

      const templateParams={
        name,
        email,
        message,
        followup:followup? "Already replied to message.":"Not replied to message."
      }

      try{
        await axios.post(`http://localhost:5000/api/contact`,contactData)
       

        await emailjs.send(
          "service_uaepcta",
          "template_lu0jwgx",
          templateParams,
          "giAR8ssqYinULRtBK"
        )

        showSuccess("Message Forwarded!")
      }
      catch(err)
      {
        console.log(err);
        showFail("Message failed to send.")
      }
      finally
      {
        setName("");
        setEmail("");
        setMessage("");
      }
    }
   
  return(
    <>
    {/*Hero section */}
    <section className="bg-[url('/landing-bg.svg')] bg-center bg-cover  h-screen w-screen flex flex-row lg:justify-start justify-center lg:items-center items-end lg:ps-30 lg:pt-30 lg:pb-0 pb-30 overflow-hidden">
        <motion.div
        initial={{ x: 100, y: 300 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
         className="lg:w-80 lg:h-80 lg:left-30 lg:top-60 rounded-[11px] bg-white/1 backdrop-blur-sm border border-white/4 w-60 h-60 flex flex-col justify-end items-center pb-4">
          {/*photo */}
        <motion.img
        initial={{ scale:0 }}
        animate={{  scale:1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src="akabare.svg" className="absolute -top-[30%]"></motion.img>

        <Link
        href={`/shop`}
        className=" md:py-3 md:px-8 py-2 px-3 bg-[#609647] rounded-xl font-heading font-bold md:text-lg text-xs hover:cursor-pointer hover:bg-[#93C553]">
          Shop Now
        </Link>
        </motion.div>
    </section>

    {/*About us*/}
    <motion.section 
    initial="hidden"
    whileInView="visible"
    className="lg:py-20 py-10 px-10 flex flex-col lg:gap-8 gap-4 font-body overflow-hidden max-w-[1440px]">
      {/*Heading*/}
      <h1 className="font-heading lg:text-5xl text-3xl font-bold text-center text-[#4D641E]">About Us</h1>

      {/*Body*/}
      <div className="flex flex-row lg:gap-10  gap-2 justify-center items-center">
        <motion.img 
        variants={imgVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-1/2 lg:w-1/3"
        src="a1.svg">
        </motion.img>
         <motion.img 
        variants={imgVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-1/2 lg:w-1/3"
        src="a2.svg">
        </motion.img>
      </div>

       <div className="flex flex-row lg:gap-10 gap-2 justify-center items-start">
        
        <motion.img 
        variants={imgVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 2, ease: "easeOut" }}
        className=" w-1/2 lg:w-1/3"
        src="a3.png">
        </motion.img>
        <div className="text-[#4D641E] w-1/2 lg:w-[33%] text-xs lg:text-xl">
          LocalFarm Nepal is your go-to organic food store 
            located in Maharajgunj, Nepal. We proudly offer a diverse range
            of organically sourced products, including Shilajit, Honey, Powders, 
            and Pickles, directly from local farmers.LocalFarm 
            Nepal is your go-to organic food store located in Maharajgunj, Nepal.
        </div>
      </div>
    </motion.section>


 {/*We prioritize quality*/}
  <section className="md:bg-[url('/ribbon.svg')] bg-[url('/ribbonMob.png')] bg-center bg-contain bg-no-repeat lg:bg-position-[center_bottom_1rem]  md:bg-position-[center_top_0rem] bg-position-[center_top_5rem] md:p-0 p-5">
    <div className="flex flex-col lg:py-10 w-full max-w-[1440px] justify-items-center">

      
      {/*Heading*/}
      <div className="flex flex-row justify-end relative md:px-[8%] h-[10%] md:h-[2%]">
        <div className="md:w-1/3 lg:w-80 w-40">
          <h1 className="font-heading lg:text-5xl text-2xl font-bold text-[#4D641E]">We prioritize quality.</h1>
        </div>
      </div>

      <div className="flex flex-col">

        {/*Description*/}
      <div className="flex flex-row justify-start items-center ms-[10%]">
        <div className="lg:w-1/4 w-1/4 md:w-1/5 text-end text-[#4D641E] relative">
          <motion.p
          initial={{x:-100}}
          whileInView={{x:0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-xs lg:text-lg"
          >
          Locally produced,straight from the farms.
          Lorem ipsum dolor sit amet, consectetur
          </motion.p>
          <img src="arrow1.svg" className="absolute right-[-30px] lg:right-[-40px] lg:bottom-[-40px] lg:w-[20px]"></img>
        </div>
        </div>

          <div className="md:hidden flex flex-row justify-center -mt-5">
          <img src="beePollenMob.png" className=" w-[60%]"></img>
          </div>

          <div className="hidden md:flex justify-center lg:-mt-40 md:-mt-30">
          <img src="beePollen.png" className=" w-[80%]"></img>
          </div>

      <div className="flex flex-row justify-start gap-[40%] md:gap-[45%] lg:ms-[10%] md:ms-[12%] md:-mt-25 -mt-10">
        {/*Description*/}
        <div className="lg:w-1/4 w-1/4 md:w-1/5 text-end  text-[#4D641E] relative">
         <img src="arrow3.svg" className="absolute lg:right-[-40px]
         lg:top-[-40px] lg:w-[20px] right-[-40px]"></img>
          <motion.p
           initial={{y:200}}
           whileInView={{y:0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-xs lg:text-lg">
            Locally produced,straight from the farms.
            Lorem ipsum dolor sit amet, consectetur
          </motion.p>
        </div>

        {/*Description*/}
        <div className="lg:w-1/4 w-1/4 md:w-1/5 text-start text-[#4D641E] relative">
          <img src="arrow2.svg" className="absolute lg:left-[-40px]
         lg:top-[-40px] lg:w-[20px] left-[-40px]"></img>
          <motion.p
             initial={{x:200}}
           whileInView={{x:0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-xs lg:text-lg">
            Locally produced,straight from the farms.
            Lorem ipsum dolor sit amet, consectetur
          </motion.p>
        </div>
      </div>
     </div>
    </div>
  </section>

    {/*Product Section*/}
    <section className="flex flex-col py-10 px-20 lg:gap-10 gap-5 font-body justify-items-center items-center bg-[#F2F6E8] max-w-[1440px]">
        <h1 className="font-heading lg:text-5xl md:text-3xl text-xl font-bold text-start text-[#4D641E] text-center">From Local Farms to Your Home</h1>

        <div className="lg:w-1/2 w-full">
          <p className="lg:text-2xl md:text-xl text-sm md:text-center">
          Locally sourced, naturally grown,and delivered fresh from our farmers to your doorstep.
        </p>
        </div>

        <ProductsSection />
      </section>

      {/*Divider*/}
      <section className="h-[500px] bg-[#F2F6E8] p-20 -mt-50 flex lg:flex-row-reverse lg:items-start lg:justify-start items-end justify-center w-full"  style={{
    backgroundImage: `url(/bgGrown.svg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}>
      <div className="lg:w-1/3 md:w-1/2 h-[140px] lg:mt-30 lg:me-20 p-5 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-xl md:text-xl text-sm" >
        Locally grown,naturally pure-our products carry the care of Nepali farmers and the goodness of the soil.
      </div>
      </section>

      {/*Sustainable Farming*/}
      <section className="lg:py-30 lg:px-30 md:p-20 p-10 flex md:flex-row flex-col-reverse md:gap-10 lg:gap-20 gap-5 bg-[#F2F6E8] max-w-[1440px]">
        {/*Text*/}
        <motion.div 
        whileInView={{x:0}}
        initial={{x:-100}}
         transition={{ duration: 2, ease: "easeOut" }}
        className="flex flex-col lg:gap-10 md:gap-5 gap-3 md:w-1/2 w-full">
          <h1 className="font-heading md:text-3xl text-xl font-bold text-start text-[#609647]">"SUSTAINABLE FARMING THE LOCAL FARM"-ECS Media</h1>

          <div className="md:text-xl text-sm">
            Local Farm serves as an inspiration for aspiringentrepreneurs and a reminder to consumers about the value of supporting local bussinesses. As Birat Bikram Shah and histeam continue their journey, they’re not just growing a business; they’re nurturing the seeds of change in Nepal’s agricultural landscape.
          </div>

        </motion.div>

        {/*Image*/}
        <motion.div 
         whileInView={{x:0}}
        initial={{x:100}}
         transition={{ duration: 2, ease: "easeOut" }}
        className=" md:w-1/2 w-full flex flex-row justify-center">
          <img src="dai.png" className="object-contain"></img>
        </motion.div>
      </section>

      {/*Our Process */}
      <section className="lg:h-[300px] bg-[#F2F6E8] flex flex-col gap-10 items-center max-w-[1440px]">

        <h1 className="font-heading md:text-5xl text-3xl  font-bold  text-[#609647] text-center">
          Our Process
        </h1>

        <OurProcess />
      </section>

      {/*Why Localfarm?*/}
      <section className="bg-[#F2F6E8] flex flex-col lg:gap-20  md:gap-20 gap-5 items-center lg:py-20 lg:px-20 md:py-10 md:px-10 max-w-[1440px] md:h-auto  pt-10">

          {/*Heading*/}
          <div className="flex flex-row items-center md:gap-3 gap-1">
            <p className="font-heading md:text-5xl text-2xl text-[#93C553] font-bold text-start">Why</p>
            <img src="logo.svg" className="md:w-full w-[60%]"></img>
            <p className="font-heading md:text-5xl text-2xl text-[#93C553]  font-bold text-start">?</p>
          </div>

          {/*Circles*/}
          <div className="flex flex-col md:flex-row items-center justify-center">
          

          <motion.div
        initial={{ scale:0 }}
        whileInView={{  scale:1 }}
        transition={{ duration: 2, ease: "easeOut" }} 
          className="lg:w-70 lg:h-70 md:w-50 md:h-50 w-45 h-45 rounded-full bg-[#609647] z-0 flex flex-col items-center gap-2 md:-me-10">
            <h2 className="text-white lg:text-xl md:text-md text-xs text-center font-bold lg:mt-20 lg:w-50 mt-10 mt-10 w-30">
              Locally Produced, Straight from the Farms.
             </h2>

              <p className="text-white lg:text-sm text-xs text-center lg:w-40 w-30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
          </motion.div>

          <motion.div 
          initial={{ scale:0 }}
        whileInView={{  scale:1 }}
        transition={{ duration: 2, ease: "easeOut" }} 
          className="lg:w-100 lg:h-100 md:w-70 md:h-70 w-60 h-60 rounded-full bg-[#344304] z-3 flex flex-col items-center md:gap-5 gap-2 -mt-5">
             <h2 className="text-white lg:text-2xl md:text-xl text-lg  text-center font-bold lg:mt-30 md:mt-20 mt-10 lg:w-70 md:w-60 w-40">
              Locally Produced, Straight from the Farms.
             </h2>

              <p className="text-white md:text-sm lg:text-xl text-xs text-center md:w-70 w-40">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
          </motion.div>

          <motion.div 
          initial={{ scale:0 }}
        whileInView={{  scale:1 }}
        transition={{ duration: 2, ease: "easeOut" }} 
          className="lg:w-70 lg:h-70 md:w-50 md:h-50 w-45 h-45 rounded-full bg-[#93C553] z-0 flex flex-col items-center gap-2 md:-ms-10 -mt-5">
            <h2 className="text-white lg:text-xl md:text-md text-xs text-center font-bold lg:mt-20 lg:w-50 mt-10 mt-10 w-30">
              Locally Produced, Straight from the Farms.
             </h2>

              <p className="text-white lg:text-sm text-xs text-center lg:w-40 w-30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
          </motion.div>
          </div>

      </section>

      <section className="max-w-[1440px] mb-30">
         <Carousel />
      </section>

      <section 
      className="w-full py-20 md:px-20 -mb-10"
      style={{
        backgroundImage: `url(/formBg.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      >
      <div className="max-w-[1440px] w-full flex flex-row md:justify-end items-start justify-center">
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-2xl lg:p-10 p-5 lg:w-[400px] flex flex-col">

        <h2 className="lg:text-3xl text-xl font-bold text-white text-center mb-6">
          Contact Us!
        </h2>

        <form className="flex flex-col lg:gap-4 gap-2"
        onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-black">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="p-3 rounded-lg bg-white/60 text-black outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Email */}
           <div className="flex flex-col gap-2">
            <label className="text-black">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="p-3 rounded-lg bg-white/60 text-black outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-black">Message</label>
            <textarea
              rows="4"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              className="p-3 rounded-lg bg-white/80 text-black outline-none focus:ring-2 focus:ring-white resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-2 bg-[#609647] text-black font-semibold py-3 rounded-lg transition hover:cursor-pointer hover:bg-[#93C553]"
          >
            Send Message
          </button>

        </form>

      </div>
     </div>
      </section>
    </>
  )
}
