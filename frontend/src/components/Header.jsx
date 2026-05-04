"use client";

import {motion} from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Header()
{
    const [open,setOpen]=useState(false);
    const toggleMenu=()=>setOpen(!open);
    return(
        <section className="flex flex-row lg:justify-center -mb-40">
        <motion.div 
        className="lg:grid lg:grid-cols-2 lg:gap-[0%] lg:my-10 lg:mx-10 lg:p-2 w-full flex flex-row gap-15 my-5 mx-5 md:gap-65 max-w-[1440px] z-32 "
        initial={{ y:-100 }}
        animate={{ y:0}}
        transition={{ duration: 2 }}
        >

            {/*Mobile Menu*/}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-3xl hover:cursor-pointer"
              aria-label="toggle button"
              >
                   {open? "X":"☰"}
              </button>
            </div>

            {/*Logo*/}
            <Link href="/" className="lg:ms-[30%]">
              <img src="/logo.svg" className="h-[45px] w-[170px]" alt="logo image"/>
            </Link>


            {/*Items*/}
            <div className=" hidden font-heading lg:flex lg:flex-row gap-10 items-center justify-center">
            
                <Link href="/" className="hover:text-[#609647]" aria-label="go to home"  >Home</Link>
                <Link href="/about" className="hover:text-[#609647]" aria-label="go to about" >About</Link>
                <Link href="/blog/local-farm-bee-pollen" className="hover:text-[#609647]" aria-label="go to blog">Blog</Link>
                <Link href="/shop" className="hover:text-[#609647]" aria-label="go to shop">Shops</Link>
                <Link href="/cart" className="hover:text-[#609647]" aria-label="go to cart">Cart</Link>
                <Link href="/event" className="hover:text-[#609647]" aria-label="go to events">Events</Link>
            </div>

            

            {open && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="p-2 absolute top-15 left-0 w-full bg-white/20 flex flex-col gap-2 items-start lg:hidden rounded-lg backdrop-blur-sm z-50 ps-5"
            >
                 <Link href="/" onClick={toggleMenu} className="hover:text-[#609647]" aria-label="go to home">Home</Link>
                <Link href="/about" onClick={toggleMenu} className="hover:text-[#609647]" aria-label="go to about">About</Link>
                <Link href="/blog/local-farm-bee-pollen" className="hover:text-[#609647]" onClick={toggleMenu} aria-label="go to blog">Blog</Link>
                <Link href="/shop" className="hover:text-[#609647]" onClick={toggleMenu} aria-label="go to shop">Shops</Link>
                <Link href="/cart" className="hover:text-[#609647]" onClick={toggleMenu} aria-label="go to cart">Cart</Link>
                <Link href="/event" className="hover:text-[#609647]" onClick={toggleMenu} aria-label="go to events">Events</Link>
            </motion.div>
            )}

        </motion.div>

     </section>
    );
};