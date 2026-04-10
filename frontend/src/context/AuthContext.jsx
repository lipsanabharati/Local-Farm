"use client";

import { createContext,useContext,useEffect,useState } from "react";

const AuthContext=createContext();

export function AuthProvider({children}){
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const token=localStorage.getItem("token");

        if(token)
        {
            setIsAuthenticated(true);
        }
        else{
            setIsAuthenticated(false);
        }
        setLoading(false);
    },[])

    return(
        <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated,loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth()
{
    return useContext(AuthContext);
}