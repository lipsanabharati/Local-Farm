"use client";

import {motion} from "framer-motion";
import { useState } from "react";

export default function Header()
{
    const [open,setOpen]=useState(false);
    const toggleMenu=()=>setOpen(!open);
    return(
        <motion.div 
        className="lg:grid lg:grid-cols-2 lg:gap-10 lg:gap-80 lg:my-10 lg:mx-20 lg:p-2 lg:w-full fixed flex flex-row gap-15 my-5 mx-5 md:gap-65"
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
            <div className="">
              <img src="logo.svg" className="h-[45px] w-[170px]"/>
            </div>


            {/*Items*/}
            <div className=" hidden font-heading lg:flex lg:flex-row gap-10 items-center">
                <div>Home</div>
                <div>About</div>
                <div>Blog</div>
                <div>Contact</div>
                <div>Shops</div>
            </div>

            

            {open && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="p-2 absolute top-full left-0 w-[100px] bg-white/20 flex flex-col gap-2 items-start lg:hidden rounded-lg backdrop-blur-sm"
            >
                <div>Home</div>
                <div>About</div>
                <div>Blog</div>
                <div>Contact</div>
                <div>Shops</div>
            </motion.div>
            )}

        </motion.div>
    );
};