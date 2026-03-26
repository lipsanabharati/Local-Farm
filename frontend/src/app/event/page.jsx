"use client"

import EventCarousel from "@/components/eventCarousel"
import EventCard from "@/components/eventCard"

export default function Event()
{
    return(
       <section className="flex flex-col max-w-[1440px] mt-20">

        {/*Hero Section*/}
        <div className="flex flex-row justify-center items-center mb-10">

            <img src="/event-bg.png" className="w-1/2 lg:w-full" />

            <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold text-gray-600 mt-10 text-end pe-12 md:me-25 lg:me-40 w-1/2 lg:w-auto ">Join us as we grow together.</h1>
        </div>

        <div className="flex flex-row justify-start px-5 lg:px-20 md:px-15">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#609647] -mb-3">Upcoming Events</h1>
        </div>

        <div>
            <EventCarousel />
        </div>

        <div>
            <EventCard />
        </div>
       </section>
    )
}