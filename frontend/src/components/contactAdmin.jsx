"use client";

import {useEffect,useState} from "react";
import axios from "axios"
import { useToast } from "@/context/ToastContext";

export default function ContactAdmin()
{
    const [contacts,setContacts]=useState([]);
    const [showForm,setShowForm]=useState(false);
    const [selected,setSelected]=useState(0);

    const {showSuccess,showFail}=useToast();

    //form data
    const [id,setId]=useState(0);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [followUp,setFollowUp]=useState(false);
    const [update,setUpdate]=useState(false);

    //pagination states
    const [currentPage,setCurrentPage]=useState(1);
    const itemsPerPage=5;

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem- itemsPerPage;

    const currentContacts=contacts.slice(indexOfFirstItem,indexOfLastItem);

    const totalPages= Math.ceil(contacts.length/itemsPerPage);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/contact`)
        .then((res)=>{
            setContacts(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.error(err);
            setContacts([]);
        })
    },[update])

    const handleUpdateClick=(item)=>{
        setShowForm(true);
        setSelected(item);

        //prefilling form
        setFollowUp(item.followUp);
    }

   

    const handleSubmit= async (e)=>{
        e.preventDefault();

        const formData={
            followUp
        }
        try{
            await axios.patch(`http://localhost:5000/api/contact/${selected.id}`,formData
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
                    <th className="border-1 p-1 text-center">Name</th>
                    <th className="border-1 p-1 text-center">Email</th>
                    <th className="border-1 p-1 text-center">Message</th>
                    <th className="border-1 p-1 text-center">Follow Up</th>
                    <th className="border-1 p-1 text-center">Created At</th>
                    <th className="border-1 p-1 text-center">Updated At</th>
                    <th className="border-1 p-1 text-center">Update</th>
                </tr>
              </thead>
              <tbody>
                {
                   currentContacts.map((contact,index)=>(
                        <tr key={index} className="border-1 border-gray-300">
                            <td className="border-1 p-1 text-center">{contact.id}</td>
                            
                            <td className="border-1 p-1 text-center">{contact.name}</td>
                            <td className="border-1 p-1 text-center">{contact.email}</td>
                            <td className="border-1 p-1 text-center">{contact.message}</td>
                            <td className="border-1 p-1 text-center">{contact.followUp? "Yes":"No"}</td>
                            <td className="border-1 p-1 text-center">{contact.createdAt.slice(0,10)}</td>
                            <td className="border-1 p-1 text-center">{contact.updatedAt.slice(0,10)}</td>
                            <td className="border-1 p-1 text-center"><button 
                            className="bg-[#609647] p-2 hover:bg-[#93C553] hover:cursor-pointer m-3 "
                            onClick={()=>handleUpdateClick(contact)}>Update</button></td>
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
                            <label className="text-sm font-bold text-gray-700 ml-1">Follow Up</label>
                            <input 
                                type="checkbox" 
                                id='follow-up' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                checked={followUp} 
                                onChange={(e) => setFollowUp(e.target.checked)} 
                                
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