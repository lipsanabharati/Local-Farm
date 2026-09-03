"use client";

import Link from "next/link";

export default function Hero2(){
    return(
        <section className="relative my-40 h-svh max-h-200 lg:h-screen lg:max-h-screen overflow-x-clip overflow-hidden">
            <div className="absolute inset-0
              bg-[url('/hero-mobile3.svg')]
            md:bg-[url('/hero-tablet3.svg')]
             lg:bg-[url('/hero-desktop3.svg')]
            bg-cover bg-center bg-no-repeat" >
            </div>

            <div className="relative z-10 h-full p-5 md:ps-20 lg:ps-30 flex flex-col justify-start gap-2 md:gap-10 xl:top-20">
                <h1 className="text-[#609647] font-heading font-bold text-lg md:text-2xl lg:text-4xl xl:text-5xl ">
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

        </section>
    )
}