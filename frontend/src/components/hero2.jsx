"use client";

import Link from "next/link";

export default function Hero2(){
    return(
        <section className=" my-40 w-screen flex flex-col">
            <div className="p-5 md:ps-20 lg:ps-30 flex flex-col justify-start gap-2 md:gap-5 ">
                <h1 className="text-[#609647] font-heading font-bold text-lg md:text-2xl lg:text-4xl xl:text-5xl z-10">
                        Discover fresh organic goodness today.
                      </h1>
                
                     <div>
                       <Link
                        href={`/shop`}
                        className="md:py-3 md:px-8 py-2 px-3 bg-[#609647] rounded-xl font-heading font-bold md:text-lg text-xs hover:cursor-pointer hover:bg-[#93C553]"
                        aria-label="go to shop"
                      >
                        Shop Now
                      </Link>
                     </div>
            </div>

            <div className=" h-[400px] md:h-[600px] lg:h-[800px]
              bg-[url('/hero-mobile.png')] 
            md:bg-[url('/hero-tablet.png')]
             lg:bg-[url('/hero-desktop.png')]
            bg-cover bg-center bg-no-repeat " >
               
            </div>

        </section>
    )
}