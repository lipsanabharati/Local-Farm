"use client"

import { useEffect,useState } from "react"
import axios from "axios";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function EventCarousel()
{
  const [events,setEvents]=useState([]);
  const [current,setCurrent]=useState(0);
  useEffect(
     ()=>{
      axios.get(`http://localhost:5000/api/upcomingevents`)
      .then(
        (res)=>{
          setEvents(res.data);
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
      events.length>0 && (
        <div className="flex flex-col items-center justify-center bg-[#FFAA00]/10 py-2 mb-10 md:mb-20">
        <div className="flex flex-col"
        >
            {/*PIN Image */}
         <div className="flex justify-end -mb-25 z-10">
            <img src="pin.png" className="w-30" />
        </div>
            {/*Slide*/}
            <div className="flex flex-col md:flex-row gap-4 bg-white rounded-2xl p-5 w-80 md:w-150 lg:w-200">
                {/*Image*/}
               <div
                  className=" bg-cover bg-center w-full h-50 lg:h-70 rounded-2xl md:w-1/2"
                  style={{
                    backgroundImage: `url(${
                      events[current]?.photos?.[0]?.imagePath
                        ? `http://localhost:5000/${events[current].photos[0].imagePath}`
                        : "/error.png"
                    })`
                  }}
                ></div>



         <div className="flex flex-col gap-4 md:w-1/2">
               <h1 className="text-2xl md:text-3xl font-bold text-[#609647] -mb-3">{events[current].eventTitle}</h1>

             <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaCalendarAlt className="text-xl text-[#93C553]"/>
                   <span className="text-lg">March 25, 2026</span>
                   </div>

               <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FaMapMarkerAlt className="text-xl text-[#93C553]" />
                        <span className="text-lg">Kathmandu</span>
               </div>       
             </div>

             <div className="text-lg">
                {events[current].eventDescription}
             </div>
            </div>
        </div>
       </div>

         {/* Dots */}
            <div className="flex justify-center mt-8 gap-3">
            {events.map((_, index) => (
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