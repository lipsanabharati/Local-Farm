"use client"
import CartCard from "@/components/cartCard"
import { useContext, useState } from "react"
import { CartContext } from "@/context/CartContext"
import axios from "axios"
import { useToast } from "@/context/ToastContext"

export default function Cart()
 {
    const {cart,clearCart,total}=useContext(CartContext);

    //form states

    const [customerName,setCustomerName]=useState("");
    const [customerAddress,setCustomerAddress]=useState("");
    const [customerPhone,setCustomerPhone]=useState(0);
    const [customerEmail,setCustomerEmail]=useState("");


    //success,error and loading states
    const [loading,setLoading]=useState("");
    const [success,setSuccess]=useState("");
    const [error,setError]=useState("");

    //toast
    const {showSuccess,showFail}=useToast();
   

    //handle form submission
    const handleCheckout=async ()=>{
         if (!customerName || !customerAddress || !customerPhone || !customerEmail) {
            showFail("Please fill all required fields");
            return;
            }

        //mapping cart to API format
        const items=cart.map((item)=>(
            {
                productId:item.id,
                productName:item.productName,
                price:item.price,
                quantity:item.amount,
            }
        ))

        const orderData={
            customerName,
            customerPhone,
            customerEmail,
            customerAddress,
            items,
        };

        try {
            setLoading(true);
            setSuccess("");
            setError("");

            const res = await axios.post("http://localhost:5000/api/orders", orderData);
            setSuccess("Order placed successfully!");
            clearCart();
        } catch (error) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }

    };


    return(
        <section className="max-w-[1440px] flex flex-col lg:flex lg:flex-row justify-center md:justify-start mt-40 p-5 md:p-10 w-full">
            
            <div className="flex flex-col lg:w-1/2 lg:ms-50">
            {/*Heading*/}
            <h2 className="text-[#93C553] text-2xl">My Cart</h2>
            
            <CartCard />
            </div>

            {/*Form*/}
           <div className="flex flex-col items-center justify-center bg-[#f3f6ee] m-5 md:m-10 lg:w-1/2">
             <div className="bg-white w-[380px] p-8 rounded-3xl shadow-xl">

           
            <h2 className="text-2xl font-semibold text-[#93C553] mb-4">Your Order</h2>
            <hr className="mb-6 border-gray-300"/>

           
            <div className="flex justify-between text-lg mb-6">
            <span>Subtotal:</span>
            <span className="font-semibold">{total}</span>
            </div>

              
            <fieldset className="border border-[#93C553] rounded-xl px-4 pb-3 mb-5">
            <legend className="px-2 text-[#93C553]">Full Name</legend>
            <input
                type="text"
                className="w-full bg-gray-100 rounded-lg p-2 outline-none focus:border-[#93C553] focus:border-2 "
                value={customerName}
                onChange={(e)=>setCustomerName(e.target.value)}

            />
            </fieldset>
            
            <fieldset className="border border-[#93C553] rounded-xl px-4 pb-3 mb-5">
            <legend className="px-2 text-[#93C553]">Address</legend>
            <input
                type="text"
                className="w-full bg-gray-100 rounded-lg p-2 outline-none focus:border-[#93C553] focus:border-2 "
                value={customerAddress}
                onChange={(e)=>setCustomerAddress(e.target.value)}
            />
            </fieldset>

           
            <fieldset className="border border-[#93C553] rounded-xl px-4 pb-3 mb-5">
            <legend className="px-2 text-[#93C553]">Phone Number</legend>
            <input
                type="text"
                className="w-full bg-gray-100 rounded-lg p-2 outline-none focus:border-[#93C553] focus:border-2"
                 value={customerPhone}
                onChange={(e)=>setCustomerPhone(e.target.value)}
            />
            </fieldset>

            
            <fieldset className="border border-[#93C553] rounded-xl px-4 pb-3 mb-5">
            <legend className="px-2 text-[#93C553]">Email</legend>
            <input
                type="email"
                className="w-full bg-gray-100 rounded-lg p-2 outline-none focus:border-[#93C553] focus:border-2"
                 value={customerEmail}
                onChange={(e)=>setCustomerEmail(e.target.value)}
            />
            </fieldset>


           
            <button
            className="w-full bg-[#93C553] text-white py-3 rounded-xl text-lg font-medium hover:opacity-90 transition hover:cursor-pointer hover:bg-[#609647]"
            onClick={handleCheckout}
            >
           {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>

        {success && (
            <div className=" text-green-700 p-5 ">
                {success}
            </div>
            )}

            {error && (
            <div className=" text-red-700 p-5">
                {error}
            </div>
            )}
        </div>
        </section>
    )
}