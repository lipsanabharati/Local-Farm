"use client";

import {useState,useEffect} from "react";
import axios from "axios";
import Link from "next/link";

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
  
  const nextSlide=()=>{
    setCurrent((current+1)%blogs.length);
  };

  const prevSlide=()=>{
    setCurrent((current-1+blogs.length)%blogs.length);
  };

  return(
    
      blogs.length>0 && (
        <div className="flex flex-col items-center justify-center bg-transparent py-5 px-10">
        <div className="flex flex-col"
        >

            {/*Slide*/}
            <div className="flex lg:flex-row flex-col  lg:gap-5 md:gap-10 gap-5 bg-[#f4eac3] ">

                {/*Image*/}
               <div
                  className="lg:w-1/2 w-full h-[250px] sm:h-[300px] lg:h-[400px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      blogs[current]?.photos?.[0]?.imagePath
                        ? `http://localhost:5000/${blogs[current].photos[0].imagePath}`
                        : "/error.png"
                    })`,
                  }}
                ></div>

                {/*Text*/}
                <div className="lg:w-1/2 flex flex-col gap-3 px-10 py-5">
                    <h2 className="md:text-4xl text-2xl text-[#609647] font-bold"  dangerouslySetInnerHTML={{ __html: blogs[current].title }}>
                    </h2>

                    <p className="text-gray-600 md:text-lg text-sm" dangerouslySetInnerHTML={{ __html: blogs[current].introduction }}>
                    </p>

                    <Link 
                    className="py-3 px-4 bg-[#93C553] text-white rounded-xl text-md font-medium hover:opacity-90 transition hover:cursor-pointer hover:bg-[#609647] w-30"
                    href={`/blog/${blogs[current].slug}`}
                    >Read More</Link>
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