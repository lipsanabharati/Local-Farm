"use client";

import {useEffect,useState} from "react";
import {useRouter} from "next/navigation";
import ProductAdmin from "@/components/productAdmin"
import EventAdmin from "@/components/eventAdmin";

export default function Admin()
{
    const router= useRouter();

     useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
        router.push("/login");
        }
    }, []);

    const [activeTab,setActiveTab]=useState("products");

    const tabs=[
        {id:"products",label:"Products"},
        {id:"orders",label:"Orders"},
        {id:"blog",label:"Blog"},
        {id:"event",label:"Event"},
    ];


    return(
       <section className="p-6 max-w-[1440px] mt-40">
            {/*Tabs Header*/}
            <div className="flex flex-row gap-5">
                    {
                    tabs.map((tab)=>(
                        <button
                            key={tab.id}
                            onClick={()=>setActiveTab(tab.id)}
                            className={`pb-2 text-lg transition ${activeTab===tab.id? "border-b-2 border-[#609647] text-[##93C553] hover:cursor-pointer" :"text-gray-500 hover:cursor-pointer hover:text-black"}`}>
                                {tab.label}
                        </button>
                    ))
                }
            </div>

             <div className="mt-6">
            {activeTab === "products" && 
               (<div>
                  <ProductAdmin />
                </div>)}
            {activeTab === "orders" && 
            <div>
               
            </div>}
            {activeTab === "blog" && <div></div>}
            {activeTab === "event" && <div>
                 <EventAdmin />
                </div>}
            </div>
       </section>
    )
}