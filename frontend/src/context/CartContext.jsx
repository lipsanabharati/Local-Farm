"use client";

import { createContext,useState,useEffect} from "react";

export const CartContext=createContext();

export function CartProvider({children})
{
    const [cart,setCart]=useState([]);

    //load cart from localStorage when rendered
    useEffect(
        ()=>{
            const savedCart=localStorage.getItem("cart");
            if(savedCart)
            {
                setCart(JSON.parse(savedCart));
            }
        },[]);

        //function to add product to card
        const addToCart=(product)=>{
            setCart((prevCart)=>{
                const updatedCart=[...prevCart,product];
                localStorage.setItem("cart",JSON.stringify(updatedCart));
                return updatedCart;
            });
        };

        //to remove product fro cart
        const removeFromCart=(index)=>{
            setCart((prevCart)=>{
                const updatedCart=prevCart.filter((_,i)=>i!==index);
                localStorage.setItem("cart",JSON.stringify(updatedCart));
                return updatedCart;
            });
        };

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}