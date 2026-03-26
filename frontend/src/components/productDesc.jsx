"use client";

import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function ProductDesc({id})
{
    const [product,setProduct]=useState({});

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/products/${id}`)
        .then((res)=>{
             setProduct(res.data);
             console.log(res.data);
        })
        .catch((err)=>{
             console.error(err);
             setProduct({});
        })
    },[id]);
    

    console.log(product);

     const {addToCartNum}=useContext(CartContext);
     const [quantity,setQuantity]=useState(0);


    return(
    <>
        {product && (
       <div className="flex flex-row justify-center w-screen px-20 md:p-20 lg:px-30 m-20 ">

            <div className="flex md:flex-row  flex-col justify-center gap-5 lg:gap-10 w-full lg:w-[60%]">
                {/*Images*/}
                <div className="flex flex-col md:w-1/2 w-full  items-start justify-start gap-4">
                    <div className="bg-[#EFEAE6] p-5 w-full flex flex-row items-center justify-center">
                        <img src={product.photos?.[0]?.imagePath
                        ? `http://localhost:5000/${product.photos[0].imagePath}`
                        : "/error.png"}
                        alt={product.productName}
                        className="w-20 md:w-30"/>
                    </div>
                    {
                        product.photos?.length>1 && (
                           <div className="flex flex-row gap-3">
                              {
                                product.photos?.slice(1).map((photo,index)=>(
                                    <div className="bg-[#EFEAE6] p-5">
                                <img src={photo.imagePath
                                ? `http://localhost:5000/${photo.imagePath}`
                                : "/error.png"}
                                alt={product.productName}
                                className="w-20 md:w-30"/>
                            </div>
                                ))
                              }
                           </div> 
                        )
                    }
                </div>

                {/*Desc*/}
                <div className="flex flex-col justify-start md:w-1/2 w-full gap-2">
                    <h1 className="text-2xl lg:text-3xl font-bold text-[#609647]">{product.productName}</h1>
                    <p className="text-md lg:text-lg text-[#93C553]">Rs {product.price}</p>
                    <p className="text-sm lg:text-lg">{product.description}</p>


                    <fieldset className="border border-[#93C553] rounded-xl px-2 pb-2 mb-3">
                    <legend className="px-2 text-[#93C553]">Quantity</legend>
                    <input
                        type="number"
                        className="w-full bg-gray-200 rounded-lg p-2 outline-none focus:border-[#93C553] focus:border-2 "
                        value={quantity}
                        onChange={(e)=>setQuantity(e.target.value)}
                    />
                    </fieldset>

                    <button 
                    className="w-full bg-[#93C553] text-white py-2 rounded-xl text-md font-medium hover:opacity-90 transition hover:cursor-pointer hover:bg-[#609647]"
                    onClick={()=>addToCartNum(product,product.id,quantity)}
                    >Add to Cart</button>
                </div>
            </div>
       </div>
    )}
    </>
    )
}