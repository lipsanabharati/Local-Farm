"use client";

import {useEffect,useState} from "react";
import {useRouter} from "next/navigation";
import ProductAdmin from "@/components/productAdmin"
import EventAdmin from "@/components/eventAdmin";
import BlogAdmin from "@/components/blogAdmin";
import OrderAdmin from "@/components/orderAdmin";
import ContactAdmin from "@/components/contactAdmin";
import CategoryAdmin from "@/components/categoryAdmin";
import { useAuth } from "@/context/AuthContext";

export default function Admin()
{  
    const router= useRouter();
    const {isAuthenticated,loading}=useAuth();
    const [activeTab,setActiveTab]=useState("products");

    //localstorage can only be accessed in the client
      useEffect(() => {
    console.log("TOKEN:", localStorage.getItem("token"));
        }, []);
        
    console.log("isAuthenticated:", isAuthenticated);
    console.log("loading:", loading);


   useEffect(()=>{
     if(!loading && !isAuthenticated)
    {
        router.push("/login")
    }
    
   },[loading,isAuthenticated])

    if(loading)
    {
        return <div>Checking Authentication...</div>;
    }

   
    if(!isAuthenticated){
        return null;
    }

   

    const tabs=[
        {id:"products",label:"Products"},
        {id:"orders",label:"Orders"},
        {id:"blog",label:"Blog"},
        {id:"event",label:"Event"},
        {id:"contact",label:"Contact"},
         {id:"category",label:"Category"}
    ];

   
   
    return(
       <section className="p-6 max-w-[1440px] mt-40 flex flex-col items-center overflow-hidden">
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
               <OrderAdmin />
            </div>}
            {activeTab === "blog" && <div>
                <BlogAdmin />
                </div>}
            {activeTab === "event" && <div>
                 <EventAdmin />
                </div>}
             {activeTab === "contact" && <div>
                 <ContactAdmin />
                </div>}
                 {activeTab === "category" && <div>
                 <CategoryAdmin />
                </div>}
            </div>
       </section>
    )
}