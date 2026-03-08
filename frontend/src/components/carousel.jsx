"use client";

import {useState} from "react";

export default function Carousel()
{
    const slides = [
    {
      image: "/farm1.png",
      title: "How our Bee Pollen Comes to Life",
      text: "Local Farm serves as an inspiration for aspiring entrepreneurs and a reminder to consumers about the value of supporting local bussinesses. As Birat Bikram Shah and his team continue their journey, they’re not just growing a  business; they’re ."
    },
    {
      image: "farm1.png",
      title: "Premium Tea Leaves",
      text: "Local Farm serves as an inspiration for aspiring entrepreneurs and a reminder to consumers about the value of supporting local bussinesses. As Birat Bikram Shah and his team continue their journey, they’re not just growing a  business; they’re ."
    },
    {
      image: "farm1.png",
      title: "Rich Coffee Beans",
      text: "Local Farm serves as an inspiration for aspiring entrepreneurs and a reminder to consumers about the value of supporting local bussinesses. As Birat Bikram Shah and his team continue their journey, they’re not just growing a  business; they’re ."
    }
  ];

  const [current,setCurrent]=useState(0);

  const nextSlide=()=>{
    setCurrent((current+1)%slides.length);
  };

  const prevSlide=()=>{
    setCurrent((current-1+slides.length)%slides.length);
  };

  return(
    <div className="flex flex-col items-center justify-center bg-[#F2F6E8] py-10 px-10">
        <div className="flex flex-col"
        >

            {/*Slide*/}
            <div className="flex lg:flex-row flex-col bg-[#FFAA00]/10 lg:gap-5 gap-5 md:gap-0">

                {/*Image*/}
                <div className="lg:w-1/2 w-full">
                    <img 
                    src={slides[current].image}
                    className="w-full object-contain"></img>

                </div>

                {/*Text*/}
                <div className="lg:w-1/2 space-y-6 p-5">
                    <h2 className="md:text-4xl text-2xl text-[#609647] font-bold">
                        {slides[current].title}
                    </h2>

                    <p className="text-gray-600 md:text-lg text-sm">
                         {slides[current].text}
                    </p>
                </div>
            </div>
       </div>

         {/* Dots */}
            <div className="flex justify-center mt-8 gap-3">
            {slides.map((_, index) => (
                <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                    current === index
                    ? "bg-[#93C553] scale-125"
                    : "bg-[#609647]"
                }`}
                ></button>
            ))}
            </div>
    </div>
  )
}