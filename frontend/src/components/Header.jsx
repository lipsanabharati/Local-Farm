"use client";

import {motion} from "framer-motion";

export default function Header()
{
    return(
        <motion.div 
        className="flex flex-row gap-[48%] my-[20px] mx-[80px] p-2 w-full fixed"
        initial={{ y:-100 }}
        animate={{ y:0}}
        transition={{ duration: 2 }}
        >
            {/*Logo*/}
            <div>
              <img src="logo.svg" className="h-[45px] w-[170px]"/>
            </div>


            {/*Items*/}
            <div className="font-heading flex flex-row gap-10 items-center">
                <div>Home</div>
                <div>About</div>
                <div>Blog</div>
                <div>Contact</div>
                <div>Shops</div>
            </div>

        </motion.div>
    );
};