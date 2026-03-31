"use client";

import {useEffect,useState} from "react";
import axios from "axios"
import { useToast } from "@/context/ToastContext";

export default function ProductAdmin()
{
    const [blogs,setBlogs]=useState([]);
    const [showForm,setShowForm]=useState(false);
    const [selected,setSelected]=useState(0);

    const {showSuccess,showFail}=useToast();

    //form data
    const [id,setId]=useState(0);
    const [title,setTitle]=useState("");
    const [slug,setSlug]=useState("");
    const [introduction,setIntroduction]=useState("");
    const [photos,setPhotos]=useState([""]);
    const [update,setUpdate]=useState(false);
    const [content,setContent]=useState("");
     const [author,setAuthor]=useState("");

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/blogslp`)
        .then((res)=>{
            setBlogs(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.error(err);
            setBlogs([]);
        })
    },[update])

    const handleUpdateClick=(item)=>{
        setShowForm(true);
        setSelected(item);

        //prefilling form
        setId(item.id);
        setTitle(item.title);
        setSlug(item.slug);
        setIntroduction(item.introduction);
        setContent(item.content? item.content :"");
        setAuthor(item.author? item.author :"");
        setPhotos(item.photos?.map(p=>p.imagePath)|| [""]);

    }

    const handlePhotoChange= (index,value)=>{
        const updated=[...photos];
        updated[index]=value;
        setPhotos(updated);
    }

    const addPhotoField=()=>{
        setPhotos([...photos,""]);
    }

    const removePhotoField=(index)=>{
        const updated=photos.filter((_,i)=>i !== index);
        setPhotos(updated);
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();

        const cleanedPhotos=photos.filter(p=>p.trim() !== "");

        const data={
            id,
            title,
            slug,
            introduction,
            content,
            photos:cleanedPhotos
        }

        try{
            await axios.put(`http://localhost:5000/api/blogs/${selected.slug}`,data);
            showSuccess("Updated Successfully");
            console.log("Updated:",data);
            setShowForm(false);
            setUpdate(prev=>!prev);
        }
        catch(err)
        {
            console.log(err);
            showFail("Update failed");
        }
    };


    return(
        <section className="mt-20 mb-10 p-10">
            <table className="border-1 border-gray-300">
                <tr className="border-1 border-gray-300">
                    <th>Id</th>
                    <th>Title</th>
                    <th>Slug</th>
                    <th className="p-2">Introduction</th>
                    <th className="p-2 overflow-hidden">Content</th>
                    <th>Author</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Photos</th>
                    <th>Update</th>
                </tr>
                {
                    blogs.map((blog,index)=>(
                        <tr key={index} className="border-1 border-gray-300">
                            <td>{blog.id}</td>
                            <td className="ps-8">{blog.title}</td>
                            <td>{blog.slug}</td>
                            <td className="ps-8">{blog.introduction}</td>
                            <td className="overflow-hidden">{blog.content}</td>
                            <td>{blog.author}</td>
                            <td>{blog.createdAt}</td>
                            <td>{blog.updatedAt}</td>
                            <td>{blog.photos?.map((image,index)=>(
                                <div
                                key={index}>{image.imagePath}</div>
                            ))}</td>
                            <td><button 
                            className="bg-[#609647] p-2 hover:bg-[#93C553] hover:cursor-pointer m-3 "
                            onClick={()=>handleUpdateClick(blog)}>Update</button></td>
                        </tr>

                    ))
                }
            </table>

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
                            <label  className="text-sm font-bold text-gray-700 ml-1">Category ID</label>
                            <input 
                                type="number" 
                                id='category' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553]
                                 focus:bg-white outline-none transition-all text-gray-800"
                                value={id} 
                                onChange={(e) => setId(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Product Name</label>
                            <input 
                                type="text" 
                                id='productName' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={productName} 
                                onChange={(e) => setProductName(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Quantity</label>
                            <input 
                                type="number" 
                                id='quantity' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={quantity} 
                                onChange={(e) => setQuantity(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Price</label>
                            <input 
                                type="number" 
                                id='price' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={price} 
                                onChange={(e) => setPrice(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Description</label>
                            <input 
                                type="text" 
                                id='description' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Photos</label>

                        {photos.map((photo, index) => (
                            <div key={index} className="flex gap-2">
                            <input
                                type="text"
                                value={photo}
                                onChange={(e) => handlePhotoChange(index, e.target.value)}
                                placeholder={`Photo ${index + 1}`}
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl w-full"
                            />

                            <button
                                type="button"
                                onClick={() => removePhotoField(index)}
                                className="bg-red-400 px-3 rounded-xl"
                            >
                                X
                            </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={addPhotoField}
                            className="bg-gray-300 p-2 rounded-xl"
                        >
                            + Add Photo
                        </button>
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