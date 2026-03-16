"use client";
import { useContext,useState } from "react";
import  {CartContext}  from "@/context/CartContext";


export default function CartCard()
{
    const {cart,addToCart,removeFromCart,clearCart,increaseAmount,decreaseAmount,itemAmount,total}=useContext(CartContext);
    console.log("Cart",cart);

    
    return(
        <div className="">
            {
                cart.length===0 &&(
                   <div className="flex justify-center items-center w-full py-10">
                    <p className="text-gray-500 text-lg">No items in cart.</p>
                    </div>
                )
            }

             {cart.length>0 && cart.map((product,index)=>(
                        <div key={index}
                        className="flex flex-row justify-start p-5 gap-5 md:gap-10 border-t border-b border-gray-400 m-2 mt-5 lg:mb-10 h-50">
                        {/*Image */}
                        <div className=" lg:w-1/2 md:w-1/5 w-1/2  flex justify-center bg-white p-2">
                                <img 
                                className="object-contain" 
                                src={product.photos?.[0]?.imagePath
                        ? `http://localhost:5000/${product.photos[0].imagePath}`
                        : "/error.png"
                        }
                        alt={product.productName}
                    ></img>
                        </div>

                        {/*Info */}
                        <div className="flex flex-col gap-2">
                                <p className="font-bold text-xl text-[#93C553]">{product.productName}</p>

                                <p className="text-[#93C553]">Rs. {product.price} </p>
                                
                                {/*Plus and minus*/}
                                <div className="flex flex-row w-25">
                                    <button 
                                    onClick={()=>{increaseAmount(product.id)}}
                                    className="bg-black text-white w-1/3 flex justify-center hover:cursor-pointer hover:bg-gray-600">
                                    +
                                    </button>
                                    <div className="bg-white text-black w-1/3 flex justify-center">
                                    {product.amount}
                                    </div>
                                    <button 
                                    onClick={()=>{decreaseAmount(product.id)}}
                                    className="bg-black text-white w-1/3 flex justify-center hover:cursor-pointer hover:bg-gray-600">
                                    -
                                    </button>
                                </div>
                        </div>
                        </div>
                    ))
                }
        </div>
    )
}