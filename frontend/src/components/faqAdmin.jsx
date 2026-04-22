"use client";

import {useEffect,useState} from "react";
import axios from "axios"
import { useToast } from "@/context/ToastContext";
import { useAuth } from "@/context/AuthContext";

export default function FaqAdmin()
{
    const [faqs,setFaqs]=useState([]);
    const [showForm,setShowForm]=useState(false);
    const [showAddForm,setShowAddForm]=useState(false);

    const [selected,setSelected]=useState([]);

    const {showSuccess,showFail}=useToast();

    //form data
    const [id,setId]=useState(0);
    const [question,setQuestion]=useState("");
    const [answer,setAnswer]=useState("");
    const [update,setUpdate]=useState(false);

    //adding api data
    const [addQuestion,setAddQuestion]=useState("");
    const [addAnswer,setAddAnswer]=useState("");

     //delete states
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    //pagination states
    const [currentPage,setCurrentPage]=useState(1);
    const itemsPerPage=5;

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem- itemsPerPage;

    const currentFaqs=faqs.slice(indexOfFirstItem,indexOfLastItem);

    const totalPages= Math.ceil(faqs.length/itemsPerPage);

    const {token}=useAuth();

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/faqs`)
        .then((res)=>{
            setFaqs(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.error(err);
            setFaqs([]);
        })
    },[update])

    const handleUpdateClick=(item)=>{
        setShowForm(true);
        setSelected(item);

        //prefilling form
        setQuestion(item.question);
        setAnswer(item.answer);
    }

     const handleAddClick=()=>{
        setShowAddForm(true);
        
    }

     const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteDialog(true);
    };

     const confirmDelete = async () => {
    try {
        await axios.delete(`http://localhost:5000/api/faqs/${deleteId}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        showSuccess("Deleted Successfully");
        setShowDeleteDialog(false);
        setUpdate(prev => !prev);
            } catch (err) {
                console.log(err);
                showFail("Delete failed!");
            }
        };

        const cancelDelete = () => {
            setShowDeleteDialog(false);
            setDeleteId(null);
        };

  

    const handleSubmit= async (e)=>{
        e.preventDefault();

        const formData={
           "question":question,
           "answer":answer 
        }

        try{
            await axios.put(`http://localhost:5000/api/faqs/${selected.id}`,formData,
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
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

    const handleAddSubmit= async (e)=>{
        e.preventDefault();

        const formData={
           "question":addQuestion,
           "answer":addAnswer
        }
        try{
            await axios.post(`http://localhost:5000/api/faqs`,formData,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
            )

            showSuccess("Updated Successfully");
            setShowAddForm(false);
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
                    <th className="border-1 p-1 text-center">Question</th>
                    <th className="border-1 p-1 text-center">Answer</th>
                    <th className="border-1 p-1 text-center">Created At</th>
                    <th className="border-1 p-1 text-center">Updated At</th>
                    <th className="border-1 p-1 text-center">Update</th>
                    <th className="border-1 p-1 text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                   currentFaqs.map((faq,index)=>(
                        <tr key={index} className="border-1 border-gray-300">
                            <td className="border-1 p-1 text-center">{faq.id}</td>
                            
                            <td className="border-1 p-1 text-center">{faq.question}</td>
                            <td className="border-1 p-1 text-center">{faq.answer}</td>
                            
                            <td className="border-1 p-1 text-center">{faq.createdAt.slice(0,10)}</td>
                            <td className="border-1 p-1 text-center">{faq.updatedAt.slice(0,10)}</td>
                            <td className="border-1 p-1 text-center"><button 
                            className="bg-[#609647] p-2 hover:bg-[#93C553] hover:cursor-pointer m-3 "
                            onClick={()=>handleUpdateClick(faq)}>Update</button></td>
                            <td className="border-1 p-1 text-center"><button 
                            className="bg-red-400 p-2 hover:bg-red-300 hover:cursor-pointer m-3 "
                            onClick={()=>handleDeleteClick(faq.id)}>Delete</button></td>
                        </tr>

                    ))
                }
              </tbody>
            </table>

         <div className="flex gap-10">
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

            <div>
                <button className="mt-4  bg-[#609647] text-white py-2 px-2 rounded-2xl font-bold hover:bg-[#93C553] hover:cursor-pointer transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]" onClick={handleAddClick}>Add Category</button>
            </div>                 
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
                            <label className="text-sm font-bold text-gray-700 ml-1">Question</label>
                            <input 
                                type="text" 
                                id='question' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={question} 
                                onChange={(e) => setQuestion(e.target.value)} 
                                
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Answer</label>
                            <input 
                                type="text" 
                                id='question' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={answer} 
                                onChange={(e) => setAnswer(e.target.value)} 
                                
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


            {
                showAddForm && (

                    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
    
                            <div className="bg-white p-8 rounded-2xl w-[500px] max-h-[90vh] overflow-y-auto shadow-2xl">
                            
                            {/* Close Button */}
                            <button
                                onClick={() => setShowAddForm(false)}
                                className="float-right text-red-500 font-bold"
                            >
                                X
                            </button>

                    <form onSubmit={handleAddSubmit} className="flex flex-col gap-5">

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Question</label>
                            <input 
                                type="text" 
                                id='add-question' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={addQuestion} 
                                onChange={(e) => setAddQuestion(e.target.value)} 
                                
                            />
                        </div>

                         <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Answer</label>
                            <input 
                                type="text" 
                                id='add-answer' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={addAnswer} 
                                onChange={(e) => setAddAnswer(e.target.value)} 
                                
                            />
                        </div>



                        <button 
                            type='submit' 
                            className="mt-4  bg-[#609647] text-white py-4 rounded-2xl font-bold hover:bg-[#93C553] hover:cursor-pointer transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]"
                        >
                            Add
                        </button>
                    </form>

                    </div>
                </div>
                )
            }


         {
            showDeleteDialog && (
              <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-xl w-[400px] text-center">
                                    
                                    <h2 className="text-lg font-bold mb-4">
                                        Are you sure you want to delete this faq?
                                    </h2>

                                    <div className="flex justify-center gap-4">
                                        <button
                                            onClick={confirmDelete}
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                                        >
                                            Yes, Delete
                                        </button>

                                        <button
                                            onClick={cancelDelete}
                                            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                                        >
                                            Cancel
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )
                    }
        </section>
    )
}