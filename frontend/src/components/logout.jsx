"use client";

import { useEffect,useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/context/ToastContext";
import { useAuth } from "@/context/AuthContext";
import { Router } from "next/router";


export default function Logout()
{     
    const router=useRouter();
    const {token,setToken}=useAuth();
    
     const handleLogout=()=>{
            setToken(null);
            localStorage.clear();
            router.push("/login");
        }

        return(
            <div className="p-4">
                 <button onClick={handleLogout} className="bg-red-400 hover:bg-red-300 hover:cursor-pointer p-3 rounded-xl text-white" 
              aria-label="close button"
                 >Logout</button>
            </div>
        )
}