"use client";

import { useEffect,useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/context/ToastContext";

export default function Login()
{
    const [username,setUsername] =useState("");
    const [password,setPassword] = useState("");
     const { showSuccess, showFail } = useToast();

    const router=useRouter();

    const handleSubmit= async (e) =>{
        e.preventDefault();

        if(!username || !password)
        {
            showFail("Username and Password are required.");
        }

        try
        {
            const response=await axios.post("http://localhost:5000/api/login",{
                username:username,
                password:password
            });

            const token=response.data.token;
            localStorage.setItem("token",token);
            router.push("/admin");
        }
        catch(error)
        {
            if(error.response)
            {
                showFail(error.response.data.message);
            }
            else
            {
                showFail("Server Error");
            }
        }
    };

    return(
        <section className="flex flex-col items-center px-4 py-12 mt-40 mb-40">
                <div className="bg-white p-10 rounded-3xl shadow-xl shadow-indigo-100/50 w-full max-w-md border border-gray-100">
                    <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">
                        Welcome Back
                    </h2>
                    <p className="text-gray-500 text-center mb-8 font-medium">Please enter your credentials to login</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label  className="text-sm font-bold text-gray-700 ml-1">Username</label>
                            <input 
                                type="text" 
                                id='username' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553]
                                 focus:bg-white outline-none transition-all text-gray-800"
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="password" className="text-sm font-bold text-gray-700 ml-1">Password</label>
                            <input 
                                type="password" 
                                id='password' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>

                        <button 
                            type='submit' 
                            className="mt-4  bg-[#609647] text-white py-4 rounded-2xl font-bold hover:bg-[#93C553] hover:cursor-pointer transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]"
                        >
                            Login
                        </button>
                    </form>
                    
                </div>
            </section>
    )

}