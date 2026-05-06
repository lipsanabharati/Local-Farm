"use client";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";

import { useState, useEffect } from "react";

const Staff =dynamic(()=>import("@/components/staff"),{
  loading:()=> <p>Loading...</p>
});

const AboutSwiper =dynamic(()=>import("@/components/aboutSwiper"),{
  loading:()=> <p>Loading...</p>
});

const AboutContent =dynamic(()=>import("@/components/aboutContent"),{
  loading:()=> <p>Loading...</p>
});

export default function About() {
  
  

  return (
    <section className="flex flex-col items-center mt-30 gap-5 overflow-hidden max-w-[1440px]">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#609647] mt-10">
        About Us
      </h1>

     <AboutSwiper />

      <AboutContent />

      <div className="flex flex-row justify-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#609647] mt-5">
          Our Team
        </h1>
      </div>

      <Staff />
      
    </section>
  );
}
