"use client";

import { createContext,use,useContext,useEffect,useState } from "react";

const AuthContext=createContext();

export function AuthProvider({children}){
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [loading,setLoading]=useState(true);
    const [token,setToken]=useState(null);

    useEffect(()=>{
        const storedToken=localStorage.getItem("token");

        if(storedToken)
        {
            setIsAuthenticated(true);
            setToken(storedToken);
        }
        else{
            setIsAuthenticated(false);
            setToken(null);
        }
        setLoading(false);
    },[])

    return(
        <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated,loading,token,setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth()
{
    return useContext(AuthContext);
}