"use client";

import {useEffect,useState} from "react";
import axios from "axios"
import { useToast } from "@/context/ToastContext";

export default function CategoryAdmin()
{
    const [categories,setCategories]=useState([]);
    const [showForm,setShowForm]=useState(false);
    const [selected,setSelected]=useState(0);

    const {showSuccess,showFail}=useToast();

    //form data
    const [id,setId]=useState(0);
    const [categoryName,setCategoryName]=useState("");
    const [update,setUpdate]=useState(false);

    //pagination states
    const [currentPage,setCurrentPage]=useState(1);
    const itemsPerPage=5;

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem- itemsPerPage;

    const currentCategories=categories.slice(indexOfFirstItem,indexOfLastItem);

    const totalPages= Math.ceil(categories.length/itemsPerPage);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/product-categories`)
        .then((res)=>{
            setCategories(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.error(err);
            setCategories([]);
        })
    },[update])

    const handleUpdateClick=(item)=>{
        setShowForm(true);
        setSelected(item);

        //prefilling form
        setCategoryName(item.categoryName);
    }

   

    const handleSubmit= async (e)=>{
        e.preventDefault();

        const formData={
           categoryName 
        }
        try{
            await axios.patch(`http://localhost:5000/api/product-categories/${selected.id}`,formData
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
                    <th>Id</th>
                    <th>Category Name</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {
                   currentCategories.map((category,index)=>(
                        <tr key={index} className="border-1 border-gray-300">
                            <td>{category.id}</td>
                            
                            <td>{category.categoryName}</td>
                            
                            <td>{category.createdAt}</td>
                            <td>{category.updatedAt}</td>
                            <td><button 
                            className="bg-[#609647] p-2 hover:bg-[#93C553] hover:cursor-pointer m-3 "
                            onClick={()=>handleUpdateClick(category)}>Update</button></td>
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
                            <label className="text-sm font-bold text-gray-700 ml-1">Category Name</label>
                            <input 
                                type="text" 
                                id='category-name' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={categoryName} 
                                onChange={(e) => setCategoryName(e.target.value)} 
                                
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