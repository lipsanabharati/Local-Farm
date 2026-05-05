"use client"
import dynamic from "next/dynamic";
import EventCarousel from "@/components/eventCarousel"
// import EventCard from "@/components/eventCard"
const EventCard  = dynamic(() => import("@/components/eventCard"), {
  loading: () => <p>Loading...</p>,
});


export default function Event()
{
    return(
       <section className="flex flex-col max-w-[1440px] w-screen mt-20 overflow-hidden">

        {/*Hero Section*/}
        <div className="flex flex-row justify-center items-center mb-10">

            <img src="/event-bg.webp" className="w-1/2 lg:w-full"  alt="event image"/>

            <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold text-gray-600 mt-10 text-end pe-12 md:me-25 lg:me-40 w-1/2 lg:w-auto ">Join us as we grow together.</h1>
        </div>

        <div className="flex flex-row justify-start  lg:ps-20 md:ps-15 ps-22 w-screen">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#609647] -mb-3">Upcoming Events</h1>
        </div>

        <div>
            <EventCarousel  />
        </div>

        <div className="w-screen max-w-[1440px] flex justify-center">
            <EventCard />
        </div>
       </section>
    )
}