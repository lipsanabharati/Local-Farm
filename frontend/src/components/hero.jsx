"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-screen  h-screen flex flex-row lg:justify-start justify-center lg:items-center items-end  pt-200 overflow-hidden relative">
      <picture>
        <source media="(min-width: 1024px)" srcSet="https://res.cloudinary.com/dpff5cxm3/image/upload/v1787108044/hero_j5qpub.svg" />
        <source media="(min-width: 932px)" srcSet="https://res.cloudinary.com/dxpp5arsp/image/upload/v1788177706/768X834.svg" />
        {/* <source media="(min-width: 768px)" srcSet="https://res.cloudinary.com/dpff5cxm3/image/upload/v1787108051/hero-tablet_ec8wtm.svg" /> */}
        <img
          src="https://res.cloudinary.com/dpff5cxm3/image/upload/v1787108051/hero-mobile_j8nymp.svg"
          alt="hero image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      {/* <motion.div
        // initial={{ opacity: 0, x: 100 }}
        // animate={{ opacity: 1, x: 0 }}
        // transition={{ duration: 1, ease: "easeOut" }}
        // className="lg:w-80 lg:h-80 lg:left-30 lg:top-60 rounded-[11px] bg-white/1 backdrop-blur-sm border border-white/4 w-60 h-60 flex flex-col justify-end items-center pb-4"
      > */}
      {/*photo */}
      {/* <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute -top-[20%]"
        >
          <Image
            src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_auto/akabare_slaqmh"
            width={280}
            height={220}
            alt="akabare"
          />
        </motion.div> */}

      <div className="absolute top-40 left-10 md:top-50 md:left-20 lg:top-40 xl:top-40 lg:left-40  xl:left-40 flex flex-col gap-3 md:gap-5 ">
      <h1 className="text-[#609647] font-heading font-bold text-lg md:text-2xl lg:text-4xl xl:text-5xl z-10">
        Discover fresh organic goodness today
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
      {/* </motion.div> */}
    </section>
  );
}
