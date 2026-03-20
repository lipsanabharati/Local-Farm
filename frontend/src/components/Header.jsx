"use client";

import {motion} from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Header()
{
    const [open,setOpen]=useState(false);
    const toggleMenu=()=>setOpen(!open);
    return(
        <section className="flex flex-row lg:justify-center ">
        <motion.div 
        className="lg:grid lg:grid-cols-2 lg:gap-[0%] lg:my-10 lg:mx-10 lg:p-2 w-full fixed flex flex-row gap-15 my-5 mx-5 md:gap-65 max-w-[1440px]"
        initial={{ y:-100 }}
        animate={{ y:0}}
        transition={{ duration: 2 }}
        >

            {/*Mobile Menu*/}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-3xl">
                    ☰
              </button>
            </div>

            {/*Logo*/}
            <div className="lg:ms-[30%]">
              <img src="/logo.svg" className="h-[45px] w-[170px]"/>
            </div>


            {/*Items*/}
            <div className=" hidden font-heading lg:flex lg:flex-row gap-10 items-center justify-center">
                <Link href="/">Home</Link>
                <Link href="">About</Link>
                <Link href="">Blog</Link>
                <Link href="/shop">Shops</Link>
                <Link href="/cart">Cart</Link>

            </div>

            

            {open && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="p-2 absolute top-full left-0 w-[100px] bg-white/20 flex flex-col gap-2 items-start lg:hidden rounded-lg backdrop-blur-sm"
            >
                 <Link href="/">Home</Link>
                <Link href="">About</Link>
                <Link href="">Blog</Link>
                <Link href="/shop">Shops</Link>
                <Link href="/cart">Cart</Link>

            </motion.div>
            )}

        </motion.div>

     </section>
    );
};