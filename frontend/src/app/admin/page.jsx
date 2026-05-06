"use client";

import {useEffect,useState} from "react";
import {useRouter} from "next/navigation";

import ProductAdmin from "@/components/productAdmin"
import dynamic from "next/dynamic";


// import EventAdmin from "@/components/eventAdmin";
const EventAdmin = dynamic(() => import("@/components/eventAdmin"), {
  loading: () => <p>Loading...</p>,
});

// import BlogAdmin from "@/components/blogAdmin";
const BlogAdmin = dynamic(() => import("@/components/blogAdmin"), {
  loading: () => <p>Loading...</p>,
});

// import OrderAdmin from "@/components/orderAdmin";
const OrderAdmin = dynamic(() => import("@/components/orderAdmin"), {
  loading: () => <p>Loading...</p>,
});


// import ContactAdmin from "@/components/contactAdmin";
const  ContactAdmin = dynamic(() => import("@/components/contactAdmin"), {
  loading: () => <p>Loading...</p>,
});

// import CategoryAdmin from "@/components/categoryAdmin";
const  CategoryAdmin = dynamic(() => import("@/components/categoryAdmin"), {
  loading: () => <p>Loading...</p>,
});


// import MainAdmin from "@/components/mainAdmin";
const  MainAdmin = dynamic(() => import("@/components/mainAdmin"), {
  loading: () => <p>Loading...</p>,
});

// import StaffAdmin from "@/components/staffAdmin";
const  StaffAdmin = dynamic(() => import("@/components/staffAdmin"), {
  loading: () => <p>Loading...</p>,
});

// import FaqAdmin from "@/components/faqAdmin";
const   FaqAdmin  = dynamic(() => import("@/components/faqAdmin"), {
  loading: () => <p>Loading...</p>,
});

// import Logout from "@/components/logout";
const   Logout  = dynamic(() => import("@/components/logout"), {
  loading: () => <p>Loading...</p>,
});


import { useAuth } from "@/context/AuthContext";

export default function Admin(){  
    const router= useRouter();
    const {isAuthenticated,loading}=useAuth();
    const [activeTab,setActiveTab]=useState("products");

    //localstorage can only be accessed in the client
    //   useEffect(() => {
    // console.log("TOKEN:", localStorage.getItem("token"));
    //     }, []);
        
    // console.log("isAuthenticated:", isAuthenticated);
    // console.log("loading:", loading);


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
         {id:"category",label:"Category"},
         {id:"staff",label:"Staff"},
         {id:"faq",label:"FAQS"},
         {id:"changePass",label:"Change Password"}
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
                            className={`pb-2 text-lg transition ${activeTab===tab.id? "border-b-2 border-[#609647] text-[##93C553] hover:cursor-pointer" :"text-gray-500 hover:cursor-pointer hover:text-black"}`}
                            aria-label={tab.label}>
                                {tab.label}
                        </button>
                    ))
                }
                <Logout />
            </div>

           

             <div className="mt-6">
                 {activeTab === "changePass" && (<div>
                 <MainAdmin />
                </div>)}
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
                 {activeTab === "staff" && <div>
                 <StaffAdmin />
                </div>}
                 {activeTab === "faq" && <div>
                 <FaqAdmin />
                </div>}
            </div>
       </section>
    )
}