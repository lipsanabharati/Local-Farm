"use client";

import {useEffect,useState,useRef} from "react";
import axios from "axios"
import { useToast } from "@/context/ToastContext";
import "quill/dist/quill.snow.css";


export default function ProductAdmin()
{
    const [products,setProducts]=useState([]);
    const [showForm,setShowForm]=useState(false);
    const [showAddForm,setShowAddForm]=useState(false);
    const [selected,setSelected]=useState(0);

    const {showSuccess,showFail}=useToast();

    //form data
    const [categoryId,setCategoryId]=useState(0);
    const [productName,setProductName]=useState("");
    const [quantity,setQuantity]=useState(0);
    const [price,setPrice]=useState(0);
    const [description,setDescription]=useState("");
    const [photos,setPhotos]=useState([]);
    const [previewPhotos,setPreviewPhotos]=useState([]);
    const [update,setUpdate]=useState(false);

    //add form data(adding api)
    const [addCategoryId,setAddCategoryId]=useState(0);
    const [addProductName,setAddProductName]=useState("");
    const [addQuantity,setAddQuantity]=useState(0);
    const [addPrice,setAddPrice]=useState(0);
    const [addDescription,setAddDescription]=useState("");
    const [addPhotos,setAddPhotos]=useState([]);
    const [addPreviewPhotos,setAddPreviewPhotos]=useState([]);

    //delete states
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [deleteId, setDeleteId] = useState(null);


    //pagination states
    const [currentPage,setCurrentPage]=useState(1);
    const itemsPerPage=5;

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem- itemsPerPage;

    const currentProducts=products.slice(indexOfFirstItem,indexOfLastItem);

    const totalPages= Math.ceil(products.length/itemsPerPage);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/products`)
        .then((res)=>{
            setProducts(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.error(err);
            setProducts([]);
        })
    },[update])

    const handleUpdateClick=(item)=>{
        setShowForm(true);
        setSelected(item);

        //prefilling form
        setCategoryId(item.categoryId);
        setProductName(item.productName);
        setQuantity(item.quantity);
        setPrice(item.price);
        setDescription(item.description);

        setPhotos(item.photos?.map(p=>p.imagePath)|| [""]);

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
        await axios.delete(`http://localhost:5000/api/products/${deleteId}`);
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

        formData.append("categoryId",categoryId);
        formData.append("productName",productName);
        formData.append("quantity",quantity);
        formData.append("price",price);
        formData.append("description",description);

        photos.forEach((photo)=>{
            if(photo){
                formData.append("photos",photo);
            }
        })

        try{
            await axios.put(`http://localhost:5000/api/products/${selected.id}`,formData,
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

    const addHandleSubmit= async (e)=>{
        e.preventDefault();

        //sending files must be done through form data
        const formData= new FormData();

        formData.append("categoryId",addCategoryId);
        formData.append("productName",addProductName);
        formData.append("quantity",addQuantity);
        formData.append("price",addPrice);
        formData.append("description",addDescription);

        addPhotos.forEach((photo)=>{
            if(photo){
                formData.append("photos",photo);
            }
        })

        try{
            await axios.post(`http://localhost:5000/api/products`,formData,
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
        finally{
            setAddCategoryId(0);
            setAddProductName("");
            setAddQuantity(0);
            setAddPrice(0);
            setAddDescription("");
            setAddPhotos([]);
            setAddPreviewPhotos([]);
        }
    };


    const quillRef=useRef(null);
    const editorRef=useRef(null);

   useEffect(() => {
    if (!editorRef.current || quillRef.current) return;

    const loadQuill = async () => {
        const Quill = (await import("quill")).default;

        quillRef.current = new Quill(editorRef.current, {
            theme: "snow",
        });

        // set initial value
        quillRef.current.root.innerHTML = description;

        // listen for changes
        quillRef.current.on("text-change", () => {
            setDescription(quillRef.current.root.innerHTML);
        });
    };

    if (showForm) {
                loadQuill();
            }
    }, [showForm]);//runs when form opens

    useEffect(()=>{
        if(!showForm){
            quillRef.current=null;
        }
    },[showForm]);

        //quill for add form
        const addQuillRef = useRef(null);
        const addEditorRef = useRef(null);

        useEffect(()=>{
            if(!addEditorRef.current||addQuillRef.current) return;

            const loadQuill=async ()=>{
                const Quill=(await import("quill")).default;

                addQuillRef.current=new Quill(addEditorRef.current,{
                    theme:"snow",
                });

                //set initial value
                addQuillRef.current.root.innerHTML=addDescription;

                //listen for changes
                addQuillRef.current.on("text-change",()=>{
                    setAddDescription(addQuillRef.current.root.innerHTML);
                });
            };

            if(showAddForm)
            {
                loadQuill();
            }
        },[showAddForm]);

       useEffect(()=>{
        if(!showAddForm){
            addQuillRef.current=null;
        }
       },[showAddForm]);


    


    return(
        <section className="mt-20 mb-10 p-10 max-w-[1440px]">
            <div className="oveflow-x-auto">
            <table className="border-1 border-gray-300 ">
             <thead>
                <tr className="border-1 border-gray-300">
                    <th className="border-1 p-1">Id</th>
                    <th className="border-1 p-1">Category ID</th>
                    <th className="border-1 p-1">Product Name</th>
                    <th className="border-1 p-1">Quantity</th>
                    <th className="border-1 p-1">Price</th>
                    <th className="border-1 p-1">Description</th>
                    <th className="border-1 p-1">Created At</th>
                    <th className="border-1 p-1">Updated At</th>
                    <th className="border-1 p-1">Photos</th>
                    <th className="border-1 p-1">Update</th>
                    <th className="border-1 p-1">Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                    currentProducts.map((product,index)=>(
                        <tr key={index} className="border-1 border-gray-300">
                            <td className="border-1 p-1 text-center">{product.id}</td>
                            <td className="border-1 p-1 text-center">{product.categoryId}</td>
                            <td className="border-1 p-1 text-center">{product.productName}</td>
                            <td className="border-1 p-1 text-center">{product.quantity}</td>
                            <td className="border-1 p-1 text-center">{product.price}</td>
                           <td
                            className="line-clamp-3 max-w-[250px]"
                            dangerouslySetInnerHTML={{ __html: product.description }}
                            />
                            <td className="border-1 p-1 text-center ">{product.createdAt.slice(0,10)}</td>
                            <td className="border-1 p-1 text-center ">{product.updatedAt.slice(0,10)}</td>
                            <td className="border-1 p-1 text-center ">{product.photos?.map((image,index)=>(
                                <img
                                key={index} src={`http://localhost:5000/${image.imagePath}`} className="w-16 h-16 object-cover"></img>
                            ))}</td>
                            <td className="border-1 p-1 text-center"><button 
                            className="bg-[#609647] p-2 hover:bg-[#93C553] hover:cursor-pointer m-3 "
                            onClick={()=>handleUpdateClick(product)}>Update</button></td>

                            <td className="border-1 p-1 text-center">
                        <button 
                            className="bg-red-500 p-2 hover:bg-red-700 text-white cursor-pointer m-3"
                            onClick={() => handleDeleteClick(product.id)}
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
                <button className="mt-4  bg-[#609647] text-white py-2 px-2 rounded-2xl font-bold hover:bg-[#93C553] hover:cursor-pointer transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]" onClick={handleAddClick}>Add Product</button>
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
                            <label  className="text-sm font-bold text-gray-700 ml-1">Category ID</label>
                            <input 
                                type="number" 
                                id='category' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553]
                                 focus:bg-white outline-none transition-all text-gray-800"
                                value={categoryId} 
                                onChange={(e) => setCategoryId(e.target.value)} 
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
                            <label className="text-sm font-bold text-gray-700 ml-1">
                                Description
                            </label>

                            <div
                                ref={editorRef}
                                className="bg-white rounded-xl h-[150px]"
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

                    <form onSubmit={addHandleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label  className="text-sm font-bold text-gray-700 ml-1">Category ID</label>
                            <input 
                                type="number" 
                                id='category' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553]
                                 focus:bg-white outline-none transition-all text-gray-800"
                                value={addCategoryId} 
                                onChange={(e) => setAddCategoryId(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Product Name</label>
                            <input 
                                type="text" 
                                id='productName' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={addProductName} 
                                onChange={(e) => setAddProductName(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Quantity</label>
                            <input 
                                type="number" 
                                id='quantity' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={addQuantity} 
                                onChange={(e) => setAddQuantity(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Price</label>
                            <input 
                                type="number" 
                                id='price' 
                                className="p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#93C553] focus:bg-white outline-none transition-all text-gray-800"
                                value={addPrice} 
                                onChange={(e) => setAddPrice(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">
                                Description
                            </label>

                            <div
                                ref={addEditorRef}
                                className="bg-white rounded-xl h-[150px]"
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
                            add
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
                                        Are you sure you want to delete this product?
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