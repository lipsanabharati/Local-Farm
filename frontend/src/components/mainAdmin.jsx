"use client";

import { useEffect,useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/context/ToastContext";
import { useAuth } from "@/context/AuthContext";
import { Router } from "next/router";





export default function MainAdmin(){

    const {showSuccess, showFail } = useToast();
    const [showForm,setShowForm]=useState(false);
     //change password 
    const [currentPassword,setCurrentPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [submitting,setSubmitting]=useState(false);

    const router=useRouter();

    const {token,setToken}=useAuth();

    console.log("token",token);
     
    const handlePasswordChangeClick=()=>{
            setShowForm(true);
        }
    
        const handleChangePasswordSubmit= async (e)=>{
            e.preventDefault();

            if(submitting) return;

            setSubmitting(true);
            
            try
            {
                const response=await axios.put("http://localhost:5000/api/admin/change-password",
               
                {
                   currentPassword,
                   newPassword,
                   confirmPassword
                },
                 {
                    headers:
                    {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
                showSuccess("Password Changed Successfull!");
                console.log("success hit");
            }
            catch(error)
            {
                if(error.response)
                {
                    showFail(error.response.data.message);
                }
                console.log("error hit");
            }
            finally{
                setSubmitting(false);
                setShowForm(false);
            }
            
        }

        const handleLogout=()=>{
            setToken(null);
            localStorage.clear();
            router.push("/login");
        }

    return (
       <section className="p-40">
         <div className="flex flex-row gap-3 mt-5">
            <button onClick={handlePasswordChangeClick} className="bg-[#609647] hover:bg-[#93c553] hover:cursor-pointer p-3 rounded-xl text-white">Change Password</button>
             <button onClick={handleLogout} className="bg-red-400 hover:bg-red-300 hover:cursor-pointer p-3 rounded-xl text-white">Logout</button>
         </div>

         {
                    showForm &&(
                        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
    
                            <div className="bg-white p-8 rounded-2xl w-[500px] max-h-[90vh] overflow-y-auto shadow-2xl">
                            
                            {/* Close Button */}
                            <button
                                onClick={() => setShowForm(false)}
                                className="float-right text-red-500 font-bold"
                            >
                                X
                            </button>

                    <form onSubmit={handleChangePasswordSubmit} className="flex flex-col gap-5">

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Current Password</label>
                            <input 
                                type="password" 
                                id='current-password' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={currentPassword} 
                                onChange={(e) => setCurrentPassword(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">New Password</label>
                            <input 
                                type="password" 
                                id='password' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={newPassword} 
                                onChange={(e) => setNewPassword(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Confirm Password</label>
                            <input 
                                type="password" 
                                id='confirm-password' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        
                        <button 
                            type='submit' 
                            className="mt-4  bg-[#609647] text-white py-4 rounded-2xl font-bold hover:bg-[#93C553] hover:cursor-pointer transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]"
                        >
                            Change Password
                        </button>
                    </form>

                    </div>
                </div>
                    )
                }
        </section>
    )
}