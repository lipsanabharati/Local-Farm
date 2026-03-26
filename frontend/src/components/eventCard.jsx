"use client";

import { FaCalendarAlt,FaMapMarkerAlt } from "react-icons/fa";
import { useEffect,useState } from "react";
import axios from "axios";

export default function EventCard()
{
    const [events,setEvents]=useState([]);
     useEffect(
     ()=>{
      axios.get(`http://localhost:5000/api/events`)
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

    console.log(events);
  return(
    <div className="flex flex-col gap-30 justify-center items-center mt-20 mb-30 w-full">
    { events.length>0 && (

        events.map((event,index)=>{

            const isEven=(index%2===0)?true:false;
            const path = isEven
                ? "M 80 0 Q 350 150 200 400"
                : "M 250 0 Q 50 150 200 400";
           return (
    <div key={index} 
    className={`flex flex-col ${isEven? "items-end" : "items-start"} w-full px-30 md:px-100 lg:px-100 `}>
        {/*Thread*/}
        <div className={`flex ${isEven? "justify-end" : "justify-start"} -mt-60 -mb-20`}>
        <svg className=" w-full h-[350px] -z-2">
            <path
                d={path}
                stroke="#F59E0B"
                strokeWidth="2"
                fill="none"
            />
            </svg>
        </div> 

        <div className={`flex flex-col gap-4 bg-white rounded-2xl p-5 w-70 lg:w-90 shadow-2xl ${isEven? "rotate-[8deg]":"rotate-[-10deg]"} z-10`}
        >

        <div className="flex justify-center">
            <img src="/thumbpin.png" className="-mt-12" />
        </div>

         <div className="flex flex-col gap-4">
               <h1 className="text-2xl md:text-3xl font-bold text-[#609647] -mb-3">
                {event.eventTitle}
               </h1>

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
               {event.eventDescription}
             </div>
            </div>

             {/*Image*/}
               <div
                  className=" bg-cover bg-center w-full h-45 rounded-2xl "
                  style={{
                    backgroundImage: `url(${
                      event?.photos?.[0]?.imagePath
                        ? `http://localhost:5000/${event.photos[0].imagePath}`
                        : "/error.png"
                    })`
                  }}
                ></div>
        </div>
     </div>
        )})
     )}
     </div>
  )
  
}