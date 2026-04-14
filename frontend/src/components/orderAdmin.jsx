"use client";

import {useEffect,useState} from "react";
import axios from "axios"
import { useToast } from "@/context/ToastContext";


export default function OrderAdmin()
{
    const [orders,setOrders]=useState([]);
    const [showForm,setShowForm]=useState(false);
    const [selected,setSelected]=useState(0);

    const {showSuccess,showFail}=useToast();

    //form data
    const [id,setId]=useState(0);
    const [customerName,setCustomerName]=useState("");
    const [customerPhone,setCustomerPhone]=useState("");
    const [customerEmail,setCustomerEmail]=useState("");
    const [customerAddress,setCustomerAddress]=useState("");
    const [totalPrice,setTotalPrice]=useState("");
    const [orderStatus,setOrderStatus]=useState("");
    const [items,setItems]=useState("");
    const [update,setUpdate]=useState(false);

    //pagination states
    const [currentPage,setCurrentPage]=useState(1);
    const itemsPerPage=5;

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem- itemsPerPage;

    const currentOrders=orders.slice(indexOfFirstItem,indexOfLastItem);

    const totalPages= Math.ceil(orders.length/itemsPerPage);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/orders`)
        .then((res)=>{
            setOrders(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.error(err);
            setOrders([]);
        })
    },[update])

    const handleUpdateClick=(item)=>{
        setShowForm(true);
        setSelected(item);

        //prefilling form
        setOrderStatus(item.orderStatus);
    }

   

    const handleSubmit= async (e)=>{
        e.preventDefault();

        const data={
            "status":orderStatus,
        }

        try{
            await axios.patch(`http://localhost:5000/api/orders/${selected.id}`,data
            )

            showSuccess("Updated Successfully");
            setShowForm(false);
            setUpdate(prev=>!prev);
        }
        catch(err)
        {
            console.log(err);
            showFail("Update failed!");
        }
    };


    return(
        <section className="mt-20 mb-10 p-10">
            <table className="border-1 border-gray-300">
             <thead>
                <tr className="border-1 border-gray-300">
                    <th className="border-1 p-1 text-center">Id</th>
                    <th className="border-1 p-1 text-center">Customer Name</th>
                    <th className="border-1 p-1 text-center">Customer Phone</th>
                    <th className="border-1 p-1 text-center">Customer Address</th>
                    <th className="border-1 p-1 text-center">Total Price</th>
                    <th className="border-1 p-1 text-center">Order Status</th>
                    <th className="border-1 p-1 text-center">Created At</th>
                    <th className="border-1 p-1 text-center">Updated At</th>
                    <th className="border-1 p-1 text-center">Items</th>
                     <th className="border-1 p-1 text-center">Update</th>
                </tr>
              </thead>
              <tbody>
                {
                    currentOrders.map((order,index)=>(
                        <tr key={index} className="border-1 border-gray-300">
                            <td className="border-1 p-1 text-center">{order.id}</td>
                            
                            <td className="border-1 p-1 text-center">{order.customerName}</td>
                            <td className="border-1 p-1 text-center">{order.customerPhone}</td>
                            <td className="border-1 p-1 text-center">{order.customerAddress}</td>
                            <td className="border-1 p-1 text-center">{order.totalPrice}</td>
                            <td className="border-1 p-1 text-center">{order.orderStatus}</td>
                            <td className="border-1 p-1 text-center">{order.createdAt.slice(0,10)}</td>
                            <td className="border-1 p-1 text-center">{order.updatedAt.slice(0,10)}</td>
                            <td className="border-1 p-1 text-center flex flex-col gap-2">{order.items?.map((item,index)=>(
                               <table key={index} cellSpacing="10" >
                                <thead>
                                <tr>
                                <th className="border-1 p-1 text-center" >Id </th>
                                <th className="border-1 p-1 text-center">Order Id</th>
                                <th className="border-1 p-1 text-center">Product ID</th>
                                <th className="border-1 p-1 text-center">Price</th>
                                <th className="border-1 p-1 text-center">Quantity</th>
                                <th className="border-1 p-1 text-center">TotalPrice</th>
                                <th className="border-1 p-1 text-center">createdAt</th>
                                <th className="border-1 p-1 text-center">updatedAt</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                <td className="border-1 p-1 text-center">{item.id} </td>
                                <td className="border-1 p-1 text-center">{item.orderId}</td>
                                <td className="border-1 p-1 text-center">{item.productId}</td>
                                <td className="border-1 p-1 text-center">{item.price}</td>
                                <td className="border-1 p-1 text-center">{item.quantity}</td>
                                <td className="border-1 p-1 text-center">{item.totalPrice}</td>
                                <td className="border-1 p-1 text-center">{item.createdAt.slice(0,10)}</td>
                                <td className="border-1 p-1 text-center">{item.updatedAt.slice(0,10)}</td>
                                </tr>
                                </tbody>
                               </table>
                            ))}</td>
                            <td><button 
                            className="bg-[#609647] p-2 hover:bg-[#93C553] hover:cursor-pointer m-3 "
                            onClick={()=>handleUpdateClick(order)}>Update</button></td>
                        </tr>

                    ))
                }
              </tbody>
            </table>

            <div className="flex gap-2 mt-4">
            {[...Array(totalPages)].map((_, index) => (
                <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 border rounded hover:cursor-pointer ${
                    currentPage === index + 1
                    ? "bg-[#609647] text-white"
                    : "bg-white"
                }`}
                >
                {index + 1}
                </button>
            ))}
            </div>

            {
                showForm && (

                    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
    
                            <div className="bg-white p-8 rounded-2xl w-[500px] max-h-[90vh] overflow-y-auto shadow-2xl">
                            
                            {/* Close Button */}
                            <button
                                onClick={() => setShowForm(false)}
                                className="float-right text-red-500 font-bold"
                            >
                                X
                            </button>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                        

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Order Status</label>
                            <input 
                                type="text" 
                                id='order-status' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800 break-words max-w-[500px]"
                                value={orderStatus} 
                                onChange={(e) => setOrderStatus(e.target.value)} 
                                required 
                            />
                        </div>

                        

                        <button 
                            type='submit' 
                            className="mt-4  bg-[#609647] text-white py-4 rounded-2xl font-bold hover:bg-[#93C553] hover:cursor-pointer transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]"
                        >
                            Update
                        </button>
                    </form>

                    </div>
                </div>
                )
            }
        </section>
    )
}