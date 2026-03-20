"use client";

import {useState,useEffect} from "react";
import axios from "axios";

export default function Carousel()
{
  const [blogs,setBlogs]=useState([]);
  const [current,setCurrent]=useState(0);
  useEffect(
     ()=>{
      axios.get(`http://localhost:5000/api/blogslp`)
      .then(
        (res)=>{
          setBlogs(res.data);
          console.log(res.data);
        }
      )
      .catch((err)=>{
        console.error(err);
      });
     },[]
    );
  //   const slides = [
  //   {
  //     image: "/farm1.png",
  //     title: "How our Bee Pollen Comes to Life",
  //     text: "Local Farm serves as an inspiration for aspiring entrepreneurs and a reminder to consumers about the value of supporting local bussinesses. As Birat Bikram Shah and his team continue their journey, they’re not just growing a  business; they’re ."
  //   },
  //   {
  //     image: "farm1.png",
  //     title: "Premium Tea Leaves",
  //     text: "Local Farm serves as an inspiration for aspiring entrepreneurs and a reminder to consumers about the value of supporting local bussinesses. As Birat Bikram Shah and his team continue their journey, they’re not just growing a  business; they’re ."
  //   },
  //   {
  //     image: "farm1.png",
  //     title: "Rich Coffee Beans",
  //     text: "Local Farm serves as an inspiration for aspiring entrepreneurs and a reminder to consumers about the value of supporting local bussinesses. As Birat Bikram Shah and his team continue their journey, they’re not just growing a  business; they’re ."
  //   }
  // ];

  

  const nextSlide=()=>{
    setCurrent((current+1)%blogs.length);
  };

  const prevSlide=()=>{
    setCurrent((current-1+blogs.length)%blogs.length);
  };

  return(
    
      blogs.length>0 && (
        <div className="flex flex-col items-center justify-center bg-transparent py-10 px-10">
        <div className="flex flex-col"
        >

            {/*Slide*/}
            <div className="flex lg:flex-row flex-col  lg:gap-5 gap-5 md:gap-0">

                {/*Image*/}
                <div className="lg:w-1/2 w-full">
                    <img 
                    src={blogs[current]?.photos?.[0]?.imagePath
                        ? `http://localhost:5000/${blogs[current].photos[0].imagePath}`
                        : "/error.png"
                    }
                    className="w-full object-cover"
                    alt={blogs[current].title}></img>

                </div>

                {/*Text*/}
                <div className="lg:w-1/2 space-y-6 p-5">
                    <h2 className="md:text-4xl text-2xl text-[#609647] font-bold">
                        {blogs[current].title}
                    </h2>

                    <p className="text-gray-600 md:text-lg text-sm">
                         {blogs[current].introduction}
                    </p>

                    <button 
                    className="py-3 px-3 bg-[#93C553] text-white py-2 rounded-xl text-md font-medium hover:opacity-90 transition hover:cursor-pointer hover:bg-[#609647]"
                    >Read More</button>
                </div>

                
            </div>
       </div>

         {/* Dots */}
            <div className="flex justify-center mt-8 gap-3">
            {blogs.map((_, index) => (
                <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`hover:cursor-pointer w-3 h-3 rounded-full transition-all ${
                    current === index
                    ? "bg-[#93C553] scale-125"
                    : "bg-[#609647]"
                }`}
                ></button>
            ))}
            </div>
    </div>
      )
    
  )
}