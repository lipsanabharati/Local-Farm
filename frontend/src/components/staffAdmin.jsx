"use client";

import {useEffect,useState,useRef} from "react";
import axios from "axios"
import { useToast } from "@/context/ToastContext";
import { useAuth } from "@/context/AuthContext";
import "quill/dist/quill.snow.css";


export default function StaffAdmin()
{
    const [staffs,setStaffs]=useState([]);
    const [showForm,setShowForm]=useState(false);
    const [showAddForm,setShowAddForm]=useState(false);
    const [selected,setSelected]=useState(0);

    const {showSuccess,showFail}=useToast();
    const {token}=useAuth();

    //form data
    const [name,setName]=useState("");
    const [position,setPosition]=useState("");
    const [imagePath,setImagePath]=useState([]);
    const [previewPhotos,setPreviewPhotos]=useState([]);
    const[update,setUpdate]=useState(false);

    //add form data(adding api)
    const [addName,setAddName]=useState("");
    const [addPosition,setAddPosition]=useState("");
    const [addImagePath,setAddImagePath]=useState([null]);
    const [addPreviewPhotos,setAddPreviewPhotos]=useState([]);

    //delete states
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [deleteId, setDeleteId] = useState(null);


    //pagination states
    const [currentPage,setCurrentPage]=useState(1);
    const itemsPerPage=5;

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem- itemsPerPage;

    const currentStaffs=staffs.slice(indexOfFirstItem,indexOfLastItem);

    const totalPages= Math.ceil(staffs.length/itemsPerPage);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/staff`)
        .then((res)=>{
            setStaffs(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.error(err);
            setStaffs([]);
        })
    },[update])

    const handleUpdateClick=(item)=>{
        setShowForm(true);
        setSelected(item);

        //prefilling form
        setName(item.name);
        setPosition(item.position);
       

        setImagePath([""]);

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
        await axios.delete(`http://localhost:5000/api/staff/${deleteId}`,{
            headers:{
                Authorization: `Bearer ${token}`
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

    const handlePhotoChange= (e,index)=>{
       const file=e.target.files[0];
       if(!file) return;

       const updatedPhotos=[...imagePath];
       updatedPhotos[index]=file;
       setImagePath(updatedPhotos);

       //preview
       const updatedPreview=[...previewPhotos];
       updatedPreview[index]=URL.createObjectURL(file); //creates a url without passing to server
       setPreviewPhotos(updatedPreview);
    }

     const handleAddPhotoChange= (e,index)=>{
       const file=e.target.files[0];
       if(!file) return;

       const updatedPhotos=[...addImagePath];
       updatedPhotos[index]=file;
       setAddImagePath(updatedPhotos);

       //preview
       const updatedPreview=[...addPreviewPhotos];
       updatedPreview[index]=URL.createObjectURL(file); //creates a url without passing to server
       setAddPreviewPhotos(updatedPreview);
    }

    // const addPhotoField=()=>{
    //     setImagePath([...imagePath,""]);
    // }

    //  const addAddPhotoField=()=>{
    //     setAddImagePath([...addImagePath,""]);
    // }

    // const removePhotoField=(index)=>{
    //     const updated=imagePath.filter((_,i)=>i !== index);
    //     setImagePath(updated);
    // }

    //  const addRemovePhotoField=(index)=>{
    //     const updated=addImagePath.filter((_,i)=>i !== index);
    //     setAddImagePath(updated);
    // }

    const handleSubmit= async (e)=>{
        e.preventDefault();

        //sending files must be done through form data
        const formData= new FormData();

        formData.append("name",name);
        formData.append("position",position);

        imagePath.forEach((photo) => {
      if (photo instanceof File) {
        formData.append("image", photo);
      }
    });
        try{
            await axios.put(`http://localhost:5000/api/staff/${selected.id}`,formData,
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    },
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

    const addHandleSubmit= async (e)=>{
        e.preventDefault();

        //sending files must be done through form data
        const formData= new FormData();

        formData.append("name",addName);
        formData.append("position",addPosition);

       addImagePath.forEach((photo) => {
        if (photo instanceof File) {
            formData.append("image", photo);
        }
        });


        try{
            await axios.post(`http://localhost:5000/api/staff`,formData,
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    },
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
        finally{
            setAddName("");
            setAddPosition("");
            setAddImagePath([null]);
        }
    };

    


    return(
        <section className="mt-20 mb-10 p-10 max-w-[1440px]">
            <div className="oveflow-x-auto">
            <table className="border-1 border-gray-300 ">
             <thead>
                <tr className="border-1 border-gray-300">
                    <th className="border-1 p-1">Id</th>
                    <th className="border-1 p-1">Name</th>
                    <th className="border-1 p-1">Position</th>
                    <th className="border-1 p-1">Created At</th>
                    <th className="border-1 p-1">Updated At</th>
                    <th className="border-1 p-1">Photos</th>
                    <th className="border-1 p-1">Update</th>
                    <th className="border-1 p-1">Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                    currentStaffs.map((staff,index)=>(
                        <tr key={index} className="border-1 border-gray-300">
                            <td className="border-1 p-1 text-center">{staff.id}</td>
                            <td className="border-1 p-1 text-center">{staff.name}</td>
                            <td className="border-1 p-1 text-center">{staff.position}</td>
                            <td className="border-1 p-1 text-center ">{staff.createdAt.slice(0,10)}</td>
                            <td className="border-1 p-1 text-center ">{staff.updatedAt.slice(0,10)}</td>
                            <td className="border-1 p-1 text-center">
                  <img
                    key={index}
                    src={`http://localhost:5000/${staff.imagePath}`}
                    className="w-16 h-16 object-cover"
                  ></img>
                </td>
                            <td className="border-1 p-1 text-center"><button 
                            className="bg-[#609647] p-2 hover:bg-[#93C553] hover:cursor-pointer m-3 "
                            onClick={()=>handleUpdateClick(staff)}>Update</button></td>

                            <td className="border-1 p-1 text-center">
                        <button 
                            className="bg-red-500 p-2 hover:bg-red-700 text-white cursor-pointer m-3"
                            onClick={() => handleDeleteClick(staff.id)}
                        >
                            Delete
                        </button>
                    </td>
                        </tr>

                    ))
                }
              </tbody>
            </table>
            </div>

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
                <button className="mt-4  bg-[#609647] text-white py-2 px-2 rounded-2xl font-bold hover:bg-[#93C553] hover:cursor-pointer transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]" onClick={handleAddClick}>Add Staff</button>
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
                            <label  className="text-sm font-bold text-gray-700 ml-1">Name</label>
                            <input 
                                type="text" 
                                id='name' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553]
                                 focus:bg-white outline-none transition-all text-gray-800"
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Position</label>
                            <input 
                                type="text" 
                                id='position' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={position} 
                                onChange={(e) => setPosition(e.target.value)} 
                                required 
                            />
                        </div>

                        
                       

                        <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Photos</label>

                        {imagePath.map((_, index) => (
                            <div key={index} className="flex gap-2">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handlePhotoChange(e,index)}
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl w-full"
                            />

                            {
                                previewPhotos[index] && (
                                    <img 
                                    src={previewPhotos[index]}
                                    className="w-16 h-16 rounded object-cover"
                                    />
                                )
                            }

                           
                            </div>
                        ))}
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

                    <form onSubmit={addHandleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label  className="text-sm font-bold text-gray-700 ml-1">Name</label>
                            <input 
                                type="text" 
                                id='name' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553]
                                 focus:bg-white outline-none transition-all text-gray-800"
                                value={addName} 
                                onChange={(e) => setAddName(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Position</label>
                            <input 
                                type="text" 
                                id='position' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={addPosition} 
                                onChange={(e) => setAddPosition(e.target.value)} 
                                required 
                            />
                        </div>

                        

                        
                        <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Photos</label>

                        {addImagePath.map((_, index) => (
                            <div key={index} className="flex gap-2">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleAddPhotoChange(e,index)}
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl w-full"
                            />

                            {
                                addPreviewPhotos[index] && (
                                    <img 
                                    src={addPreviewPhotos[index]}
                                    className="w-16 h-16 rounded object-cover"
                                    />
                                )
                            }

                           
                            </div>
                        ))}

                        
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
                                        Are you sure you want to delete this staff member?
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