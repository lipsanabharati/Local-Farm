"use client";

import {useEffect,useState,useRef} from "react";
import axios from "axios"
import { useToast } from "@/context/ToastContext";
import "quill/dist/quill.snow.css";

export default function BlogAdmin()
{
    const [blogs,setBlogs]=useState([]);
    const [showForm,setShowForm]=useState(false);
    const[showAddForm,setShowAddForm]=useState(false);
    const [selected,setSelected]=useState(0);

    const {showSuccess,showFail}=useToast();

    //form data
    const [id,setId]=useState(0);
    const [title,setTitle]=useState("");
    const [slug,setSlug]=useState("");
    const [introduction,setIntroduction]=useState("");
    const [content,setContent]=useState("");
    const [photos,setPhotos]=useState([]);
    const [previewPhotos,setPreviewPhotos]=useState([]);
    const [update,setUpdate]=useState(false);


    //add form data(adding api)
    const [addTitle,setAddTitle]=useState("");
    const [addSlug,setAddSlug]=useState("");
    const [addIntroduction,setAddIntroduction]=useState("");
    const [addContent,setAddContent]=useState("");
    const [addPhotos,setAddPhotos]=useState([]);
    const [addPreviewPhotos,setAddPreviewPhotos]=useState([]);
   

    //pagination states
    const [currentPage,setCurrentPage]=useState(1);
    const itemsPerPage=5;

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem- itemsPerPage;

    const currentBlogs=blogs.slice(indexOfFirstItem,indexOfLastItem);

    const totalPages= Math.ceil(blogs.length/itemsPerPage);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/blogs`)
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
        setTitle(item.title);
        setSlug(item.slug);
        setIntroduction(item.introduction);
        setContent(item.content);

        setPhotos(item.photos?.map(p=>p.imagePath)|| [""]);

    }

     const handleAddClick=()=>{
        setShowAddForm(true);
    }

    const handlePhotoChange= (e,index)=>{
       const file=e.target.files[0];
       if(!file) return;

       const updatedPhotos=[...photos];
       updatedPhotos[index]=file;
       setPhotos(updatedPhotos);

       //preview
       const updatedPreview=[...previewPhotos];
       updatedPreview[index]=URL.createObjectURL(file); //creates a url without passing to server
       setPreviewPhotos(updatedPreview);
    }

     const handleAddPhotoChange= (e,index)=>{
       const file=e.target.files[0];
       if(!file) return;

       const updatedPhotos=[...addPhotos];
       updatedPhotos[index]=file;
       setAddPhotos(updatedPhotos);

       //preview
       const updatedPreview=[...addPreviewPhotos];
       updatedPreview[index]=URL.createObjectURL(file); //creates a url without passing to server
       setAddPreviewPhotos(updatedPreview);
    }


    const addPhotoField=()=>{
        setPhotos([...photos,""]);
    }

    const addAddPhotoField=()=>{
        setAddPhotos([...addPhotos,""]);
    }

    const removePhotoField=(index)=>{
        const updated=photos.filter((_,i)=>i !== index);
        setPhotos(updated);
    }

     const addRemovePhotoField=(index)=>{
        const updated=addPhotos.filter((_,i)=>i !== index);
        setAddPhotos(updated);
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();

        //sending files must be done through form data
        const formData= new FormData();

        formData.append("title",title);
        formData.append("slug",slug);
        formData.append("introduction",introduction);
        formData.append("content",content);
        

        photos.forEach((photo)=>{
            if(photo){
                formData.append("photos",photo);
            }
        })

        try{
            await axios.put(`http://localhost:5000/api/blogs/${selected.id}`,formData,
                {
                    headers:{
                        "Content-Type":"multipart/form-data"
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

    const handleAddSubmit= async (e)=>{
        e.preventDefault();

        //sending files must be done through form data
        const formData= new FormData();

        formData.append("title",addTitle);
        formData.append("slug",addSlug);
        formData.append("introduction",addIntroduction);
        formData.append("content",addContent);
        

        addPhotos.forEach((photo)=>{
            if(photo){
                formData.append("photos",photo);
            }
        })

        try{
            await axios.post(`http://localhost:5000/api/blogs`,formData,
                {
                    headers:{
                        "Content-Type":"multipart/form-data"
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
    };


    const introEditorRef = useRef(null);
    const contentEditorRef = useRef(null);

    const introQuillRef = useRef(null);
    const contentQuillRef = useRef(null);

    useEffect(() => {
    if (!showForm) return;

    const loadQuill = async () => {
        const Quill = (await import("quill")).default;

        // INTRODUCTION EDITOR
        if (introEditorRef.current && !introQuillRef.current) {
            introQuillRef.current = new Quill(introEditorRef.current, {
                theme: "snow",
            });

            introQuillRef.current.root.innerHTML = introduction;

            introQuillRef.current.on("text-change", () => {
                setIntroduction(introQuillRef.current.root.innerHTML);
            });
        }

        // CONTENT EDITOR
        if (contentEditorRef.current && !contentQuillRef.current) {
            contentQuillRef.current = new Quill(contentEditorRef.current, {
                theme: "snow",
            });

            contentQuillRef.current.root.innerHTML = content;

            contentQuillRef.current.on("text-change", () => {
                setContent(contentQuillRef.current.root.innerHTML);
            });
        }
    };
    if(showForm)
    {
        loadQuill();
    }
    }, [showForm]);

    useEffect(() => {
    if (!showForm) {
        introQuillRef.current = null;
        contentQuillRef.current = null;
    }
    }, [showForm]);


    //add quill refs
     const introAddEditorRef = useRef(null);
    const contentAddEditorRef = useRef(null);

    const introAddQuillRef = useRef(null);
    const contentAddQuillRef = useRef(null);

    useEffect(() => {
    if (!showAddForm) return;

    const loadQuill = async () => {
        const Quill = (await import("quill")).default;

        // INTRODUCTION EDITOR
        if (introAddEditorRef.current && !introAddQuillRef.current) {
            introAddQuillRef.current = new Quill(introAddEditorRef.current, {
                theme: "snow",
            });

            introAddQuillRef.current.root.innerHTML = addIntroduction;

            introAddQuillRef.current.on("text-change", () => {
                setAddIntroduction(introAddQuillRef.current.root.innerHTML);
            });
        }

        // CONTENT EDITOR
        if (contentAddEditorRef.current && !contentAddQuillRef.current) {
            contentAddQuillRef.current = new Quill(contentAddEditorRef.current, {
                theme: "snow",
            });

            contentAddQuillRef.current.root.innerHTML = addContent;

            contentAddQuillRef.current.on("text-change", () => {
                setAddContent(contentAddQuillRef.current.root.innerHTML);
            });
        }
    };
    if(showAddForm)
    {
        loadQuill();
    }
    }, [showAddForm]);

    useEffect(() => {
    if (!showAddForm) {
        introAddQuillRef.current = null;
        contentAddQuillRef.current = null;
    }
    }, [showAddForm]);


    return(
        <section className="mt-20 mb-10 p-10 ">
            <table className="border-1 border-gray-300 table-fixed">
             <thead>
                <tr className="border-1 border-gray-300">
                    <th className="border-1 p-1 text-center">Id</th>
                    <th className="border-1 p-1 text-center">Title</th>
                    <th className=" border-1 p-1 text-center break-words max-w-[200px]">Slug</th>
                    <th className="border-1 p-1 text-center break-words max-w-[200px]">Introduction</th>
                    <th className=" border-1 p-1 text-center break-words max-w-[200px]">Content</th>
                    <th className="border-1 p-1 text-center">Created At</th>
                    <th className="border-1 p-1 text-center">Photos</th>
                    <th className="border-1 p-1 text-center">Update</th>
                </tr>
              </thead>
              <tbody>
                {
                    currentBlogs.map((blog,index)=>(
                        <tr key={index} className="border-1 border-gray-300">
                            <td className="border-1 p-1 text-center">{blog.id}</td>
                            
                            <td className="border-1 p-1 text-center">{blog.title}</td>
                            <td className="break-words max-w-[200px] border-1 p-1 text-center">{blog.slug}</td>
                            <td className="break-words max-w-[200px] border-1 p-1 text-center">
                                <div className="line-clamp-3 overflow-hidden text-left"  dangerouslySetInnerHTML={{ __html: blog.introduction }} />
                            </td>
                            <td className="break-words w-[200px] border-1 p-1 text-center"> 
                                <div className="line-clamp-3 overflow-hidden text-left"  dangerouslySetInnerHTML={{ __html: blog.content }} />
                               </td>
                            <td className="border-1 p-1 text-center">{blog.createdAt.slice(0,10)}</td>
                            <td className="border-1 p-1 text-center flex flex-col gap-2">{blog.photos?.map((image,index)=>(
                                <img
                                key={index} src={`http://localhost:5000/${image.imagePath}`} className="w-16 h-16 object-cover"></img>
                            ))}</td>
                            <td className="border-1 p-1 text-center"><button 
                            className="bg-[#609647] p-2 hover:bg-[#93C553] hover:cursor-pointer m-3 "
                            onClick={()=>handleUpdateClick(blog)}>Update</button></td>
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
                <button className="mt-4  bg-[#609647] text-white py-2 px-2 rounded-2xl font-bold hover:bg-[#93C553] hover:cursor-pointer transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]" onClick={handleAddClick}>Add Blog</button>
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
                            <label className="text-sm font-bold text-gray-700 ml-1">Title</label>
                            <input 
                                type="text" 
                                id='title' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Slug</label>
                            <input 
                                type="text" 
                                id='slug' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={slug} 
                                onChange={(e) => setSlug(e.target.value)} 
                                required 
                            />
                        </div>

                         <div className="flex flex-col gap-1.5">
                            <label>Introduction</label>
                            <div
                                ref={introEditorRef}
                                className="bg-white rounded-xl h-[150px]"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label>Content</label>
                            <div
                                ref={contentEditorRef}
                                className="bg-white rounded-xl h-[200px]"
                            />
                        </div>

                        
                        <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Photos</label>

                        {photos.map((_, index) => (
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
                            <label className="text-sm font-bold text-gray-700 ml-1">Title</label>
                            <input 
                                type="text" 
                                id='title' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={addTitle} 
                                onChange={(e) => setAddTitle(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Slug</label>
                            <input 
                                type="text" 
                                id='slug' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={addSlug} 
                                onChange={(e) => setAddSlug(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label>Introduction</label>
                            <div
                                ref={introAddEditorRef}
                                className="bg-white rounded-xl h-[150px]"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label>Content</label>
                            <div
                                ref={contentAddEditorRef}
                                className="bg-white rounded-xl h-[200px]"
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Photos</label>

                        {addPhotos.map((_, index) => (
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

                            <button
                                type="button"
                                onClick={() => addRemovePhotoField(index)}
                                className="bg-red-400 px-3 rounded-xl"
                            >
                                X
                            </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={addAddPhotoField}
                            className="bg-gray-300 p-2 rounded-xl"
                        >
                            + Add Photo
                        </button>
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
        </section>
    )
}