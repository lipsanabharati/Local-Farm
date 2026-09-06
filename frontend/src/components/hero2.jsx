"use client";

import Link from "next/link";

export default function Hero2(){
    return(
        <section className="my-10 mt-40 w-screen flex flex-col">
            <div className= " p-5 ps-[15%] flex flex-col justify-start gap-2 md:gap-5 ">
                <h1 className="text-[#609647] font-heading font-bold text-lg md:text-2xl lg:text-4xl xl:text-5xl z-10">
                        Discover fresh organic goodness today.
                      </h1>
                
                     <div className="z-10">
                       <Link
                        href={`/shop`}
                        className="md:py-3 md:px-8 py-2 px-3 bg-[#609647] rounded-xl font-heading font-bold md:text-lg text-xs hover:cursor-pointer hover:bg-[#93C553] "
                        aria-label="go to shop"
                      >
                        Shop Now
                      </Link>
                     </div>
            </div>

            <div className=" h-[650px] mt-[-95] md:h-[600px] md:mt-30 lg:mt-[-80] lg:h-[800px] xl:h-[1000px]  bg-[url('/hero-mobile3.svg')] 
            md:bg-[url('/hero-tablet3.svg')]
             lg:bg-[url('/hero-desktop3.svg')]
            bg-cover bg-bottom bg-no-repeat" >
               
            </div>

        </section>
    )
}