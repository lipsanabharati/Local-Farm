"use client"
import CartCard from "@/components/cartCard"

export default function Cart()
{
    return(
        <section className="max-w-[1440px] flex flex-col lg:flex lg:flex-row justify-center md:justify-start mt-30 p-5 md:p-10 w-full">
            
            <div className="flex flex-col lg:w-1/2 lg:ms-50">
            {/*Heading*/}
            <h2 className="text-[#93C553] text-2xl">My Cart</h2>
            
            <CartCard />
            </div>

            {/*Form*/}
           <div className="flex items-center justify-center bg-[#f3f6ee] m-5 md:m-10 lg:w-1/2">
             <div className="bg-white w-[380px] p-8 rounded-3xl shadow-xl">

           
            <h2 className="text-2xl font-semibold text-[#93C553] mb-4">Your Order</h2>
            <hr className="mb-6 border-gray-300"/>

           
            <div className="flex justify-between text-lg mb-6">
            <span>Subtotal:</span>
            <span className="font-semibold">Rs.1200</span>
            </div>

              
            <fieldset className="border border-[#93C553] rounded-xl px-4 pb-3 mb-5">
            <legend className="px-2 text-[#93C553]">Full Name</legend>
            <input
                type="text"
                className="w-full bg-gray-100 rounded-lg p-2 outline-none focus:border-[#93C553] focus:border-2 "

            />
            </fieldset>
            
            <fieldset className="border border-[#93C553] rounded-xl px-4 pb-3 mb-5">
            <legend className="px-2 text-[#93C553]">Address</legend>
            <input
                type="text"
                className="w-full bg-gray-100 rounded-lg p-2 outline-none focus:border-[#93C553] focus:border-2 "

            />
            </fieldset>

           
            <fieldset className="border border-[#93C553] rounded-xl px-4 pb-3 mb-5">
            <legend className="px-2 text-[#93C553]">Phone Number</legend>
            <input
                type="text"
                className="w-full bg-gray-100 rounded-lg p-2 outline-none focus:border-[#93C553] focus:border-2"
            />
            </fieldset>

            
            <fieldset className="border border-[#93C553] rounded-xl px-4 pb-3 mb-5">
            <legend className="px-2 text-[#93C553]">Email</legend>
            <input
                type="email"
                className="w-full bg-gray-100 rounded-lg p-2 outline-none focus:border-[#93C553] focus:border-2"
            />
            </fieldset>

           
            <fieldset className="border border-[#93C553] rounded-xl px-4 pb-3 mb-8">
            <legend className="px-2 text-[#93C553]">Additional Information</legend>
            <input
                type="text"
                className="w-full bg-gray-100 rounded-lg p-2 outline-none focus:border-[#93C553] focus:border-2"
            />
            </fieldset>

           
            <button
            className="w-full bg-[#93C553] text-white py-3 rounded-xl text-lg font-medium hover:opacity-90 transition hover:cursor-pointer hover:bg-[#609647]"
            >
            Checkout
            </button>
          </div>
        </div>
        </section>
    )
}